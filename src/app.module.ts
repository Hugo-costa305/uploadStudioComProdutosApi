import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosController } from 'produtos.controller';
import { ProdutosService } from './Produtos.Service';

@Module({
  imports: [],
  controllers: [AppController, ProdutosController],
  providers: [AppService, ProdutosService],
})
export class AppModule {}
