import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  user = 'Antony Mburia'
  authorname = 'Benjamin Franklin'
  content = 'Tell me and I forget. Teach me and I remember. Involve me and I learn. -'
  day: Date = new Date()
  likes: number = 0
  unlikes: number = 0

  quote = [
    { name: this.user, authorname: this.authorname, content: this.content, likes: 0, unlikes: 0, day: new Date(), }
  ]
  addlike(){
    this.likes++;
    return this.likes;
  }
  dislike(){
    this.unlikes++;
  }
  addquote() {
    this.quote.push(
      { name: this.user, authorname: this.authorname, content: this.content, likes:this.likes, unlikes:this.unlikes, day: this.day}
    )
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
