const aws = require('aws-sdk')
const dynamodb = new aws.DynamoDB();
aws.config.update({
    region: "us-west-2",
    // endpoint: "http://localhost:8000"
})
const docClient = new aws.DynamoDB.DocumentClient()

const express = require('express')
const app = express()

app.use(express.json())

const requestLogger = (request, response, next) => {
    console.log('Method:', request.method)
    console.log('Path:  ', request.path)
    console.log('Body:  ', request.body)
    console.log('---')
    next()
}

app.use(requestLogger)

let notes = [
    {
        id: 1,
        content: "HTML is easy",
        date: "2020-01-10T17:30:31.098Z",
        important: true
    },
    {
        id: 2,
        content: "Browser can execute only Javascript",
        date: "2020-01-10T18:39:34.091Z",
        important: false
    },
    {
        id: 3,
        content: "GET and POST are the most important methods of HTTP protocol",
        date: "2020-01-10T19:20:14.298Z",
        important: true
    }
]

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.get('/api/notes', (req, res) => {
    res.json(notes)
})

const generateId = () => {
    const maxId = notes.length > 0
        ? Math.max(...notes.map(n => n.id))
        : 0
    return maxId + 1
}

app.post('/api/notes', (request, response) => {
    const body = request.body

    if (!body.content) {
        return response.status(400).json({
            error: 'content missing'
        })
    }

    const note = {
        content: body.content,
        important: body.important || false,
        date: new Date(),
        id: generateId(),
    }

    var params = {
        TableName: "notes",
        Item: {
            "content":  body.content,
            "date": new Date(),
            "important": body.important || false,
            "id": generateId().toString()
        }
    };

    docClient.put(params, function(err, data) {
       if (err) {
            console.error("Unable to add note", note.content, ". Error JSON:", JSON.stringify(err, null, 2));
            response.status(400)
            response.send('unable to add note')
        } else {
            console.log("PutItem succeeded:", note.content);
            response.json(note)

       }
    });

    notes = notes.concat(note)

    // response.json(note)
})

app.get('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    const note = notes.find(note => note.id === id)

    if (note) {
        response.json(note)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    notes = notes.filter(note => note.id !== id)

    response.status(204).end()
})

app.post('/signup', (req, res)=>{
    const body = req.body;
    console.log(body)
    if (!body.id || !body.psw){
        res.status('400')
        res.send('Missing fields')
    }

})

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})