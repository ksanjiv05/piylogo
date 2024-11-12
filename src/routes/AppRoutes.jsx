import { Router, Route } from "@solidjs/router";

import Home from "../pages/Home";
import Login from "../admin/Login";
import AdminLayout from "../admin/AdminLayout";

const AppRoutes = () => {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/admin/login" component={Login} />
      <Route path="/admin/dashboard" component={AdminLayout} />
    </Router>
  );
};

export default AppRoutes;
