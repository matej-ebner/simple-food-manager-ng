import { UserDTO } from "./user-dto.interface";

export interface LoginDTO {
  jwt: string;
  user: UserDTO;
}
