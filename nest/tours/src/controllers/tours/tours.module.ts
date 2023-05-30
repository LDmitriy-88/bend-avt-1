import { Module } from '@nestjs/common';
import { ToursController } from './tours.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/static/private/constants';
import { JwtStrategyService } from 'src/services/authentification/jwt-straegy/jwt-strategy.service';
import { ToursService } from 'src/services/tours/tours.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Tour, TourSchema } from 'src/scheme/tour';
import { TourItemController } from '../tour-item/tour-item.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Tour.name, schema: TourSchema }]),
PassportModule,
  JwtModule.register({
      secret: jwtConstants.secret
  }),
],
  controllers: [ToursController, TourItemController],
  providers: [ToursService, JwtStrategyService],

})
export class ToursModule {}