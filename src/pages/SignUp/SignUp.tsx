import { InputForm } from '../../components';
import { useSignUp } from './signUp.hook';
import { signUpSchema } from './signUp.schema';

export const SignUp = () => {
  const {
    register,
    validatePassword,
    validateEmail,
    errors,
    handleSubmit,
    onSubmit,
    isValid,
  } = useSignUp();

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <InputForm
          label={'Nome'}
          type="text"
          id="firstName"
          {...register('firstName', { ...signUpSchema.firstName })}
          error={errors.firstName?.message}
        />
        <InputForm
          label={'Cognome'}
          type="text"
          id="lastName"
          {...register('lastName', signUpSchema.lastName)}
          error={errors.lastName?.message}
        />
        <InputForm
          label={'Email'}
          type="email"
          id="email"
          {...register('email', {
            validate: validateEmail,
            ...signUpSchema.email,
          })}
          error={errors.email?.message}
        />
        <InputForm
          label={'Password'}
          type="password"
          id="password"
          {...register('password', signUpSchema.password)}
          error={errors.password?.message}
        />
        <InputForm
          label={'Ripeti la password'}
          type="password"
          id="repeatedPassword"
          {...register('repeatedPassword', {
            validate: validatePassword,
          })}
          error={errors.repeatedPassword?.message}
        />
        <button disabled={!isValid}>REGISTRATI</button>
      </form>
    </div>
  );
};
