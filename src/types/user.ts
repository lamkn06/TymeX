export interface User {
  username: string;
  id: number;

  image: string;
  email: string;
}

export interface UserDetail extends User {
  birthDate: string;
  age: string;
  gender: string;
}
