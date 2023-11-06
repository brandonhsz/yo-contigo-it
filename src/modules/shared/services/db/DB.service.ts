import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DBService extends PrismaClient implements OnModuleInit {
  constructor(private readonly logger: Logger) {
    super();
  }

  async onModuleInit() {
    try {
      const connection$ = await this.$connect().then(() => 'success');
      this.logger.log(`Connected to the database ${connection$}`);
    } catch (e) {
      this.logger.error('Error connecting to the database');
    }
  }
}
