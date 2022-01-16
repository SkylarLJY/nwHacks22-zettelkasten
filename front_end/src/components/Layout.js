import React from 'react'
import { makeStyles } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import { useHistory, useLocation } from 'react-router-dom'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import SearchIcon from '@mui/icons-material/Search';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import CloudIcon from '@mui/icons-material/Cloud';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { format } from 'date-fns'
import Avatar from '@material-ui/core/Avatar'

const drawerWidth = 240

const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: '#EDDDD4',
      width: '100%',
      padding: theme.spacing(3),
    },
    root: {
      display: 'flex',
    },
    drawer: {
      width: drawerWidth,
    },
    MuiDrawer: {
      backgroundColor: "#E4C5AF"
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: "#E4C5AF"

    },
    active: {
      background: '#EDDDD4'
    },
    title: {
      padding: theme.spacing(2),
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    date: {
      flexGrow: 1,
    },
    toolbar: theme.mixins.toolbar,
    avatar: {
      marginLeft: theme.spacing(2)
    }
  }
})

export default function Layout({ children }) {
  const classes = useStyles()
  const history = useHistory()
  const location = useLocation()

  const menuItems = [
    {
      text: 'my notes',
      icon: <SubjectOutlined color="secondary" />,
      path: '/'
    },
    {
      text: 'search',
      icon: <SearchIcon color="secondary" />,
      path: '/search'
    },
    {
      text: 'create note',
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: '/create'
    },
    {
      text: 'slipboxes',
      icon: <StickyNote2Icon color="secondary" />,
      path: '/slipbox'
    },
    {
      text: 'database',
      icon: <CloudIcon color="secondary" />,
      path: '/database'
    },
    {
      text: 'trash',
      icon: <DeleteOutlineIcon color="secondary" />,
      path: '/trash'
    },
    {
      text: 'help',
      icon: <QuestionMarkIcon color="secondary" />,
      path: '/help'
    },
  ];

  return (
    <div className={classes.root}>
      {/* app bar */}
      <AppBar
        position="fixed"
        className={classes.appBar}
        elevation={0}
        color="primary"
      >
        <Toolbar>
          <Typography className={classes.date}>
            today is {format(new Date(), 'MMMM do' + ', ' + 'Y')}. so happy you're here! 
          </Typography>
          <Typography >username</Typography>
          <Avatar className={classes.avatar} src="/mario-av.png" />
        </Toolbar>
      </AppBar>

      {/* side drawer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{ paper: classes.drawerPaper }}
        anchor="left"
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            slip box notes
          </Typography>
        </div>

        {/* links/list section */}
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => history.push(item.path)}
              className={location.pathname == item.path ? classes.active : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>

      </Drawer>

      {/* main content */}
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  )
}
