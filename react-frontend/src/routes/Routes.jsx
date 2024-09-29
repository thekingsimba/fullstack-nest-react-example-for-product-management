import { Navigate, Route, Routes as Switch } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";

const Routes = () => {
  return (
    <Switch>
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Navigate replace to="/product" />} />

        <Route path="/product" exact element={<div>show product page</div>} />

        <Route path="*" element={<Navigate replace to="/product" />} />
      </Route>
      <Route path="/login" element={<div>Login page</div>} />
    </Switch>
  );
};

export default Routes;
