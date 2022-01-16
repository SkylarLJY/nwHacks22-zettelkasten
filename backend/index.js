const express = require('express')
const app = express()

app.use(express.json())
const cors = require('cors')

const requestLogger = (request, response, next) => {
    console.log('Method:', request.method)
    console.log('Path:  ', request.path)
    console.log('Body:  ', request.body)
    console.log('---')
    next()
}
app.use(express.static('build'))
app.use(cors())
app.use(express.json())
app.use(requestLogger)

let notes = [
    {
        title: "Yoshi's birthday bash",
        details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        category: "reminders",
        id: 1
    },
    {
        title: "Complete my ninja training",
        details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
        category: "work",
        id: 2
    },
    {
        title: "Order a pizza!",
        details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        category: "todos",
        id: 3
    },
    {
        title: "Buy Yoshi's Birthday Gift",
        details: "Mario ipsum RGB mushroom 1-up. Cloud lakitu slide fire flower pipe jump swim, lava slide koopa troopa side-scrolling starman fire bar koopa paratroopa! Pipe cloud buzzy beetle koopa troopa game over, goomba invincible Mario green shell slide koopa paratroopa fire bar question block 1985 koopa troopa fireball Mushroom Kingdom. Lava Mushroom Kingdom.",
        category: "todos",
        id: 4
    },
    {
        title: "Pay the milkman",
        details: "Mario ipsum RGB mushroom 1-up. Cloud lakitu slide fire flower pipe jump swim, lava slide koopa troopa side-scrolling starman fire bar koopa paratroopa! Pipe cloud buzzy beetle koopa troopa game over, goomba invincible Mario green shell slide koopa paratroopa fire bar question block 1985 koopa troopa fireball Mushroom Kingdom. Lava Mushroom Kingdom. Mario ipsum RGB mushroom 1-up. Cloud lakitu slide fire flower pipe jump swim, lava slide koopa troopa side-scrolling starman fire bar koopa paratroopa! Pipe cloud buzzy beetle koopa troopa game over, goomba invincible Mario green shell slide koopa paratroopa fire bar question block 1985 koopa troopa fireball Mushroom Kingdom. Lava Mushroom Kingdom.",
        category: "money",
        id: 5
    },
    {
        title: "Check my promo codes",
        details: "Mario ipsum RGB mushroom 1-up. Cloud lakitu slide fire flower pipe jump swim, lava slide koopa troopa side-scrolling starman fire bar koopa paratroopa! Pipe cloud buzzy beetle koopa troopa game over, goomba invincible Mario green shell slide koopa paratroopa fire bar question block 1985 koopa troopa fireball Mushroom Kingdom. Lava Mushroom Kingdom.",
        category: "reminders",
        id: 6
    },
    {
        title: "Make a new website banner",
        details: "Mario ipsum RGB mushroom 1-up. Cloud lakitu slide fire flower pipe jump swim, lava slide koopa troopa side-scrolling starman fire bar koopa paratroopa! Pipe cloud buzzy beetle koopa troopa game over, goomba invincible Mario green shell slide koopa paratroopa fire bar question block 1985 koopa troopa fireball Mushroom Kingdom. Lava Mushroom Kingdom.",
        category: "work",
        id: 7
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

    const note = {
        details: body.details,
        category: body.category,
        title: body.title,
        id: generateId(),
    }

    notes = notes.concat(note)

    response.json(note)
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

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})