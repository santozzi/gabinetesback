import { Controller, Get, Param } from '@nestjs/common';
import { WakeonlanService } from 'src/services/wakeonlan/wakeonlan.service';


@Controller('wakeonlan')
export class WakeonlanController {
  constructor(private wakeOnLanService:WakeonlanService) {}
  
  @Get(':escuela/')
  getWakeAll(@Param('escuela') escuela:string ): string {
    return this.wakeOnLanService.wakeAll(escuela);
    
  }
  @Get(':escuela/:pc')
  getWake(@Param('escuela') escuela:string ,@Param('pc') pc:string): string {
    return this.wakeOnLanService.getWake(pc,escuela);
    
    
  }
}
