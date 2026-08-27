export type RadioButtonProps = {
  name: string;
  group: string;
  value: string | number;
  filterType: string;
  currentParam: string;
  onChange: (param: string, value: string | number, typeFilter: string) => void;
};
