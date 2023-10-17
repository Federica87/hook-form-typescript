export type Prioperties<Type> = {
  value: Type;
  message: string;
};

export type SignUpSchema = {
  firstName: {
    required: Prioperties<boolean>;
  };
  lastName: {
    required: Prioperties<boolean>;
  };
  email: {
    required: Prioperties<boolean>;
    pattern: Prioperties<RegExp>;
  };
  password: {
    required: Prioperties<boolean>;
    minLength: Prioperties<number>;
  };
};

export const signUpSchema: SignUpSchema = {
  firstName: {
    required: {
      value: true,
      message: 'Campo obbligatorio',
    },
  },
  lastName: {
    required: {
      value: true,
      message: 'Campo obbligatorio',
    },
  },
  email: {
    required: {
      value: true,
      message: 'Campo obbligatorio',
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Email non valida',
    },
  },
  password: {
    required: {
      value: true,
      message: 'Campo obbligatorio',
    },
    minLength: {
      value: 8,
      message: 'La password deve contenere almeno 8 caratteri',
    },
  },
};
