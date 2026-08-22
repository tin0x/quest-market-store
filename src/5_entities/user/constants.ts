export const userLinks = [
  {
    name: 'Profile',
    path: '/profile/my-account',
  },
  {
    name: 'Wishlist',
    path: '/profile/wishlist',
  },
];

export const userErrorMessages = {
  OVER_EMAIL_SENT_RATE_LIMIT: 'You will be able to change your email again in 1 minute!',
  EMAIL_ADDRESS_INVALID: 'You must enter a valid email address',
  USER_ALREADY_EXISTS: 'User already exists',
  SESSION_EXPIRED: 'Your session has expired. Please login again',
  UNAUTHORIZED: 'You need to login to continue',
  INVALID_CREDENTIALS: 'Invalid email or password',
};

export const userSuccessMessages = {
  DATA_UPDATED: 'Your personal data has been successfully updated.',
};
