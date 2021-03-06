import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import DeleteOutlined from '@material-ui/icons/DeleteOutlined'
import { makeStyles } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import { yellow, green, pink, blue } from '@material-ui/core/colors'

const useStyles = makeStyles({
  avatar: {
    backgroundColor: (box) => {
      if (box.category == 'work') {
        return yellow[700]
      }
      if (box.category == 'money') {
        return green[500]
      }
      if (box.category == 'todos') {
        return pink[500]
      }
      return blue[500]
    },
  }
})
export default function SlipBoxCard({ box, handleDelete }) {
  const classes = useStyles(box)

  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              {box.category[0].toUpperCase()}
            </Avatar>}
          action={
            <IconButton onClick={() => handleDelete(box.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={box.title}
          subheader={box.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {box.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}


// export default function SlipBoxCard({ box, handleDelete }) {
//   const classes = useStyles(box)

//   return (
//     <div>
//       <Card elevation={1} >
//         <CardHeader
//           avatar={
//             <Avatar className={classes.avatar}>
//               {box.category[0].toUpperCase()}
//               < /Avatar>}
//               action = {
//                 < IconButton onClick={() => handleDelete(box.id)
//                 }>
//                   <DeleteOutlined />
//                   < /IconButton>

//                   title = {box.title}
//                   subheader = {box.category}
//                   />
//                   <CardContent>
//                     <Typography variant="body2" color="textSecondary" >
//                       {box.details}
//                       < /Typography>
//                       < /CardContent>
//                       < /Card>
//                       < /div>
//                       )
// }