import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CommentsService } from 'src/app/services/comments/comments.service';

@Component({
  selector: 'chats-bubbles',
  templateUrl: './chats-bubbles.component.html',
  styleUrls: ['./chats-bubbles.component.scss'],
})
export class ChatsBubblesComponent implements OnInit, OnChanges {

  constructor(
    public _commentservices: CommentsService
  ) { 
  }

  onPress($event) {
    console.log("onPress", $event);
  }

  ngOnChanges() {
    console.log('test jdsbkj bjks')
  }

  async ngOnInit() {
    await this._commentservices.get_comments()
    
  }

}
