import { BrowserRouter, Route, Routes } from "react-router-dom";
import { appRoutes } from "./router/routes";
import './global.css'


function App() {
  return (
    <div>
      <div className="text-xs">
        qwq
      </div>
      <BrowserRouter>
        {/* <Navbar /> */}
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
