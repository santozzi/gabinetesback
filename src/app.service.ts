import { Injectable } from '@nestjs/common';
var wol =  require('wake_on_lan');
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  wake(mac: string): string {
    wol.wake(mac, function(error:any) {
      if (error) {
        console.log(error);
        
      } 
    });

    return 'Waking up ' + mac;
  }
}
