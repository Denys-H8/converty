import {Select} from '@chakra-ui/react';
import React, {memo, useCallback, useContext, useMemo} from 'react';
import {AppCtx} from '../../contexts/currencyContext';

interface CurrencySelectProps {
  options: string[];
}

const CurrencySelect: React.FC<CurrencySelectProps> = ({options}) => {
  const {state, dispatch} = useContext(AppCtx);

  const Items = useMemo<JSX.Element[] | null>(() => {
    if (!options || !options.length) return null;

    return options.map((item) => (
      <option key={item} value={item}>
        {item}
      </option>
    ));
  }, [options]);

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
