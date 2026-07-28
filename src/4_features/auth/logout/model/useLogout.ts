import { useLogoutMutation } from '@features/auth/logout/api/authApi.ts';

const useLogout = () => {
  const [logout] = useLogoutMutation();

  const onLogout = async () => {
    try {
      await logout().unwrap();
    } catch (error) {
      console.error(error);
    }
  };

  return { onLogout };
};

export default useLogout;
