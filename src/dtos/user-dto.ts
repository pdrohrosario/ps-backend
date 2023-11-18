export class UserCreationDTO {
  email: string;
  name: string;
  profile: string;
  children?: string;
  feedback_frequence?: number;
  password: string;
}

export class UserUpdateDTO {
  id: number;
  email: string;
  name: string;
  profile: string;
  children?: string;
  feedback_frequence?: number;
  password: string;
}
