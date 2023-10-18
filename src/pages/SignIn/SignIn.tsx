import { InputForm } from '../../components';
import { useSignIn } from './signIn.hook';
import { signInSchema } from './signIn.schema';

export const SignIn = () => {
  const {
    register,
    handleSubmit,
    onSubmit,
    validateUser,
    handleChange,
    error,
    setValidateUser,
    reset,
    deleteAccount,
    errors,
  } = useSignIn();

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      {validateUser ? (
        <>
          <h2 style={{ marginRight: 0 }}>
            Ciao {validateUser.lastName} {validateUser.firstName}!
          </h2>
          <button
            onClick={() => {
              setValidateUser(undefined);
              reset();
            }}
          >
            LOGOUT
          </button>
          <br />
          <button onClick={deleteAccount}>ELIMINA ACCOUNT</button>
        </>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <InputForm
            label={'Email'}
            type="email"
            id="email"
            {...register('email', signInSchema.email)}
            error={errors.email?.message}
          />
          <InputForm
            label={'Password'}
            type="password"
            id="password"
            {...register('password', { onChange: handleChange })}
            error={error}
          />
          <button>ACCEDI</button>
        </form>
      )}
    </div>
  );
};
