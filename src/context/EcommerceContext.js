import { createContext } from "react";

const EcommerceContext = createContext()

const EcommerceProvider = ({children}) => {
    return <EcommerceContext.Provider>
        {children}
    </EcommerceContext.Provider>
}