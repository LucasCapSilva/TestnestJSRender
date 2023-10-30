import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres', // Nome do host do banco de dados dentro do contêiner
      port: 5432, // Porta padrão do PostgreSQL
      username: 'seu_usuario',
      password: 'sua_senha',
      database: 'seu_banco_de_dados',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
