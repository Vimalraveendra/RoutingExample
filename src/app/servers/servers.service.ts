

export class ServersService{
    private servers = [
        {
          id: 1,
          name: 'Productionserver',
          status: 'online'
        },
        {
          id: 2,
          name: 'Testserver',
          status: 'offline'
        },
        {
          id: 3,
          name: 'Devserver',
          status: 'offline'
        }
      ];

      getServers(){
        return this.servers;
      }
}