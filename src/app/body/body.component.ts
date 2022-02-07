import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  user = ''
  authorname = ''
  content = ''
  day: Date = new Date(2022, 2, 1, 12, 58, 17)
  likes: number = 0
  unlikes: number = 0
  id: number = 0;

  quotes: Quote[] = [
    new Quote(0, 'Mark Twain', 'Antony Mburia', '“Clothes make the man. Naked people have little or no influence in society.”', this.day),
    new Quote(1, 'Benjamin Franklin', 'Antony Mburia', 'Tell me and I forget. Teach me and I remember. Involve me and I learn. -', this.day)

  ]



  addlike(index: number) {
    this.quotes[index].likes++;
  }
  dislike(index: number) {
    this.quotes[index].unlikes++
  }


  addquote() {
    if (this.authorname == '') {
      this.authorname = 'unknown';

    }

    this.quotes.push(
      { id: this.id, authorname: this.authorname, user: this.user, content: this.content, likes: this.likes, unlikes: this.unlikes, day: this.day }
    );
    this.authorname = '';
    this.user = '';
    this.content = '';
  }

  delete(index: number) {
    this.quotes.splice(index, 1)
  }


  uploadtime = new Date(this.day).getTime()
  newtime = new Date().getTime()
  timepassed = this.newtime - this.uploadtime;




constructor() { }

ngOnInit(): void {
}

}
