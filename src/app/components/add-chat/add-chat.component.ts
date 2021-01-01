import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { CommentsService } from 'src/app/services/comments/comments.service';

@Component({
  selector: 'add-chat',
  templateUrl: './add-chat.component.html',
  styleUrls: ['./add-chat.component.scss'],
})
export class AddChatComponent implements OnInit {

  isFocus: boolean = false
  fab: boolean = false
  btn: boolean = false
  constructor(
    public _commentservices: CommentsService,
    private _toastctrl: ToastController
  ) { }

  ngOnInit() {
    this._commentservices.msg = ""
  }

  async sendMessage() {
    const res: any = await this._commentservices.save_comment(this._commentservices.msg)
    if(res.error) {
      const toast: any = await this._toastctrl.create({
        message: res.error,
        duration: 3000,
        position: 'bottom',
      })
      toast.present();
    }
    if(!res.error) {
      this._commentservices.msg = ''
      this.btn = false
    }
  }

  showOptionsToggle(value?: boolean) {
    if (value !== undefined) {
      this.isFocus = value;
      return;
    }
    this.isFocus = !this.isFocus;
  }

  open_file(id: string) {
    this.btn = true;
    setTimeout(() => {
      document.getElementById(id).click()
    }, 500)
  }

  hide_attachment(btn: boolean) {
    this.btn = btn;
  }

  toogleVisibility() {
    this.btn = true
    document.getElementById('fileoption').style.visibility = (this.fab) ? 'hidden' : 'visible' ;
    this.fab = (!this.fab) ? true : false ;
  }
}
