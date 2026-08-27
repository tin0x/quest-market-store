import React from 'react';

export type KeywordsInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type AccordionFilterProps = {
  title: string;
  filterType: string;
  group: string;
  filterFields: {
    name: string;
    value: string | number;
  }[];
  selectedValues: string[];
  onChange: (param: string, value: string | number, typeFilter: string) => void;
};

type FiltersTemplateElement = {
  title: string;
  param: string;
  type: string;
  fields: {
    name: string;
    value: string | number;
  }[];
};

export type FiltersTemplateType = FiltersTemplateElement[];
