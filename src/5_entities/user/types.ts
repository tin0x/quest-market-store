import React from 'react';

export type UserDropdownProps = {
  name: string;
  email: string;
  isOpen: boolean;
  actions: React.ReactNode;
};

export type UserProfileProps = {
  email: string;
  name: string;
  actions: React.ReactNode;
};

export type User = {
  id: string;
  fullName: string;
  email: string;
  createdAt: string;
};

export type ParseSuccess<T> = {
  data: T;
};

export type ParseError = {
  error: {
    status: string;
    data: unknown;
  };
};
