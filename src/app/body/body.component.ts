import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

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
  id: number = 0;

  quotes: Quote[] = [
    new Quote(1, "Benjaminfranklin", "Antony Mburia", "Tell me and I forget. Teach me and I remember. Involve me and I learn.", new Date())
  ]
  

  // addNewQuote(quote: Quote) {
  //   quote.authorname = quote.authorname;
  //   quote.user = quote.user;
  //   quote.content = quote.content;
  //   this.quotes.push(quote)
  // }
addlike(index:number){
  this.quotes[index].likes++;
}
dislike(index:number){
  this.quotes[index].unlikes++
}
  

  addquote() {
    this.quotes.push(
      { id: this.id, authorname: this.authorname, user: this.user, content: this.content, likes: this.likes, unlikes: this.unlikes, day: this.day }
    )
  }


  constructor() { }

  ngOnInit(): void {
  }

}
