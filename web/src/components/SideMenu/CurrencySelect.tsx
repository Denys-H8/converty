import {Select} from '@chakra-ui/react';
import React, {memo, useContext, useMemo} from 'react';
import {AppCtx} from '../../contexts/currencyContext';
import {useCurrencies} from '../../hooks/useCurrencies';

interface CurrencySelectProps {
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  value?: string;
}

// TODO: handle error and loading
const CurrencySelect: React.FC<CurrencySelectProps> = ({onChange, value}) => {
  const {state} = useContext(AppCtx);

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

  return (
    <Select onChange={onChange} value={value ?? state.baseCurrency}>
      {Items}
    </Select>
  );
};

export default memo(CurrencySelect);
