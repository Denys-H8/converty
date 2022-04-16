import {Select} from '@chakra-ui/react';
import React, {memo, useCallback, useContext, useMemo} from 'react';
import {AppCtx} from '../../contexts/currencyContext';
import {useCurrencies} from '../../hooks/useCurrencies';

// TODO: handle error and loading
const CurrencySelect: React.FC = () => {
  const {state, dispatch} = useContext(AppCtx);

  const {data, error, loading} = useCurrencies();

  const Items = useMemo<JSX.Element[] | null>(
    () =>
      data
        ? Object.keys(data).map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))
        : null,
    [data],
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
