import { Properties } from '.';

export type SignInFormValues = {
  email: string;
  password: string;
};

export type SignInSchema = {
  email: {
    pattern: Properties<RegExp>;
  };
};
