import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      ),
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Register />,
    },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={appRouter} />
    </AuthProvider>
  );
}

export default App;
