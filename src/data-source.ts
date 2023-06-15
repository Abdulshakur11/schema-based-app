import { join } from 'path';
import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1212',
  database: 'tenants_app',
  synchronize: true,
  logging: false,
  entities: [join(__dirname, './modules/**/*.entities{.ts, .js}')],
  migrations: [join(__dirname, './migration/*{.ts,.js}')],
  subscribers: [],
});