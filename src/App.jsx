import React from 'react';
import "./App.scss";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Spinner from "./components/Spinner/Spinner";
import { Provider as AuthContext } from "./store/authContext";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Issue from "./pages/Issue/Issue";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      ),
      errorElement: <ErrorPage />,
      lazy: () =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve(import("./pages/Home/Home"));
          }, 500);
        }),
    },
    {
      path: "/issue/:id",
      element: (
        <ProtectedRoute>
          <Issue />
        </ProtectedRoute>
      ),
      errorElement: <ErrorPage />,
      lazy: () =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve(import("./pages/Home/Home"));
          }, 500);
        }),
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <ErrorPage />,
    },
  ]);
  return (
    <AuthContext>
      <RouterProvider router={router} fallbackElement={<Spinner />} />
    </AuthContext>
  );
}

export default App;
