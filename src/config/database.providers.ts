import { SequelizeModuleOptions } from '@nestjs/sequelize';
import type { Dialect } from 'sequelize/types';
import * as dotenv from 'dotenv';

dotenv.config();

export const databaseConfig: SequelizeModuleOptions = {
  dialect: process.env.DIALECT as Dialect,
  host: process.env.HOST,
  port: Number(process.env.PORT),
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  autoLoadModels: true,
  synchronize: true,
};
