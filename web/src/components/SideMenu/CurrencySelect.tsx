import {Select} from '@chakra-ui/react';
import React, {memo, useCallback, useContext, useMemo} from 'react';
import {AppCtx} from '../../contexts/currencyContext';

const options = ['UAH', 'USD', 'EUR'];

const CurrencySelect: React.FC = () => {
  const {state, dispatch} = useContext(AppCtx);

  const Items = useMemo<JSX.Element[] | null>(
    () =>
      options.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      )),
    [],
  );

  const onChange = useCallback<React.ChangeEventHandler<HTMLSelectElement>>(
    (event) => {
      dispatch({payload: event.target.value, type: 'update'});
    },
    [dispatch],
  );

  return (
    <Select onChange={onChange} value={state.baseCurrency}>
      {Items}
    </Select>
  );
};

export default memo(CurrencySelect);
