import { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "./redux/auth/operations";

import Layout from "./components/LayOut";
import PrivateRoute from "./routes/PrivateRoute";
import { lazy } from "react";
import RestrictedRoute from "./routes/RestrictedRoute";
import { Toaster } from "react-hot-toast";
import { selectIsRefreshing } from "./redux/auth/selectors";
import Loader from "./components/Loader";

const HomePage = lazy(() => import("./pages/HomePage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser()); // Функція для збереження сесії користувача
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        <Loader />
      ) : (
        <>
          <Layout>
            <main>
              <Suspense fallback={<Loader />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route
                    path="/register"
                    element={<RestrictedRoute component={RegisterPage} />}
                  />
                  <Route
                    path="/login"
                    element={<RestrictedRoute component={LoginPage} />}
                  />
                  <Route
                    path="/contacts"
                    element={<PrivateRoute component={ContactsPage} />}
                  />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </Suspense>
            </main>
          </Layout>
        </>
      )}
      <Toaster />
    </>
  );
};

export default App;
