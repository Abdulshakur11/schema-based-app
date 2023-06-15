import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { join } from 'path'

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '1212',
  database: 'tenants_app',
  synchronize: true,
  logging: false,
  entities: [join(__dirname, '../modules/**/*.entities{.ts, .js}')],
  migrations: [join(__dirname, '../migration/*{.ts,.js}')],
}