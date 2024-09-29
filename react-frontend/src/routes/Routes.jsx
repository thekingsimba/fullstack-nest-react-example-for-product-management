import { Navigate, Route, Routes as Switch } from "react-router-dom";

import Login from "../pages/Login";
import ProtectedRoute from "./ProtectedRoute";

const Routes = () => {
  return (
    <Switch>
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Navigate replace to="/product" />} />

        <Route path="/product" exact element={<div>show product page</div>} />

        <Route path="*" element={<Navigate replace to="/product" />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Switch>
  );
};

export default Routes;
