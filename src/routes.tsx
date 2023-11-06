/* eslint-disable import/prefer-default-export */
import { createBrowserRouter } from 'react-router-dom';
import Root from './routes/Root/Root';
import Home from './routes/Home/Home';
import Category from './routes/Category/Category';
import NotFound from './components/NotFound/NotFound';
import Article from './routes/Article/Article';

export const router = createBrowserRouter([
  {
    // le path correspond à l'url
    path: '/',
    // l'élément JSX à afficher sur cette page
    element: <Root />,
    // En cas d'erreur, on pourra spécifier un composant à afficher
    errorElement: <NotFound />,

    // On peut imbriquer des routes
    // En fonction de certaines url, afficher certains composants enfants
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        // Sur l'url /category/react, on affichera cet élément.
        // Le composant de la route parente sera affiché aussi
        // Et on spécifiera à quel endroit dans le composant parent on affichera cet élément
        path: '/category/:slug',
        element: <Category />,
      },
      {
        path: '/article/:id',
        element: <Article />,
      },
    ],
  },
]);
