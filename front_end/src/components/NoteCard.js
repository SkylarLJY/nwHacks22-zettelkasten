import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";
import Send from "@material-ui/icons/Send";
import { makeStyles } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import { yellow, green, pink, blue } from "@material-ui/core/colors";


const useStyles = makeStyles({
  avatar: {
    backgroundColor: (note) => {
      if (note.shared == true) {
        return yellow[700];
      } else {
        return green[500];
      }
      if (note.category == "private") {
        return green[500];
      }
      if (note.category == "todos") {
        return pink[500];
      }
      return blue[500];
    },
  },
});

export default function NoteCard({ note, handleDelete, handleShare }) {
  const classes = useStyles(note);

  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              {note.category[0].toUpperCase()}
            </Avatar>
          }
          action={
            <div >
              <IconButton onClick={() => handleDelete(note.id)}>
                <DeleteOutlined />
              </IconButton>
              <IconButton onClick={() => handleShare(note.id)}>
                <Send />
              </IconButton>
            </div>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
