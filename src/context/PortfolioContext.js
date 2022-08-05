import React, { useState, createContext, useContext } from "react"

export const PortfolioContext = createContext();

// Custom hook
export const usePortfolioContext = () => {
    return useContext(PortfolioContext);
}



export const PortfolioProvider = ({ children }) => {
    // Variables
    const [filters, setFilters] = useState([]);
    const [isSpanish, setIsSpanish] = useState(true);
    
    // Actions
    const addFilter = (filter) => {
        setFilters([...filters, filter])
    }

    const removeFilter = (filter) => {
        setFilters(filters.filter(x => x!== filter));
    }

    const toggleLanguage = () => {
        setIsSpanish( isSpanish ? false : true);
    }

    // Value for Context.Provider
    const variables = {
        filters,
        isSpanish
    }

    const actions = {
        addFilter,
        removeFilter,
        toggleLanguage
    }

    return (
        <PortfolioContext.Provider value={{variables, actions}}>
            {children}
        </PortfolioContext.Provider>
    )


}

