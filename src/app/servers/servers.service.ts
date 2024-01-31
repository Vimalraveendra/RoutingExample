

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

      getServer(serverId:number){
        const server=this.servers.find(({id})=>id===serverId)
        return server;
      }

      updateServer(serverId:number, serverInfo: {name: string, status: string}){
         const server = this.servers.find(({id})=>id===serverId)
         if(server){
          server.name=serverInfo.name,
          server.status=serverInfo.status
         }
      }
}