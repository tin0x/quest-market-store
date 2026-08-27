import { useSearchParams } from 'react-router-dom';

const useManageParams = (handleClearInput: () => void) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedValues = Array.from(searchParams.values());

  const handleChangeFilter = (param: string, value: string | number, typeFilter: string) => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);

      if (typeFilter === 'checkbox') {
        const currentValues = params.getAll(param);

        if (currentValues.includes(value.toString())) {
          params.delete(param);
          currentValues
            .filter((currentValue) => currentValue !== value.toString())
            .forEach((currentValue) => params.append(param, currentValue));
        } else {
          params.append(param, value.toString());
        }
      } else {
        params.set(param, value.toString());
      }

      return params;
    });
  };

  const handleResetFilter = () => {
    setSearchParams(() => {
      const params = new URLSearchParams();
      params.set('sort', 'rating desc');
      handleClearInput();
      return params;
    });
  };

  return { selectedValues, handleChangeFilter, handleResetFilter };
};

export default useManageParams;
