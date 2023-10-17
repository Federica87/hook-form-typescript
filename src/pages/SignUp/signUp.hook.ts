import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';

export type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  repeatedPassword: string;
};

export const useSignUp = () => {
  const form = useForm<FormValues>({ mode: 'onTouched' });
  const { register, watch, formState, handleSubmit, reset } = form;
  const { errors, isValid, isSubmitSuccessful } = formState;

  const [users, setUsers] = useState<FormValues[]>(() => {
    const local = localStorage.getItem('users');
    return local ? JSON.parse(local) : [];
  });

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    if (isValid) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  function onSubmit(data: FormValues) {
    setUsers([...users, data]);
  }

  function validateEmail(value: string) {
    const usedEmail = users.find((user) => {
      return value === user.email;
    });
    return usedEmail && 'Questa email è già assocciata ad un account';
  }

  function validatePassword(value: string) {
    return value === watch('password') || 'Le password non coincidono';
  }

  return {
    register,
    validatePassword,
    errors,
    handleSubmit,
    onSubmit,
    users,
    isValid,
    validateEmail,
  };
};
