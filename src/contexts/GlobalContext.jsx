import { createContext, useContext, useState } from "react";

//istanza
const GlobalContext = createContext();

//creazione
function GlobalProvider({ children }){
    //gestione loader
    const [isLoading, setIsLoading] = useState(0);
    return(
        <GlobalContext.Provider
            value={{
                isLoading,
                setIsLoading,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}

//hook
function useGlobal() {
    const context = useContext(GlobalContext);
    return context;
}

export { GlobalProvider, useGlobal }