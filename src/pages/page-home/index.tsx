import { useAuth0 } from "@auth0/auth0-react";

const PageHome = () => {
  const { logout, user } = useAuth0();

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: "http://localhost:5173/login",
      },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="shadow-lg p-8 max-w-md mx-auto bg-white rounded-lg text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Bem-vindo à Home!
        </h1>

        <div>
          <h3>Welcome, {user?.email}</h3>
        </div>

        <p className="text-gray-600 mb-6">
          Estamos felizes em tê-lo de volta. Aproveite sua navegação!
        </p>
        <button
          onClick={() => handleLogout()}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 shadow-md transition ease-in-out duration-300"
        >
          logout
        </button>
      </div>
    </div>
  );
};
export default PageHome;
