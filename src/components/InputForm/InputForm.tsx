import { ForwardedRef, forwardRef } from 'react';
import { InputFormProps } from '../../models';

export const InputForm = forwardRef(
  (
    { label, error, ...props }: InputFormProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
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
