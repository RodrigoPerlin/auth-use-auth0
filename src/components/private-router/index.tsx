import { useAuth0 } from "@auth0/auth0-react";

interface IPrivateRoute {
  children: React.ReactNode;
}

function PrivateRoute({ children }: IPrivateRoute) {
  const { user }: any = useAuth0();
  if (!user) {
    window.location.href = "/login";
  }
  return <div>{user.email && <div>{children}</div>}</div>;
}

export default PrivateRoute;
