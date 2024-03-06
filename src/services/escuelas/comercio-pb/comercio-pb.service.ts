import { Injectable } from '@nestjs/common';
import {WakeonLanModel} from '../../../models/LocalDB/wol.model'
import {Pc} from './../../../models/interfaces/pc';



@Injectable()
export class ComercioPbService {
    
    private comercioPB:Pc[];
    constructor(){
        this.comercioPB= WakeonLanModel.getInstance().getMaquinasComercioPB();
    }
    size():number{
        return this.comercioPB.length;
    }
    getPCs():Pc[]{
        return this.comercioPB;
    }
    getPc(pc : string):Pc{
        return this.comercioPB.find(p => p.nombre === pc.toLowerCase());
    }
}
