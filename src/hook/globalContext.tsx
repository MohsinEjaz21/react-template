import React, { createContext, useContext, useMemo } from 'react';
import { SettersFor, useNestedState } from './useNestedState';

const initialState = {
  test: ''
};

// types for state and context
type GlobalStateType = typeof initialState
type GlobalContextType = [
  state: GlobalStateType,
  setters: SettersFor<GlobalStateType>,
  reset: () => void
];

// create context
const GlobalContext = createContext<GlobalContextType>([
  initialState,
  {} as SettersFor<GlobalStateType>,
  () => { },
]);

// create provider
const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setters, reset] = useNestedState(initialState);
  const memoizedSetters = useMemo(() => setters, [state]);
  return (
    <GlobalContext.Provider value={[state, memoizedSetters, reset]}>
      {children}
    </GlobalContext.Provider>
  );
};

// create hook for using context
const useGlobalContext = () => useContext(GlobalContext);

export const globalContext = {
  GlobalProvider,
  useGlobalContext
}