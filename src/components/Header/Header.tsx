import { NavLink } from 'react-router-dom';
import { Category } from '../../@types/post';
import './Header.scss';

// type SetterState<T> = React.Dispatch<React.SetStateAction<T>>;

type HeaderProps = {
  categories: Category[];
  zenMode: boolean;
  // Le vrai type d'une fonction de setter d'un useState ressemble à ça :
  // setZenMode: (zenMode: boolean | ((oldValue: boolean) => boolean)) => void;
  setZenMode: React.Dispatch<React.SetStateAction<boolean>>;
};
function Header({ categories, zenMode, setZenMode }: HeaderProps) {
  return (
    <header className="menu" id="header">
      <nav className="menu-nav">
        <NavLink
          // La particularité du NavLink est que l'on peut lui passer une fonction dans className (dans style également)
          // Cette fonction nous permettra de récupérer l'information si le lien est actif ou non
          // lien actif === l'url actuel correspond a la propriété `to` du NavLink
          // Cette information sera situer dans l'objet en paramètre
          // Cette fonction doit retourner une chaine de caractère correspondant à la classe CSS à appliquer
          className={({ isActive }) =>
            `menu-link ${isActive ? 'menu-link--selected' : ''}`
          }
          to="/"
        >
          Accueil
        </NavLink>
        {categories.map((category) => (
          <NavLink
            className={({ isActive }) =>
              `menu-link ${isActive ? 'menu-link--selected' : ''}`
            }
            to={`/category/${category.slug}`}
            key={category.id}
          >
            {category.name}
          </NavLink>
        ))}
        <button
          className="menu-btn"
          type="button"
          onClick={() => setZenMode((active) => !active)}
        >
          {zenMode ? 'Désactiver ' : 'Activer '}le mode zen
        </button>
      </nav>
    </header>
  );
}

export default Header;
