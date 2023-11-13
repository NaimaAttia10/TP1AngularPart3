export class UserAuth {
  id: string;
  ttl: number;
  created: Date;
  userId: number;

  constructor(id: string , ttl: number,created:string,userId:number) {
    this.id = id;
    this.ttl = ttl;
    this.userId=userId;
    this.created=new Date(created);
  }

}
