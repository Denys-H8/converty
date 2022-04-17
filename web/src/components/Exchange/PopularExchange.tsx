import {VStack} from '@chakra-ui/react';
import React, {memo, useMemo} from 'react';
import ExchangeCard from './ExchangeCard';

interface PopularExchangeProps {
  data: any;
}

const PopularExchange: React.FC<PopularExchangeProps> = ({data}) => {
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
