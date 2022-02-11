export class Quote {
   id: number;
  public authorname: string;
  public  user: string;
  public  content: string;
  public day:  Date;
  public likes: number;
  public  unlikes: number;
  public  time:number;
  public key:string;

  constructor(id: number, authorname: string, user: string, content: string, day: Date) {
    this.id = id;
    this.authorname = authorname;
    this.user = user;
    this.content= content;
    this.day = day;
    this.likes = 0;
    this.unlikes = 0;
    this.time = 0;
    this.key = '';
  }
}

