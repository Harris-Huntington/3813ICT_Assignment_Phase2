import { Injectable } from '@angular/core'

import io from 'socket.io-client'

const SERVER_URL = 'http://localhost:3000/chat'

@Injectable({
    providedIn: 'root'
})

export class SocketService {
    private socket: any;
    constructor() {     }

    initSocket(): void { // Initialising socket
        this.socket = io(SERVER_URL)
    }

    sendMessage(message: string): void { // Send message with socket
        this.socket.emit('message', message)
    }

    getMessage(next: any) { // Get message with socket
        this.socket.on('message', (message: string) => next(message))
    }

}