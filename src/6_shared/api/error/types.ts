type AppErrorCode =
  | 'INVALID_CREDENTIALS'
  | 'SESSION_EXPIRED'
  | 'UNAUTHORIZED'
  | 'USER_ALREADY_EXISTS'
  | 'INVALID_DATA'
  | 'NETWORK_ERROR'
  | 'UNKNOWN_ERROR'
  | 'OVER_EMAIL_SENT_RATE_LIMIT'
  | 'EMAIL_ADDRESS_INVALID';

export type ApiError = {
  status: number | string;
  data: {
    code: AppErrorCode;
    message: string;
  };
};
