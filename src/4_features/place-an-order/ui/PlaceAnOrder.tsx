import React from 'react';
import Image from '@shared/ui/image/Image.tsx';
import visaImage from '@shared/assets/images/visa-logo.webp';
import { cn } from '@shared/lib/utils/cn.ts';
import mastercardImage from '@shared/assets/images/mastercard-logo.webp';
import Card from '@shared/ui/card/Card.tsx';
import type { PlaceAnOrderProps } from '@features/place-an-order/types.ts';
import { Controller, useForm, useWatch } from 'react-hook-form';
import { IMask, IMaskInput } from 'react-imask';
import Input from '@shared/ui/input/Input.tsx';
import { clearFormInputField } from '@shared/lib/utils/clearFormInputField.ts';
import getCardBrand from '@features/place-an-order/lib/getCardBrand.ts';
import { zodResolver } from '@hookform/resolvers/zod';
import { type PlaceAnOrderForm, PlaceAnOrderSchema } from '@features/place-an-order/schemas/PlaceAnOrderSchema.ts';
import usePlaceOnOrder from '@features/place-an-order/model/usePlaceOnOrder.ts';
import { OrderFromCart } from '@entities/cart';

const styleInput =
  'text-text-primary bg-input-secondary h-full w-full rounded-sm border border-none px-5 py-4 text-[18px] outline-white placeholder:font-bold hover:cursor-pointer focus:outline-2';

const PlaceAnOrder: React.FC<PlaceAnOrderProps> = ({ className, games, renderAction }) => {
  const {
    register,
    setValue,
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<PlaceAnOrderForm>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    resolver: zodResolver(PlaceAnOrderSchema),
  });

  const { isLoading, onSubmit } = usePlaceOnOrder();

  const cardNumberValue = useWatch({
    control,
    name: 'cardNumber',
    defaultValue: '',
  });
  const activeBrand = getCardBrand(cardNumberValue);

  return (
    <form className="flex flex-1 gap-12" onSubmit={handleSubmit(onSubmit)}>
      <Card className={cn('flex-1 p-5', className)} variant="surface">
        <div className="flex flex-col gap-5">
          <h3 className="text-[22px] font-bold">Payment Method</h3>
          <div className="flex gap-10">
            <div
              className={cn('w-35 overflow-hidden rounded-sm opacity-50', { 'opacity-100': activeBrand === 'visa' })}
            >
              <Image source={visaImage} alt="visa-card" type="article" />
            </div>
            <div
              className={cn('w-35 overflow-hidden rounded-sm opacity-50', {
                'opacity-100': activeBrand === 'mastercard',
              })}
            >
              <Image source={mastercardImage} alt="mastercard-card" type="article" />
            </div>
          </div>
        </div>
        <fieldset className="mt-10 flex flex-col gap-6">
          <div className="flex min-h-22.75 flex-col gap-2">
            <Input
              className={cn(styleInput, { 'border-red-600 outline-red-600': errors.cardHolderName })}
              placeholder="Card Holder Name"
              {...register('cardHolderName')}
              onKeyDown={(e) => clearFormInputField(e, 'cardHolderName', setValue)}
              autoComplete="name"
              autoFocus
            />
            <small
              className={cn('text-base text-red-600 opacity-0 transition-all', {
                'opacity-100': errors.cardHolderName,
              })}
            >
              {errors.cardHolderName?.message}
            </small>
          </div>
          <div className="flex min-h-22.75 flex-col gap-2">
            <Controller
              name="cardNumber"
              control={control}
              render={({ field }) => (
                <IMaskInput
                  mask="0000-0000-0000-0000"
                  value={field.value}
                  placeholder="Card Number"
                  onAccept={(value) => field.onChange(value)}
                  className={cn(styleInput, { 'border-red-600 outline-red-600': errors.cardNumber })}
                />
              )}
            />
            <small
              className={cn('text-base text-red-600 opacity-0 transition-all', {
                'opacity-100': errors.cardNumber,
              })}
            >
              {errors.cardNumber?.message}
            </small>
          </div>
          <div className="flex min-h-22.75 gap-7">
            <div className="flex flex-1 flex-col gap-2">
              <Controller
                name="expiryDate"
                control={control}
                render={({ field }) => (
                  <IMaskInput
                    mask="MM/YY"
                    blocks={{
                      MM: { mask: IMask.MaskedRange, from: 1, to: 12 },
                      YY: { mask: IMask.MaskedRange, from: 26, to: 50 },
                    }}
                    value={field.value}
                    onAccept={(value) => field.onChange(value)}
                    placeholder="Expiry Date"
                    className={cn(styleInput, 'h-auto w-full', { 'border-red-600 outline-red-600': errors.expiryDate })}
                  />
                )}
              />
              <small
                className={cn('text-base text-red-600 opacity-0 transition-all', { 'opacity-100': errors.expiryDate })}
              >
                {errors.expiryDate?.message}
              </small>
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <Controller
                name="cvv"
                control={control}
                render={({ field }) => (
                  <IMaskInput
                    mask="0-0-0"
                    value={field.value}
                    onAccept={(value) => field.onChange(value)}
                    placeholder="CVV"
                    className={cn(styleInput, 'h-auto w-full', { 'border-red-600 outline-red-600': errors.cvv })}
                  />
                )}
              />
              <small className={cn('text-base text-red-600 opacity-0 transition-all', { 'opacity-100': errors.cvv })}>
                {errors.cvv?.message}
              </small>
            </div>
          </div>
        </fieldset>
      </Card>
      <OrderFromCart className="flex-1 self-start" cartList={games} actionSlot={renderAction(isValid, isLoading)} />
    </form>
  );
};

export default PlaceAnOrder;
