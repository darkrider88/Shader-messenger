import moment from 'moment'
import React from 'react'
import { View, Text } from 'react-native'
import { Message } from '../../types'
import styles from './styles'

export type ChatMessageProps = {
    message: Message
}

const ChatMessage = (props: ChatMessageProps) => {
    const {message, myId} = props;
    const isMyMessage = () =>{
        return message.user.id === myId;
    }
  
    return (
        <View style={styles.container}>
        <View style={[styles.messageBox,
            { 
                backgroundColor: isMyMessage()? 'rgb(149, 178, 233)':'rgb(204, 208, 219)',
                marginLeft: isMyMessage() ? 50: 0,
                marginRight: isMyMessage()? 0: 50,
            
            }]}>
            {!isMyMessage() && <Text style={styles.name}>{message.user.name}</Text>}
            <Text style={styles.message}>{message.content}</Text>
            <Text style={styles.time}>{'✓ '+moment(message.createdAt, "HH:mm:ss").format("hh:mm")}</Text>
        </View>
        </View>
    )
}

export default ChatMessage;
