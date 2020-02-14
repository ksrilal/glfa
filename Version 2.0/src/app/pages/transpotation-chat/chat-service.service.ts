import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {
  constructor(private afs: AngularFirestore) {}

  getAllAuthors(){
    return this.afs.collection('authors').valueChanges();
  }

  loadMessages(gropChatId) {
    // return messages;
    return this.afs
      .collection('messages')
      .doc(gropChatId)
      .collection(gropChatId, ref => ref.orderBy('timestamp', 'asc'))
      .valueChanges();
  }

  sednMessage(message: any, gropChatId) {
    this.afs
      .collection('messages')
      .doc(gropChatId)
      .collection(gropChatId)
      .add({
        content: message,
        idFrom: 'dVT9coOUMmgqXAli2ttX6Ct87S22',
        idTo: 'y28mYW3xEFY6OSoH9etzvAjBUnJ3',
        // 'idFrom': widget.currentId,
        // 'idTo': widget.peerid,
        timestamp: Date.now().toString(),
      });
  }


  // reply(message: string) {
  //   const botReply: any = this.loadBotReplies().find(
  //     (reply: any) => message.search(reply.regExp) !== -1);

  //   if (botReply.reply.type === 'quote') {
  //     botReply.reply.quote = message;
  //   }

  //   if (botReply.type === 'gif') {
  //     botReply.reply.files[0].url =
  //       gifsLinks[Math.floor(Math.random() * gifsLinks.length)];
  //   }

  //   if (botReply.type === 'pic') {
  //     botReply.reply.files[0].url =
  //       imageLinks[Math.floor(Math.random() * imageLinks.length)];
  //   }

  //   if (botReply.type === 'group') {
  //     botReply.reply.files[1].url =
  //       gifsLinks[Math.floor(Math.random() * gifsLinks.length)];
  //     botReply.reply.files[2].url =
  //       imageLinks[Math.floor(Math.random() * imageLinks.length)];
  //   }

  //   botReply.reply.text =
  //     botReply.answerArray[
  //       Math.floor(Math.random() * botReply.answerArray.length)
  //     ];
  //   return { ...botReply.reply };
  // }


}
