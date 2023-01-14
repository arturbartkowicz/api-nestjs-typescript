import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PassportModule } from "@nestjs/passport";
import { UsersModule } from "src/users/users.module";
import { AuthenticationController } from "./authentication.controller";
import { AuthenticationService } from "./authentication.service";
import { LocalStrategy } from "./local.strategy";

@Module({
  imports: [
    UsersModule, 
    PassportModule,
    ConfigModule,
  ],
  providers: [AuthenticationService, LocalStrategy],
  controllers: [AuthenticationController]
})
export class AuthenticationModule {}