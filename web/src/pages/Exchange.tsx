import React, {memo, useContext, useMemo} from 'react';
import {Flex, VStack} from '@chakra-ui/react';
import {useExchange} from '../hooks/useExchange';
import ExchangeCard from '../components/Exchange/ExchangeCard';
import {AppCtx} from '../contexts/currencyContext';

// TODO: handle error and loading
const Exchange: React.FC = () => {
  const {state} = useContext(AppCtx);

  const {data, error, loading} = useExchange();

  const ExchangeCards = useMemo(
    () =>
      data
        ? Object.keys(data).map((key, index) => (
            <ExchangeCard
              baseCurrency={state.baseCurrency}
              mt={index !== 0 ? '15px !important' : 0}
              toCurrency={key}
              value={data[key].toFixed(3)}
            />
          ))
        : null,
    [data, state.baseCurrency],
  );

  return (
    <Flex flex={1} justifyContent="space-around" p="50px">
      <VStack overflowY="scroll" p="6px" width="20rem">
        {ExchangeCards}
      </VStack>

      <VStack overflowY="scroll" p="6px" width="20rem">
        {ExchangeCards}
      </VStack>
    </Flex>
  );
};

export default memo(Exchange);
