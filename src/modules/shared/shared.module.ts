/*
https://docs.nestjs.com/modules
*/

import { Logger, Module } from '@nestjs/common';
import { DBService } from './services/db/DB.service';

@Module({
  providers: [DBService, Logger],
  exports: [DBService, Logger],
})
export class SharedModule {}
