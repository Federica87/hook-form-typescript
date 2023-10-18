import { Properties } from '.';

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
