import { UserService } from "../../users/services/user.service.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class AuthService {
  constructor() {
    this.userService = new UserService();
  }

  login = async (item) => {
    const { email, password } = item;
    console.log({ email, password });
    const user = await this.userService.findByParams('email', email);
    console.log({ user });
    if (user) {
      if (bcrypt.compare(password, user.password)) {
        const token = jwt.sign({ id: user.id }, process.env.PRIVATE_KEY, {
          expiresIn: "1d",
        });
        return { token, user: { email: user.email } };
      }
      return null;
    }
    return null;
  };

  register = async (item) => {
    const user = await this.userService.Add(item);
    console.log({ user });
    if (user) {
      const token = jwt.sign({ id: user.id }, process.env.PRIVATE_KEY, {
        expiresIn: "1d",
      });
      return { token, user: { email: user.email } };
    }
    return null;
  };

  resetPassword = async (email, newPassword) => {
    let user = await this.userService.findByParams("email", email);
    if (user) {
      user.password = await bcrypt.hash(newPassword, user.salt);
      user = await this.userService.update(user.id, user);
      const token = jwt.sign({ id: user.id }, process.env.PRIVATE_KEY, {
        expiresIn: "1d",
      });
      return { token, user: { email: user.email } };
    }
    return null;
  };
}
