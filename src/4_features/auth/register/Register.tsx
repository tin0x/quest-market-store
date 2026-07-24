import React from 'react';
import Input from '@shared/ui/input/Input.tsx';
import Checkbox from '@shared/ui/checkbox/Checkbox.tsx';
import Button from '@shared/ui/button/Button.tsx';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { type RegisterForm, RegisterSchema } from '@features/auth/register/RegisterSchema.ts';
import { zodResolver } from '@hookform/resolvers/zod';
import { cn } from '@shared/lib/utils/cn.ts';

const Register: React.FC = () => {
  const {
    register,
    formState: { errors, isValid },
    setValue,
  } = useForm<RegisterForm>({ mode: 'onSubmit', reValidateMode: 'onChange', resolver: zodResolver(RegisterSchema) });

  const handleClearValue = (e: React.KeyboardEvent<HTMLInputElement>, inputName: keyof RegisterForm) => {
    if (e.key === 'Escape') {
      setValue(inputName, '', {
        shouldValidate: true,
      });
    }
  };

  return (
    <form className="flex w-full flex-col justify-center">
      <fieldset className="flex flex-col gap-6 text-[18px]">
        <Input
          className={cn({ 'text-red-300 outline-2 outline-red-600': errors.fullName })}
          autoFocus
          variant="secondary"
          placeholder="Full Name"
          onKeyDown={(e) => handleClearValue(e, 'fullName')}
          autoComplete="name"
          {...register('fullName')}
        />
        <Input
          className={cn({ 'text-red-300 outline-2 outline-red-600': errors.email })}
          variant="secondary"
          placeholder="Email Address"
          onKeyDown={(e) => handleClearValue(e, 'email')}
          autoComplete="email"
          {...register('email')}
        />
        <Input
          className={cn({ 'pr-15 text-red-300 outline-2 outline-red-600': errors.password })}
          variant="secondary"
          placeholder="Password"
          isPassword
          onKeyDown={(e) => handleClearValue(e, 'password')}
          autoComplete="new-password"
          {...register('password')}
        />
        <Checkbox text="I agree with the Terms and Privacy policy" {...register('terms')} />
        <Button className="rounded-sm" variant="dark" type="submit" text="Submit" disabled={!isValid} />
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
