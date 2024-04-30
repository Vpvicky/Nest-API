import { UserType } from '../user-type';

export class CreateUserDto {
  userName: string;
  password: string;
  email: string;
  phoneNumber: number;

  constructor(userType: UserType) {
    this.userName = userType.userName;
    this.password = userType.password;
    this.email = userType.email;
    this.phoneNumber = userType.phoneNumber;
  }
}
