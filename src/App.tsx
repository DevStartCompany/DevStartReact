import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { SignUp } from "./Pages/SignUp/SignUp";
import { PageNotFound } from "./Pages/404";
import { SignIn } from "./Pages/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/criar-conta" element={<SignUp />} />
        <Route path="/entrar" element={<SignIn />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
