import * as dotenv from 'dotenv';
import * as env from 'env-var';

dotenv.config();

type PostgresConfigType = {
  port: number;
  host: string;
  user: string;
  password: string;
  database: string;
};

export const PostgresConfig: PostgresConfigType = {
  port: env.get('POSTGRES_PORT').required().asPortNumber(),
  host: env.get("POSTGRES_HOST").required().asString(),
  database: env.get("POSTGRES_DB_NAME").required().asString(),
  password: env.get("POSTGRES_PASSWORD").required().asString(),
  user: env.get("POSTGRES_USER").required().asString(),
};
