import React, { useState, useEffect, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

import NewMessage from './NewMessage'

const useStyles = makeStyles(theme => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
    height: '70vh'
  },
  list: {
    marginBottom: theme.spacing(2),
    maxHeight: '100%',
    overflow: 'auto'
  },
}))

const Chat = ({ history }) => {
  const classes = useStyles();
  const [messages, setMessages] = useState([])

  const chatDomRef = useRef() //referencia en el dom
  
  const addMessage = (message) => {
    messages.push(message) //empujar mensaje a array de mensajes
    setMessages([...messages.sort((a, b) => a.date - b.date)]) // reasignamos el state, clonamos array de mesages
    
    if(chatDomRef.current) {//cuando haya sido cargada ésta referencia
      chatDomRef.current.scrollTop = chatDomRef.current.scrollHeight
    }
  }

  useEffect(() => { //cuando se carge el componente de chat tambien se cargue la conversación
    const chatRef = firebase.database().ref('/chat') //hacemos una referencia a la colección de chat

    // cada vez que haya un nuevo elemento(mensaje) se disapre una función y lo agregue al chat hijo solamente y no recarga todo sino sólo el nuevo mensaje
    chatRef.on(
      'child_added',
      snapshot => {  // nuevo mensaje
        const messageItem = snapshot.val()
        firebase.database().ref(`/users/${messageItem.user}`) //referencia al mensaje del usuario con id..
        .once('value') //leer sólo una vez
        .then(userResp => {
          messageItem.user = userResp.val() //asociar mensaje con datos de usuario
          addMessage(messageItem) //agregar mensaje a la lista de mensajes
        })
      },
      error => {
        console.log(error)
        if (error.message.includes('permission_denied')) {
          history.push('/login')
        }
      }
    )

  }, []) //cero dependencias corre una vez, cada carga
  

  return(
    <Container>
      <Paper square className={classes.paper}>
          <Typography className={classes.text} variant="h5" gutterBottom>
            Chat
          </Typography>
          <List className={classes.list} ref={chatDomRef}>
            {messages.map(({ date, user, message }) => (
              <ListItem button key={date}>
                <ListItemAvatar>
                  <Avatar alt={user.name} src={user.avatar} />
                </ListItemAvatar>
                <ListItemText primary={user.name} secondary={message} />
              </ListItem>
            ))}
          </List>
        </Paper>
        <NewMessage/> </Container>
  )
}

export default withRouter(Chat)