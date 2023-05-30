import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hi!';
  }


  postData(): string {
    return 'postData';
  }

  putData(): string {
    return 'putData';
  }

  deleteData(): string {
    return 'deleteData';
  }

}
