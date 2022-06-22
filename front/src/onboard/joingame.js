import React from 'react'
import { useParams } from 'react-router-dom'
const socket  = require('../connection/socket').socket



const JoinGameRoom = (gameid, userName, isCreator) => {
    const idData = {
        gameId : gameid,
        userName : userName,
        isCreator: isCreator
    }
    socket.emit("playerJoinGame", idData)
}
  
  
const JoinGame = (props) => {
    const { gameid } = useParams()
    JoinGameRoom(gameid, props.userName, props.isCreator)
    return <div>
        <h1 style = {{textAlign: "center"}}>Welcome to Chess with Friend!</h1>
        <h3 style = {{textAlign: "center"}}>Made with ❤️ by Kyial and Kutman. Follow us on <a href = 'https://instagram.com/kaminarinoyume?igshid=YmMyMTA2M2Y=' target = '_blank'>Kyial's instagram</a>, <a href = 'https://instagram.com/kutmanflame?igshid=YmMyMTA2M2Y=' target = '_blank'>Kutman's instagram</a>.</h3>
    </div>
}

export default JoinGame
  
