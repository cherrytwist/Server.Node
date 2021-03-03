import { UserService } from '@domain/user/user.service';
import { Injectable } from '@nestjs/common';
import { AuthenticationException } from '@utils/error-handling/exceptions';
import jwt_decode from 'jwt-decode';
import { IUser } from '@domain/user/user.interface';
import { AuthenticatedUserDTO } from './authenticated.user.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async getUserFromToken(encodedToken: any): Promise<[IUser, string]> {
    const token = (await jwt_decode(encodedToken)) as any;

    if (!token.email) throw new AuthenticationException('Token email missing!');
    const knownUser = await this.userService.getUserWithGroups(token.email);

    if (!knownUser) {
      throw new AuthenticationException(
        `User profile for ${token.email} account not found!`
      );
    }

    return [knownUser, token];
  }

  async getUserFromJwtPayload(jwtPayload: any): Promise<IUser> {
    const knownUser = await this.userService.getUserWithGroups(
      jwtPayload.email
    );

    return knownUser as IUser;
  }

  async populateAuthenticatedUser(
    email: string
  ): Promise<AuthenticatedUserDTO> {
    const knownUser = await this.userService.getUserWithGroups(email);
    return new AuthenticatedUserDTO(email, knownUser);
  }
}
