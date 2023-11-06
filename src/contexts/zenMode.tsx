/* eslint-disable import/prefer-default-export */
import { Dispatch, SetStateAction, createContext, useState } from 'react';

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
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ZenContext.Provider value={{ zenMode, setZenMode }}>
      {children}
    </ZenContext.Provider>
  );
}
