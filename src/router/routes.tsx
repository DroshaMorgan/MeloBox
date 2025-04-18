import Albums from '@/entities/albums/Albums';
import Artists from '@/entities/artists/Artists';
import Home from '@/entities/home/Home';
import Main from '@/entities/main/Main';
import Tracks from '@/entities/tracks/Tracks';

export const appRoutes = [
  { path: '/', element: <Main /> },
  { path: '/home', element: <Home /> },

  { path: '/artists', element: <Artists /> },
  { path: '/artists/:id', element: <Albums /> },
  { path: '/artists/:artist/:id', element: <Tracks /> },
];
