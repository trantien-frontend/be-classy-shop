import {} from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useRoutesElement } from "./hook/useRoutesElement";

function App() {
  const routes = useRoutesElement();
  return (
    <section id="wrapper">
      {/* <Header /> */}
      {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="dress shoes/*" element={<ProductFeature />} />
        <Route path="oxford/*" element={<ProductFeature />} />
        <Route path="derby/*" element={<ProductFeature />} />
        <Route path="loafer/*" element={<ProductFeature />} />
        <Route path="boots/*" element={<ProductFeature />} />
        <Route path="accessories/*" element={<ProductFeature />} />
        <Route path="collection/*" element={<ProductFeature />} />
        <Route path="belt/*" element={<ProductFeature />} />
        <Route path="wallet/*" element={<ProductFeature />} />
        <Route path="register" element={<RegisterForm />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes> */}
      {/* <Footer /> */}
      {routes}
      <ToastContainer />
    </section>
  );
}

export default App;
