import { Controller, Get, Param } from '@nestjs/common';
import { ComercioPbService } from 'src/services/escuelas/comercio-pb/comercio-pb.service';


@Controller('comercio-pb')
export class ComercioPbController {
    constructor(private comercioPbService:ComercioPbService) {}
    @Get('/')
    getPCs(): string {
        return JSON.stringify(this.comercioPbService.getPCs());
    }   
    @Get('/size')
    size():number{
       return this.comercioPbService.size();
        }
    @Get(':pc')
    getPc(@Param('pc') pc:string): string {
        return JSON.stringify(this.comercioPbService.getPc(pc));
    }

}
