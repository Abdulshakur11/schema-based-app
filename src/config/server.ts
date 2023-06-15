import * as dotenv from 'dotenv';
import * as env from 'env-var';

dotenv.config();

type ServerConfigType = {
  env: string;
  port: number;
}

export const ServerConfig: ServerConfigType = {
  env: env.get('ENVIRONMENT').required().asString(),
  port: env.get('SERVER_PORT').required().asPortNumber()
}