/* eslint-disable import/prefer-default-export */
import {
  Dispatch,
  SetStateAction,
  createContext,
  useMemo,
  useState,
} from 'react';

// Je vais définir un type pour mon context qui contiendra le useState de mon zenMode
// Mon context contiendra un objet avec deux propriétés:
// - zenMode: boolean
// - setZenMode: la fonction de setter d'un useState
type ZenContextType = {
  zenMode: boolean;
  setZenMode: Dispatch<SetStateAction<boolean>>;
};

// Lorsque je créer le context, je dois lui passé des valeurs par défaut.
// Dans le cas où aucun context provider serait définis, les valeurs par défaut seront utilisées
// Techniquement, les données par défaut ne seront jamais utiliser car on va toujours définir un context provider
export const ZenContext = createContext<ZenContextType>({
  zenMode: false,
  setZenMode: () => {},
});

type ZenContextProviderProps = {
  // Pour pouvoir passé des enfants à notre composant, on utilise le type React.ReactNode
  children: React.ReactNode;
};

// Une fois le context créer, il faut créer un Provider
// Provider === fournisseur de données
// C'est un composant qui va stocker les données et utiliser le context pour les rendre accessible à tous les composants enfants
// Ici mon ZenContextProvider est un composant classique
// Sa petite particularité c'est qu'il aura le rôle d'englober les autres composants de mon application
// A l'intérieur il s'occupera de stocker les données à fournir à mes composants enfants
// children ici n'est pas michelisable, c'est une propriété particulière faisant référence aux composants enfants mis entre les balises de mon composant
export function ZenContextProvider({ children }: ZenContextProviderProps) {
  const [zenMode, setZenMode] = useState(false);
  // Comme on créer un nouvel objet, c'est un nouvel objet dans la mémoire.
  // Même si il a exactement les mêmes propriétés / valeurs, il sera considéré comme différent
  // React va donc considérer que le context a changé et va re-rendre tous les composants qui en dépendent
  // const valueToProvide = { zenMode, setZenMode };

  // A chaque exécution du composant ZenContextProvider, on va créer un nouvel objet avec une nouvelle adresse en mémoire. Pour éviter de créer un nouvel objet inutillement, on va utiliser le hook useMemo
  // 1er paramètre : la fonction qui retournera la valeur
  // 2ème paramètre : un tableau de dépendances qui permettra de recalculer la valeur si une des dépendances change
  const valueToProvide = useMemo(() => ({ zenMode, setZenMode }), [zenMode]);

  return (
    // Si on a le malheur de passé un objet en `value` du Provider, IL FAUT utiliser un useMemo sur cette valeur pour éviter le rerendu intutile des composants dépendant du Context.
    <ZenContext.Provider value={valueToProvide}>{children}</ZenContext.Provider>
  );
}
