import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { FormValues, SignInFormValues } from '../../models';

export const useSignIn = () => {
  const form = useForm<SignInFormValues>({ mode: 'onTouched' });
  const { register, handleSubmit, reset, formState } = form;
  const { errors } = formState;

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

  function handleChange() {
    setError('');
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
    errors,
    handleChange,
  };
};
