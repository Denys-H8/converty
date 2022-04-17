import React, {memo, useContext, useMemo} from 'react';
import {Flex, Heading, VStack} from '@chakra-ui/react';
import {useExchange} from '../hooks/useExchange';
import ExchangeCard from '../components/Exchange/ExchangeCard';
import {AppCtx} from '../contexts/currencyContext';
import PopularExchange from '../components/Exchange/PopularExchange';
import {usePopularExchange} from '../hooks/usePopularExchange';
import Loading from '../components/Loading';

const Exchange: React.FC = () => {
  const {state} = useContext(AppCtx);

  const {data, loading} = useExchange();

  const {data: popularExchangeData, loading: popularExchangeLoading} =
    usePopularExchange();

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

  if (loading || popularExchangeLoading) {
    return <Loading />;
  }

  return (
    <Flex flex={1} justifyContent="space-around" p="50px">
      <VStack alignItems="center">
        <Heading as="h4" fontSize="1.5rem" mb="0.5rem">
          Available Rates 💸
        </Heading>
        <VStack overflowY="scroll" p="6px" width="20rem">
          {ExchangeCards}
        </VStack>
      </VStack>

      <VStack alignItems="center">
        <Heading as="h4" fontSize="1.5rem" mb="0.5rem">
          Hot Rates 🔥
        </Heading>

        <VStack overflowY="scroll" p="6px" width="20rem">
          <PopularExchange data={popularExchangeData} />
        </VStack>
      </VStack>
    </Flex>
  );
};

export default memo(Exchange);
