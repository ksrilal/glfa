import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../extra-components/chat/chat.service';
import { ChatServiceService } from '../chat-service.service';

@Component({
  selector: 'ngx-trans-chat',
  templateUrl: './trans-chat.component.html',
  styleUrls: ['./trans-chat.component.scss']
})
export class TransChatComponent implements OnInit {

  messages;

  private alive = true;
  private types = {
    mobile: "mobile",
    home: "home",
    work: "work"
  };
  contacts;


  ngOnInit() {}
  currentUserId = "th7JuiZXOAMap1JgLU0wWq3MeNt2";

  constructor(private chatService : ChatServiceService) {
    chatService.getAllAuthors().subscribe(contact =>{
    this.contacts = contact;
    console.log(contact)

    });
    // this.chatService.loadMessages().subscribe(messages => {
    //   this.messages = messages;
    //   console.log(this.messages);
    // });
    // forkJoin(this.userService.getContacts(), this.userService.getRecentUsers())
    //   .pipe(takeWhile(() => this.alive))
    //   .subscribe(([contacts, recent]: [Contacts[], RecentUsers[]]) => {
    //     this.contacts = contacts;
    //     console.log(this.contacts);
    //   });
  }

  userName = "SSA Chat";
  peerId = null;
  selectChat(t) {
    // tslint:disable-next-line: no-console
    this.userName = t.fname;
    console.log(this.userName)
    this.peerId = t.id;
    // tslint:disable-next-line: no-console
    console.log(t);
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy() {
    this.alive = false;
  }

  gropChatId;

  getGroupChatId(currentUserId, peerId) {
    return currentUserId + "-" + peerId;
  }

  getChat(peer) {
    this.messages = null;

    this.userName = peer.name;
    this.peerId = peer.id;

    const peerId = peer.id;
    this.userName=peer.fname;

    this.gropChatId = this.getGroupChatId(this.currentUserId, peer.id);
    // this.gropChatId = this.currentUserId + "-" + peerId;

    this.chatService.loadMessages(this.gropChatId).subscribe(messages => {
      this.messages = messages;
    });

    // tslint:disable-next-line: no-console
    //console.log(this.gropChatId);
    console.log(this.peerId);
  }

  sendMessage(event: any) {
    // const groupChatId =
    //   "dVT9coOUMmgqXAli2ttX6Ct87S22-y28mYW3xEFY6OSoH9etzvAjBUnJ3";
    const groupChatId = this.getGroupChatId(this.currentUserId, this.peerId);

    this.chatService.sendMessage(event.message, groupChatId);


    const files = !event.files ? [] : event.files.map((file) => {
      return {
        url: file.src,
        type: file.type,
        icon: 'nb-compose',
      };
    });

    this.messages.push({
      text: event.message,
      date: new Date(),
      reply: true,
      type: files.length ? 'file' : 'text',
      files: files,
      user: {
        name: 'Jonh Doe',
        avatar: 'https://i.gifer.com/no.gif',
      },
    });

    // const botReply = this.chatService.reply(event.message);
    // if (botReply) {
    //   setTimeout(() => {
    //     this.messages.push(botReply);
    //   }, 500);
    // }
  }

}
