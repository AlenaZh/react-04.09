//пользовательские стили
import './MessageWindow.scss';

//импорт React
import React, { Component } from 'react';

//импортируем пользовательские компоненты
import OpenUserChat from './OpenUserChat/';//открытый пользователь
import Messages from './Messages/';//сообщения
import SendForm from './SendForm/';//форма отправки сообщения

export default class MessageWindow extends Component {
    render() {
        return (
            <div className="message-window">
                <OpenUserChat />
                <Messages />
                <SendForm />
            </div>
        );
    }
}