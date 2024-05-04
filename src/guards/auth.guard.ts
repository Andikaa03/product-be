import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';


@Injectable()
export class AuthGuard implements CanActivate {
 canActivate(context: ExecutionContext): boolean {
 const request = context.switchToHttp().getRequest();
 try {
  const token = request.headers?.authorization.split(' ')[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  request.user = decoded;

  return true; // Token valid
} catch (error) {
   throw new UnauthorizedException()
}
 }
}