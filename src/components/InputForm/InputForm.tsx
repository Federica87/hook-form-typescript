import { forwardRef, Ref } from 'react';

export type InputFormProps = {
  label: string;
  type: string;
  id: string;
  error?: string | undefined;
};

export const InputForm = forwardRef(
  ({ label, error, ...props }: InputFormProps, ref: Ref<HTMLInputElement>) => {
    return (
      <div>
        <label>{label}</label>
        <input {...props} ref={ref} />
        {error && (
          <p style={{ color: 'red', fontWeight: 'bold', textAlign: 'left' }}>
            {error}
          </p>
        )}
      </div>
    );
  }
);
