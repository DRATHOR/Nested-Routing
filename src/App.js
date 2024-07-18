import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contacts from "./pages/contacts/contacts";
import Header from "./components/header/header";
import Instagram from "./pages/instagram";
import WhatsApps from "./pages/whatsApps";
import Layout from "./components/layout/layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Layout>
          <Routes>
            <Route excet path="/" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/contacts/" Component={Contacts}>
              <Route path="instagram" Component={Instagram} />
              <Route path="whats-app" Component={WhatsApps} />
            </Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
