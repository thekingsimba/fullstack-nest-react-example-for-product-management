import { Navigate, Route, Routes as Switch } from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<Navigate replace to="/product" />} />

      <Route path="/product" exact element={<div>show product page</div>} />

      <Route path="*" element={<Navigate replace to="/product" />} />
    </Switch>
  );
};

export default Routes;
