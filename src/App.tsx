

function App() {

  return (
    <div >
      <BrowserRouter>
        {/*<Navbar/>*/}
        <Routes>
          {privateRoutes.map(route =>
            <Route key={route.element} exact={route.exact}
              path={route.path}
              element={route.element} />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
