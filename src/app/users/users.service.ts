
export class UserService{
   private users:{id:number,name:string}[] = [
        {
          id: 1,
          name: 'Boss'
        },
        {
          id: 2,
          name: 'Hugo'
        },
        {
          id: 3,
          name: 'Angel'
        }
      ];

    getUsers(){
        return this.users;
    }
}