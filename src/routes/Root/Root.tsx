import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import './Root.scss';

import { Category } from '../../@types/post';
import { useAsyncFetch } from '../../hooks/useAsyncFetch';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function Root() {
  const [zenMode, setZenMode] = useState(false);

  const { data: categories } = useAsyncFetch<Category[]>(
    'https://oblog-react.vercel.app/api/categories'
  );

  return (
    // SI mon zen mode est activer, je rajoute une classe CSS à mon app
    <div className={`root ${zenMode ? 'app--zen-mode' : ''}`}>
      <Header
        categories={categories || []}
        zenMode={zenMode}
        setZenMode={setZenMode}
      />
      {/* Outlet permet d'afficher les éléments des routes enfants */}
      <Outlet />

      <Footer />
    </div>
  );
}

export default Root;
