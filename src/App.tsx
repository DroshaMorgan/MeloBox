import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { appRoutes } from "./router/routes";
import Main from "@/entities/main/Main";
import Home from "./entities/home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <header className="sticky top-0 flex h-full w-16 shrink-0 flex-col border-r bg-secondary">

          <Link className="m-4 size-8 rounded bg-primary text-center text-sm leading-8 text-slate-100" to="/">
            MLE
          </Link>
          <Link className="m-4 size-8 rounded bg-primary text-center text-sm leading-8 text-slate-100" to="/home">
            HM
          </Link>

        </header>

        <Routes>
          {/* <Route
            path="/"
            element={<Main />} />
          <Route
            path="/home"
            element={<Home />} /> */}
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
