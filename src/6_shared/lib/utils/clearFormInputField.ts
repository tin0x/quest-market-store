import type { FieldValues, Path, PathValue, UseFormSetValue } from 'react-hook-form';
import React from 'react';

export const clearFormInputField = <T extends FieldValues>(
  e: React.KeyboardEvent<HTMLInputElement>,
  inputName: Path<T>,
  setValue: UseFormSetValue<T>,
) => {
  if (e.key === 'Escape') {
    setValue(inputName, '' as PathValue<T, Path<T>>, {
      shouldValidate: true,
    });
  }
};
