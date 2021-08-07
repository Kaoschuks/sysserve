import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'add-chat',
  templateUrl: './add-chat.component.html',
  styleUrls: ['./add-chat.component.scss'],
})
export class AddChatComponent implements OnInit {

  isFocus: boolean = false
  msg: string = ''
  fab: boolean = false
  constructor(
  ) { }

  ngOnInit() {
    this.msg = ""
  }

  async sendMessage() {
  }

  showOptionsToggle(value?: boolean) {
    if (value !== undefined) {
      this.isFocus = value;
      return;
    }
    this.isFocus = !this.isFocus;
  }

  openFiles() {
    document.getElementById('fileoption').click()
  }

  toogleVisibility() {
    document.getElementById('fileoption').style.visibility = (this.fab) ? 'hidden' : 'visible' ;
    this.fab = (!this.fab) ? true : false ;
  }
}
