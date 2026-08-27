export type CheckboxButtonProps = {
  group: string;
  name: string;
  value: string | number;
  selectedValues: string[];
  filterType: string;
  onChange: (param: string, value: string | number, typeFilter: string) => void;
};
