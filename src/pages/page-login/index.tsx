import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
const PageLogin = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/home",
      },
    });
  };

  useEffect(() => {
    if (!isAuthenticated) {
      handleLogin();
    }
  }, [isAuthenticated]);

  return <></>;
};
export default PageLogin;
