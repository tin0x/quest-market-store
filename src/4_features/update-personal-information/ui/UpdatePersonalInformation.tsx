import React from 'react';
import Input from '@shared/ui/input/Input.tsx';
import useUpdateProfileInfo from '@features/update-personal-information/model/useUpdateProfileInfo.ts';
import Button from '@shared/ui/button/Button.tsx';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SaveProfileInfoSchema } from '@features/update-personal-information/schemas/SaveProfileInfoSchema.ts';
import { cn } from '@shared/lib/utils/cn.ts';
import type { UpdatePersonalInformationProps } from '@features/update-personal-information/types.ts';

const UpdatePersonalInformation: React.FC<UpdatePersonalInformationProps> = ({ profileInfo }) => {
  const {
    register,
    formState: { isDirty, isValid, errors },
    handleSubmit,
    setError,
  } = useForm({
    mode: 'onChange',
    resolver: zodResolver(SaveProfileInfoSchema),
    defaultValues: {
      fullName: profileInfo?.fullName ?? '',
      email: profileInfo?.email ?? '',
    },
  });

  const { isLoadingButton, onSubmit } = useUpdateProfileInfo(setError);

  const isSubmitDisabled = !isDirty || !isValid || isLoadingButton;

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="flex h-full flex-col gap-8">
        <div className="flex min-h-33.75 flex-col gap-2">
          <label className="text-xl font-bold" htmlFor="fullName">
            Your Name
          </label>
          <Input
            className="text-[18px] placeholder:text-[18px]"
            variant="secondary"
            id="fullName"
            placeholder={profileInfo?.fullName}
            {...register('fullName')}
          />
          <small
            className={cn('text-base text-red-600 opacity-0 transition-all duration-200', {
              'opacity-100': errors.fullName,
            })}
          >
            {errors.fullName?.message}
          </small>
        </div>
        <div className="flex min-h-33.75 flex-col gap-2">
          <label className="text-xl font-bold" htmlFor="email">
            Email Address
          </label>
          <Input
            className="text-[18px] placeholder:text-[18px]"
            variant="secondary"
            id="email"
            placeholder={profileInfo?.email}
            {...register('email')}
          />
          <small
            className={cn('text-base text-red-600 opacity-0 transition-all duration-200', {
              'opacity-100': errors.email,
            })}
          >
            {errors.email?.message}
          </small>
        </div>
        <Button className="mt-auto" type="submit" text="Save" disabled={isSubmitDisabled} />
      </fieldset>
    </form>
  );
};

export default UpdatePersonalInformation;
