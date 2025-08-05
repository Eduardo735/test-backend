import { Injectable, UnauthorizedException } from '@nestjs/common';
import { instanceToPlain } from 'class-transformer';
import { RoleRepository } from 'src/modules/user/repositories/role.repository';
import { UserRepository } from 'src/modules/user/repositories/user.repository';

@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserRepository,
    private roleRepository: RoleRepository,
  ) { }

  async validateUser(username: string, password: string) {
    const user = await this.userRepository.findByUsername(username);
    if (!user) {
      throw new UnauthorizedException('Usuario no encontrado');
    }

    // const isPasswordValid = await bcrypt.compare(
    //   password,
    //   // user.encrypted_password,
    // );

    // if (!isPasswordValid) {
    //   throw new UnauthorizedException('Credenciales incorrectas');
    // }
    return instanceToPlain(user);
  }

  async register(id_web_app: string) {
    const userCreated = await this.userRepository.createUser(
      id_web_app,
    );

    // if (!roleId)
    //   throw new UnauthorizedException('No se encontró el rol');

    // const role = await this.roleRepository.findById(roleId).catch((err) => {
    //   throw new UnauthorizedException('Credenciales incorrectas', err);
    //   // return err;
    // });
    // if (role) {
    //   const userRole = await this.roleRepository.createUserRole(
    //     role,
    //     userCreated,
    //   );

    //   userCreated.roles = [userRole];
    // }

    return instanceToPlain(userCreated);
  }

  // generateToken(user: Partial<User>): string {
  //   return this.jwtService.sign({ sub: user.id, user: user });
  // }
}
