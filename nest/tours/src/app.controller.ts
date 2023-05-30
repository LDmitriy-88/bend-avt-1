import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  postData(): string {
    return this.appService.postData();
  }

  @Put()
  putData(): string {
    return this.appService.putData();
  }

  @Delete()
  deleteData(): string {
    return this.appService.deleteData();
  }


}
