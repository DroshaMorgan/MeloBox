import Albums from "@/entities/albums/Albums";
import Artists from "@/entities/artists/Artists";
import Home from "@/entities/home/Home";
import Main from "@/entities/main/Main";

export const appRoutes = [
    // { path: "/artists/albums/:artist/:id", element: <Tracks />},
    // { path: "/music-app-react", element: <Main />},
    { path: "/artists/albums/:id", element: <Albums /> },
    { path: "/artists", element: <Artists /> },
    { path: "/home", element: <Home /> },
    { path: "/", element: <Main /> },
];