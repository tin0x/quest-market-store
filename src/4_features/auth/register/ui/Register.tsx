import React from 'react';
import Input from '@shared/ui/input/Input.tsx';
import Checkbox from '@shared/ui/checkbox/Checkbox.tsx';
import Button from '@shared/ui/button/Button.tsx';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { type RegisterForm, RegisterSchema } from '@features/auth/register/schemas/RegisterSchema.ts';
import { zodResolver } from '@hookform/resolvers/zod';
import { cn } from '@shared/lib/utils/cn.ts';
import { useRegister } from '@features/auth/register/model/useRegister.ts';

const Register: React.FC = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    setError,
    setValue,
  } = useForm<RegisterForm>({ mode: 'onSubmit', reValidateMode: 'onChange', resolver: zodResolver(RegisterSchema) });

  const { isLoading, onSubmit } = useRegister(setError);

  const handleClearValue = (e: React.KeyboardEvent<HTMLInputElement>, inputName: keyof RegisterForm) => {
    if (e.key === 'Escape') {
      setValue(inputName, '', {
        shouldValidate: true,
      });
    }
  };

  return (
    <form className="flex w-full flex-col justify-center" onSubmit={handleSubmit(onSubmit)}>
      {errors?.root?.server?.message && (
        <p className="mb-5 text-center text-xl font-bold text-red-600">{errors?.root?.server?.message}</p>
      )}
      <fieldset className="flex flex-col gap-6 text-[18px]">
        <div className="flex flex-col gap-2">
          <Input
            className={cn({ 'text-red-300 outline-2 outline-red-600': errors.fullName })}
            autoFocus
            variant="secondary"
            placeholder="Full Name"
            onKeyDown={(e) => handleClearValue(e, 'fullName')}
            autoComplete="name"
            {...register('fullName')}
          />
          {errors.fullName && <small className="text-red-600">{errors.fullName.message}</small>}
        </div>
        <div>
          <Input
            className={cn({ 'text-red-300 outline-2 outline-red-600': errors.email })}
            variant="secondary"
            placeholder="Email Address"
            onKeyDown={(e) => handleClearValue(e, 'email')}
            autoComplete="email"
            {...register('email')}
          />
          {errors.email && <small className="text-red-600">{errors.email.message}</small>}
        </div>
        <div>
          <Input
            className={cn({ 'pr-15 text-red-300 outline-2 outline-red-600': errors.password })}
            variant="secondary"
            placeholder="Password"
            isPassword
            onKeyDown={(e) => handleClearValue(e, 'password')}
            autoComplete="new-password"
            {...register('password')}
          />
          {errors.password && <small className="text-red-600">{errors.password.message}</small>}
        </div>
        <Checkbox text="I agree with the Terms and Privacy policy" {...register('terms')} />
        <Button className="rounded-sm" variant="dark" type="submit" text="Submit" disabled={!isValid || isLoading} />
        <div className="flex gap-2 text-[18px]">
          <span>Already have an account?</span>
          <Link className="font-bold underline" to="/login">
            Log in
          </Link>
        </div>
      </fieldset>
    </form>
  );
};

export default Register;
