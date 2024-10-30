import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const Auth0ProviderWithNavigate = ({ children }: any) => {
  const navigate = useNavigate();

  const redirectUri = window.location.origin;

  const onRedirectCallback = (appState: any) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain="xxxxxxx"
      clientId="xxxxxxxx"
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};
export default Auth0ProviderWithNavigate;
