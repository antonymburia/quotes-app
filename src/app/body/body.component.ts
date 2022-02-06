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

  quotes: Quote[] = [
    new Quote(1, "Benjaminfranklin", "Antony Mburia", "Tell me and I forget. Teach me and I remember. Involve me and I learn.", new Date(), 0, 0)
  ]
  addNewQuote(quote) {
    quote.author = quote.author;
    quote.user = quote.user;
    quote.content = quote.content;
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
