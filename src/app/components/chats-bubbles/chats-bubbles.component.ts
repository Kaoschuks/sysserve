import { Component, Input, OnInit } from '@angular/core';
import { CommentsService } from 'src/app/services/comments/comments.service';

@Component({
  selector: 'chats-bubbles',
  templateUrl: './chats-bubbles.component.html',
  styleUrls: ['./chats-bubbles.component.scss'],
})
export class ChatsBubblesComponent implements OnInit {

  constructor(
    public _commentservices: CommentsService
  ) { }

  async ngOnInit() {
    await this._commentservices.get_comments()
  }

}
