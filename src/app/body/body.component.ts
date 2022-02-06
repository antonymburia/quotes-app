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

  quote = [
    { name: this.user, authorname: this.authorname, content: this.content }
  ]
  addquote() {
    this.quote.push(
      { name: this.user, authorname: this.authorname, content: this.content }
    )
  }

  constructor() { }

  ngOnInit(): void {
  }

}
