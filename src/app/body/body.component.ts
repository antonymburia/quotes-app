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
  day: Date = new Date()
  likes: number = 0
  unlikes: number = 0
  id: number = 0;
  time: number = 0;
  key: string = ''

  quotes: Quote[] = [
    new Quote(0, 'Mark Twain', 'Antony Mburia', '“Clothes make the man. Naked people have little or no influence in society.”', new Date(2022, 2, 2, 15, 58, 17)),
    new Quote(1, 'Benjamin Franklin', 'Antony Mburia', 'Tell me and I forget. Teach me and I remember. Involve me and I learn. -', new Date(2022, 2, 0, 20, 0, 17))

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
      { id: this.id, authorname: this.authorname, user: this.user, content: this.content, likes: this.likes, unlikes: this.unlikes, day: this.day, time: this.time, key: this.key }
    );
    this.authorname = '';
    this.user = '';
    this.content = '';

  }


  delete(index: number) {
    this.quotes.splice(index, 1)
  }




  timediff(index: number) {
    var uploadtime = new Date(this.quotes[index].day).getTime()
    var newtime = new Date().getTime()
    var diff = uploadtime - newtime;
    var dayspassed = Math.floor(diff / 86400000);//days
    var timehours = Math.floor((diff % 86400000) / 3600000); //hours
    var timeminutes = Math.ceil(((diff % 86400000) / 3600000) / 60000); //minutes

    if (dayspassed >= 1) {
      this.quotes[index].time = dayspassed
      return this.quotes[index].time;
    } else {
      this.quotes[index].time = timehours
      return this.quotes[index].time = timehours

    }
  }
  timehours(i: any) {
    var uploadtime = new Date(this.quotes[i].day).getTime()
    var newtime = new Date().getTime()
    var diff = newtime - uploadtime;
    var dayspassed = Math.floor(diff / 86400000);//days
    var timehours = Math.floor((diff % 86400000) / 3600000); //hours
    var timeminutes = Math.ceil(((diff % 86400000) / 3600000) / 60000); //minutes

    if (dayspassed >= 1) {
      return i = "days ago"
    } else {
      return i = "hours ago"

    }

  }

  best!: number;

  bestquote() {
    this.best = 0;

    for (let i = 0; i < this.quotes.length; i++) {
      if (this.quotes[i].likes > this.best) {
        this.content = this.quotes[i].content;
        this.authorname = this.quotes[i].authorname;
        this.user = this.quotes[i].user;
        this.best = this.quotes[i].likes;
      }

    }
  }






  constructor() { }

  ngOnInit(): void {
  }

}
