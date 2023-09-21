import { ReactNode, createContext, useState, Dispatch, SetStateAction } from 'react';

interface CategoryData {
  key: string;
  id: string;
  name: string;
  is_active: boolean;
}

interface ContextProps {
  categories: CategoryData[];
  setCategories: Dispatch<SetStateAction<CategoryData[]>>;
  isNameUnique: (name: string) => boolean;

}

interface Props {
  children: ReactNode;
}

const defaultValue: ContextProps = {
  categories: [],
  setCategories: () => {},
  isNameUnique: () => false
};

export const AppContext = createContext<ContextProps>(defaultValue);

const AppProvider = ({ children }: Props) => {
  const [categories, setCategories] = useState<CategoryData[]>([]);
  const isNameUnique = (name: string) => {
    return categories.every(category => category.name !== name);
  };
  return (
    <AppContext.Provider value={{ categories, setCategories, isNameUnique }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
