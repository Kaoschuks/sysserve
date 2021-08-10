import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  loader: boolean = false
  comments: any = []
  msg: string
  constructor() {
  }

  async get_comments() {
    return await new Promise((resolve, reject) => {
      try {
        this.loader = true
        setTimeout(() => {
          this.loader = false
          this.comments = [
            {
              "msg": `Its mission is to support and improve locally led research, promote !ndings to encourage strong health policy and ensure e"ective healthcare programs and systems.`,
              "post_type": "text",
              "date": "",
              "user": {
                "username": "Kaoschuks"
              },
              "files": [
                ""
              ]
            },
            {
              "msg": ``,
              "post_type": "photo",
              "date": "",
              "user": {
                "username": "kelz"
              },
              "files": [
                "../../../assets/icon/avatar.jpg"
              ]
            },
            {
              "msg": ``,
              "post_type": "audio",
              "date": "",
              "user": {
                "username": "kelz"
              },
              "files": [
                ""
              ]
            },
            {
              "msg": ``,
              "post_type": "video",
              "date": "",
              "user": {
                "username": "Kels"
              },
              "files": [
                ""
              ]
            },
            {
              "msg": `Its mission is to support and improve locally led research`,
              "post_type": "text",
              "date": "",
              "user": {
                "username": "Kaoschuks"
              },
              "files": [
                ""
              ]
            },
          ]
          setInterval(() => {
            var elem = document.getElementById('chat');
            elem.scrollTop = elem.scrollHeight;
          }, 5000);
        }, 2000)
      }catch(ex) {
        this.loader = false
        reject({
          error: ex.error || ex.message || ex
        })
      }
    })
  }

  async save_comment(message: string, post_type: string = 'text', username: string = "Kaoschuks") {
    return await new Promise((resolve, reject) => {
      try {
        this.loader = true
        setTimeout(() => {
          
          this.comments.push({
            "msg": message,
            "post_type": post_type,
            "date": "",
            "user": {
              "username": username
            },
            "files": []
          })
          this.loader = false
          resolve("save comment")
        }, 2000)
      }catch(ex) {
        this.loader = false
        reject({
          error: ex.error || ex.message || ex
        })
      }
    })
  }
}
