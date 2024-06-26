import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrismaModule } from 'nestjs-prisma';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { FirebaseAdminModule } from '@tfarras/nestjs-firebase-admin';
import * as admin from 'firebase-admin';
import { UsuarioModule } from './usuario/usuario.module';
import { ProfissionalModule } from './profissional/profissional.module';
import { EnderecoModule } from './endereco/endereco.module';
import { TimeModule } from './time/time.module';
import { ClienteModule } from './cliente/cliente.module';
import { RacaModule } from './raca/raca.module';
import { GeneroModule } from './genero/genero.module';
import { EspecialidadeModule } from './especialidade/especialidade.module';
import { ProjetoModule } from './projeto/projeto.module';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const credentials = require('../firebase.credentials.json');

console.log(process.env);

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true }),
		//WinstonModule.forRoot(winstonConfig),
		PrismaModule.forRoot({
			isGlobal: true,
			prismaServiceOptions: {
				// explicitConnect: true,
				prismaOptions: {
					log: ['query', 'info', 'warn', 'error'],
				},
			},
		}),
		FirebaseAdminModule.forRootAsync({
			useFactory: () => ({
				credential: admin.credential.cert({
					projectId: credentials.project_id,
					clientEmail: credentials.client_email,
					privateKey: credentials.private_key,
				}),
			}),
			inject: [ConfigService],
		}),
		AuthModule,
		UsuarioModule,
		ProfissionalModule,
		EnderecoModule,
		TimeModule,
		ClienteModule,
		RacaModule,
		GeneroModule,
		EspecialidadeModule,
		ProjetoModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
