export class Quote {
  id: number;
  authorname: string;
  user: string;
  content: string;
  day:  Date;
  likes: number;
  unlikes: number;

  constructor(id: number, authorname: string, user: string, content: string, day: Date) {
    this.id = id;
    this.authorname = authorname;
    this.user = user;
    this.content= content;
    this.day = day;
    this.likes = 0;
    this.unlikes = 0;
  }
}
