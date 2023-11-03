import { RouterProvider } from 'react-router-dom';
// On importe ReactDom qui nous permettra d'injecter notre application dans le DOM
import ReactDOM from 'react-dom/client';

// On importe notre fichier de style global
import './styles/index.scss';
import { router } from './routes';

// Je créer un root pour mon application (a partir d'un élément HTML)
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// On injecte notre application dans le DOM
// Ici on va utiliser le RouterProvider pour aiguiller notre application en fonction de l'url
// Chaque url correspondra à un composant définis dans le `router`
root.render(<RouterProvider router={router} />);
