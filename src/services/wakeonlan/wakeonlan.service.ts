import { Injectable } from '@nestjs/common';
import {WakeonLanModel} from './../../models/LocalWol/wol.model';

var wol =  require('wake_on_lan');

@Injectable()
export class WakeonlanService {
    
   
    private wakeonLanModel: WakeonLanModel = WakeonLanModel.getInstance();
    private maquinasComercioPB = this.wakeonLanModel.getMaquinasComercioPB();
    private maquinasComercioPA = this.wakeonLanModel.getMaquinasComercioPA();
    private maquinasNormal = this.wakeonLanModel.getMaquinasNormal();
    
    getWake(pc: string,escuela:string): string {
        let escuelaArray = []
        switch(escuela){
            case 'comerciopb':
                escuelaArray = this.maquinasComercioPB;
                break;
            case 'comerciopa':
                escuelaArray = this.maquinasComercioPA;
                break;
            case 'normal':
                escuelaArray = this.maquinasNormal;
                break;
        }
        let maquina =  escuelaArray.find(maquina => maquina.nombre === pc.toLowerCase());
    console.log(maquina);
    if(maquina){
      this.wake(maquina.mac);
      return 'Waking up ' + maquina.nombre;
    }
    return "no existe";
    }
    

    

    wake(mac: string): string {
        wol.wake(mac, function(error:any) {
          if (error) {
            console.log(error);
            
          } 
        });
    
        return 'Waking up ' + mac;
      }
    wakeAll(escuela:string): string {
        let escuelaArray = []
        switch(escuela){
            case 'comerciopb':
                escuelaArray = this.maquinasComercioPB;
                break;
            case 'comerciopa':
                escuelaArray = this.maquinasComercioPA;
                break;
            case 'normal':
                escuelaArray = this.maquinasNormal;
                break;
        }
        escuelaArray.forEach(maquina => {
            this.wake(maquina.mac);
        });
        return 'Waking up all';
    }
}
