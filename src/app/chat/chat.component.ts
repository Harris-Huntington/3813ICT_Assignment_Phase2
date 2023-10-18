import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  private socket: any;
  messagecontent: string = "";
  messages: string[] = [];

  constructor(private socketService: SocketService) {  }

  ngOnInit(): void {
    this.socketService.initSocket();
    this.socketService.getMessage((m: string)=>{this.messages.push(m)})
  }

  chat() {
    if (this.messagecontent){
      console.log(this.messagecontent)
      this.socketService.sendMessage(this.messagecontent)
      this.messagecontent = "";
    } else {
      console.log("No Message")
    }
  }

}
