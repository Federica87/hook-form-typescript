import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { FormValues } from '../SignUp/signUp.hook';

export type SignInFormValues = {
  email: string;
  password: string;
};

export const useSignIn = () => {
  const form = useForm<SignInFormValues>();
  const { register, handleSubmit, reset } = form;

  const [validateUser, setValidateUser] = useState<FormValues | undefined>();
  const [error, setError] = useState<string>('');

  function deleteAccount() {
    const local = JSON.parse(localStorage.getItem('users')!);
    const index = local.findIndex(
      (user: FormValues) =>
        user.email.toLowerCase() === validateUser?.email.toLowerCase()
    );
    local.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(local));
    setValidateUser(undefined);
    setError('');
    reset();
  }

  function onSubmit(data: SignInFormValues) {
    const local = JSON.parse(localStorage.getItem('users')!);
    const user = local.find((user: FormValues) => {
      return (
        user.email.toLowerCase() === data.email.toLowerCase() &&
        user.password === data.password
      );
    });
    user ? setValidateUser(user) : setError('Email e/o password errati');
  }

  return {
    register,
    handleSubmit,
    onSubmit,
    validateUser,
    error,
    setValidateUser,
    reset,
    deleteAccount,
  };
};
