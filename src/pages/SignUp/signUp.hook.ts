import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { FormValues } from '../../models';

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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { repeatedPassword, ...rest } = data;
    setUsers([...users, rest]);
  }

  function validateEmail(value: string) {
    const usedEmail = users.find((user) => {
      return value === user.email;
    });
    return usedEmail && 'Questa email è già assocciata ad un account';
  }

  function validatePassword(value: string | undefined) {
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
