import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Produto } from './produto.model';
import { ProdutosController } from './produtos.controller';
import { ProdutosService } from './produtos.service';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admlinux',
      database: 'livraria',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Produto])
  ],
  controllers: [AppController,ProdutosController],
  providers: [AppService,ProdutosService],
})
export class AppModule {}
