import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import { config } from "./config";
import Routes from "./routes/Routes";

const App = () => {
  // TODO: add the provider here
  return (
    <Suspense fallback={<div>test</div>}>
      <BrowserRouter basename={config.basePath}>
        <Routes />
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
