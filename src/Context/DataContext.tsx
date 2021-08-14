
import React, { createContext, useState, useContext } from 'react'

const DataContext = createContext(false)

export const DataProvider = ({children}:any) => {
    const [data, setData] = useState(false);
    const setValues = (value:boolean) => {
        setData(value)
    }

    // @ts-ignore
    return <DataContext.Provider value={{data, setValues}}>
        {children}
    </DataContext.Provider>
}

export const useData = () => useContext(DataContext)