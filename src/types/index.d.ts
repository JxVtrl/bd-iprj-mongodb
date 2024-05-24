export interface UserDocument extends Document {
  name: string;
  email: string;
  password: string;
}
