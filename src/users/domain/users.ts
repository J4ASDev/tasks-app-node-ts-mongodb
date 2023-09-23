export class User {
  public name: string;
  public age?: number | undefined;
  public email: string;
  public password: string;
  createdAt: Date;
  updatedAt: Date;

  constructor (
    name: string,
    email: string,
    password: string,
    age: number | undefined,
  ) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.password = password
    this.createdAt = new Date()
    this.updatedAt = new Date()
  }
}
