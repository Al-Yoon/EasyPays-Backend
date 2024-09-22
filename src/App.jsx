import React from "react";
import Layout from "./components/layout/Layout";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from "./views/Landing";
import LoginRegister from "./views/Login-register";
import MyProjects from "./views/MyProjects";
import Projects from "./views/Projects";
import UserPanel from "./views/UserPanel";
import Nosotros from "./views/Nosotros";
import NewProject from "./views/NewProject";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="login" element={<LoginRegister />} />
          <Route path="myprojects" element={<MyProjects />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:projectSlug" element={<Projects />} />
          <Route path="newprojects/:projectSlug" element={<NewProject />} />
          <Route path="userpanel" element={<UserPanel />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;