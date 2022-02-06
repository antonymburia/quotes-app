import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-app-form',
  templateUrl: './app-form.component.html',
  styleUrls: ['./app-form.component.css']
})
export class AppFormComponent implements OnInit {
 user =''
 authorname =''
 content = ''

 quote = [
   {name:this.user, authorname:this.authorname, content:this.content }
 ]
 addquote(){
  this.quote.push(
    {name:this.user, authorname:this.authorname, content:this.content}
  )
 }
  constructor() { }

  ngOnInit(): void {
  }

}
