import React from 'react';
import Input from '@shared/ui/input/Input.tsx';
import { cn } from '@shared/lib/utils/cn.ts';
import Button from '@shared/ui/button/Button.tsx';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { type LoginForm, LoginSchema } from '@features/login/schemas/LoginSchemas.ts';
import { clearFormInputField } from '@shared/lib/utils/clearFormInputField.ts';
import { useLogin } from '@features/login/model/useLogin.ts';

const Login: React.FC = () => {
  const {
    register,
    setValue,
    setError,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<LoginForm>({ mode: 'onSubmit', reValidateMode: 'onChange', resolver: zodResolver(LoginSchema) });

  const { isLoading, onSubmit } = useLogin(setError);

  return (
    <form className="flex w-full flex-col justify-center" onSubmit={handleSubmit(onSubmit)}>
      {errors?.root?.server?.message && (
        <p className="mb-5 text-center text-xl font-bold text-red-600">{errors?.root?.server?.message}</p>
      )}
      <fieldset className="flex flex-col gap-6 text-[18px]">
        <div className="flex flex-col gap-2">
          <Input
            className={cn({ 'text-red-300 outline-2 outline-red-600': errors.email })}
            autoFocus
            variant="secondary"
            placeholder="Email Address"
            onKeyDown={(e) => clearFormInputField<LoginForm>(e, 'email', setValue)}
            autoComplete="email"
            {...register('email')}
          />
          {errors.email && <small className="text-red-600">{errors.email.message}</small>}
        </div>
        <div className="flex flex-col gap-2">
          <Input
            className={cn({ 'text-red-300 outline-2 outline-red-600': errors.password })}
            variant="secondary"
            isPassword
            placeholder="Password"
            onKeyDown={(e) => clearFormInputField<LoginForm>(e, 'password', setValue)}
            autoComplete="current-password"
            {...register('password')}
          />
          {errors.password && <small className="text-red-600">{errors.password.message}</small>}
        </div>
        <Button className="rounded-sm" variant="dark" type="submit" text="Login" disabled={!isValid || isLoading} />
        <div className="flex gap-2 text-[18px]">
          <span>Don’t have an account?</span>
          <Link className="font-bold underline" to="/register">
            Sign Up
          </Link>
        </div>
      </fieldset>
    </form>
  );
};

export default Login;
