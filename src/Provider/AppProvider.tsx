import { ReactNode, createContext, useState } from "react";

interface Token {
    token?: string;
}

interface Context {
    token?: Token
    setToken?: React.Dispatch<React.SetStateAction<Token | undefined>>
}

interface Props {
    children: ReactNode
}

const defaultValue: Context = {
    token: undefined
}

export const AppContext = createContext(defaultValue);

const AppProvider = ({ children }: Props) => {

    const [toket, setToken] = useState<Token>();

    return (
        <AppContext.Provider value={{ token: toket, setToken: setToken}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;