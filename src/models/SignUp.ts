import { Properties } from '.';

export type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  repeatedPassword?: string;
};

export type SignUpSchema = {
  firstName: {
    required: Properties<boolean>;
  };
  lastName: {
    required: Properties<boolean>;
  };
  email: {
    required: Properties<boolean>;
    pattern: Properties<RegExp>;
  };
  password: {
    required: Properties<boolean>;
    minLength: Properties<number>;
  };
};
