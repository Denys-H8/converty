import * as React from 'react';
import {Dispatch, useReducer} from 'react';

interface State {
  baseCurrency: string;
}

type Action = {type: 'update'; payload: string};

interface ContextProps {
  state: State;
  dispatch: Dispatch<Action>;
}

export const AppCtx = React.createContext<ContextProps>({} as ContextProps);

const initialState: State = {
  baseCurrency: 'UAH',
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'update':
      return {baseCurrency: action.payload};
    default:
      return state;
  }
};

const CurrencyContext: React.FC = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppCtx.Provider value={{state, dispatch}}>{children}</AppCtx.Provider>
  );
};

export default CurrencyContext;
