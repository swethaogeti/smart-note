import React from "react";
import { useContext, useReducer } from "react";
import { createContext } from "react";
import { filterReducer, initialState } from "../reducers/filterReducer";

const FilterContext = createContext();

export const FiltersProvider = ({ children }) => {
  const [filters, dispatchFilters] = useReducer(filterReducer, initialState);

  return (
    <FilterContext.Provider value={{ filters, dispatchFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilters = () => useContext(FilterContext);
