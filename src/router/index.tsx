import { Route, Routes as DOMRoutes, Navigate } from "react-router-dom";
import PageHome from "../pages/page-home";
import PageLogin from "../pages/page-login";
import PrivateRoute from "../components/private-router";

function Router() {
  const privateRoutes = [
    {
      path: "/home",
      element: <PageHome />,
    },
  ];

  return (
    <DOMRoutes>
      <Route path="/login" element={<PageLogin />} />
      {privateRoutes.map(({ path, element }, index) => (
        <Route
          key={path + index}
          path={`${path}`}
          element={<PrivateRoute>{element}</PrivateRoute>}
        />
      ))}
    </DOMRoutes>
  );
}

export default Router;
