import {VStack} from '@chakra-ui/react';
import React, {memo, useMemo} from 'react';
import {usePopularExchange} from '../../hooks/usePopularExchange';
import ExchangeCard from './ExchangeCard';

// TODO: handle error and loading
const PopularExchange = () => {
  const {data, error, loading} = usePopularExchange();

  const ExchangeCards = useMemo(
    () =>
      data?.results
        ? Object.keys(data.results).map((key, index) =>
            data.base !== key ? (
              <ExchangeCard
                key={`popular-${key}-${data?.results[key]}-{index}`}
                baseCurrency={data.base}
                mt={index !== 0 ? '15px !important' : 0}
                toCurrency={key}
                value={data?.results[key].toFixed(3)}
                withFlags
              />
            ) : null,
          )
        : null,
    [data],
  );

  return <VStack>{ExchangeCards}</VStack>;
};

export default memo(PopularExchange);
