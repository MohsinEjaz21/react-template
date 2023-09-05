import { useCallback, useMemo, useState } from "react";

export type SettersFor<U> = {
  [K in keyof U]: U[K] extends Array<infer T>
  ? { set: (value: T[] | ((prev: T[]) => T[])) => void } & Array<SettersFor<T>>
  : U[K] extends object
  ? { set: (value: U[K] | ((prev: U[K]) => U[K])) => void } & SettersFor<U[K]>
  : { set: (value: U[K] | ((prev: U[K]) => U[K])) => void };
};

type ReturnTypes<T> = [T, SettersFor<T> & { set: (value: T) => void }, () => void];

export const useNestedState = <T extends object>(initialState: T) => {
  const [state, setState] = useState(initialState);

  const createSetter = useCallback((path: string[]) => {
    return (value: any) => {
      setState((prevState) => {
        const newState = { ...prevState };
        let currentLevel = newState;

        for (let i = 0; i < path.length - 1; i++) {
          const key = path[i];
          currentLevel[key] = { ...currentLevel[key] };
          currentLevel = currentLevel[key];
        }

        const lastKey = path[path.length - 1];
        if (typeof value === "function") {
          currentLevel[lastKey] = value(currentLevel[lastKey]);
        } else {
          currentLevel[lastKey] = value;
        }

        return newState;
      });
    };
  }, []);

  const generateSetters = useCallback((obj: T, path: string[] = []) => {
    const setters: any = {};
    if (!obj) return setters;

    Object.keys(obj).forEach((key) => {
      const value = obj[key];
      const currentPath = path.concat([key]);
      if (Array.isArray(value)) {
        setters[key] = {
          set: createSetter(currentPath),
        };
      } else if (typeof value === "object") {
        setters[key] = {
          set: createSetter(currentPath),
          ...generateSetters(value, currentPath),
        };
      } else {
        setters[key] = {
          set: createSetter(currentPath),
        };
      }
    });
    setters.set = createSetter(path);
    return setters as SettersFor<T>;
  }, []);

  const reset = useCallback(() => {
    setState(initialState);
  }, [initialState]);

  const setters = useMemo(() => generateSetters(initialState), [
    initialState,
    generateSetters,
  ]);

  return [state, setters, reset] as ReturnTypes<T>;
};
