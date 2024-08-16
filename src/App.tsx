import { BrowserRouter, Route, Routes } from "react-router-dom";
import { appRoutes } from "@/router/routes";
import { NavSide } from "@/components/nav/NavSide";

function App() {
  return (
    <BrowserRouter>
      <NavSide />

      <div className="pl-16">
        <Routes>
          {appRoutes.map(route =>
            <Route key={route.path}
              path={route.path}
              element={route.element} />
          )}
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
