import { Module } from '@nestjs/common';
import { User } from 'src/scheme/user';
import { UserSchema } from 'src/scheme/user';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users.controller';
import { UsersService } from 'src/services/users/users.service';
import { AuthService } from 'src/services/authentification/auth/auth.service';
import { PassportModule } from '@nestjs/passport/dist';
import { jwtConstants } from 'src/static/private/constants';
import {JwtModule} from '@nestjs/jwt';
import {JwtStrategyService} from "../../services/authentification/jwt-straegy/jwt-strategy.service"

@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
PassportModule,
    JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: {expiresIn: '60s'},
    }),
],
    controllers: [UsersController],
    providers: [UsersService, AuthService, JwtStrategyService],

})
export class UsersModule {}
