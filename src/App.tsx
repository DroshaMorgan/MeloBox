import { BrowserRouter, Route, Routes } from "react-router-dom";
import { appRoutes } from "./router/routes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {appRoutes.map(route =>
            <Route key={route.path}
              path={route.path}
              element={route.element} />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
