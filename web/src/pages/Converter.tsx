import React, {memo, useCallback, useContext, useState} from 'react';
import {
  Box,
  Button,
  Flex,
  HStack,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputProps,
  NumberInputStepper,
  Text,
  VStack,
} from '@chakra-ui/react';
import {AppCtx} from '../contexts/currencyContext';
import CurrencySelect from '../components/SideMenu/CurrencySelect';
import {useConvert} from '../hooks/useConvert';

export interface ConverterInput {
  amount: number | null;
  from: string;
  to: string;
}

const SWAP_SYMBOL = '🔄';

const Converter: React.FC = () => {
  const {state} = useContext(AppCtx);

  const {convert, data, loading} = useConvert();

  const [input, setInput] = useState<ConverterInput>({
    amount: 1,
    from: state.baseCurrency,
    to: state.baseCurrency !== 'USD' ? 'USD' : 'EUR',
  });

  const onAmount = useCallback<NonNullable<NumberInputProps['onChange']>>(
    (value) => {
      setInput((prevValue) => ({
        ...prevValue,
        amount: parseFloat(value),
      }));
    },
    [],
  );

  const onFromSelect = useCallback<React.ChangeEventHandler<HTMLSelectElement>>(
    (event) => {
      setInput((prevValue) => ({
        ...prevValue,
        from: event.target.value,
      }));
    },
    [],
  );

  const onToSelect = useCallback<React.ChangeEventHandler<HTMLSelectElement>>(
    (event) => {
      setInput((prevValue) => ({
        ...prevValue,
        to: event.target.value,
      }));
    },
    [],
  );

  const onClick = useCallback<() => void>(() => {
    convert(input);
  }, [convert, input]);

  const onReverse = useCallback<() => void>(() => {
    setInput((prevValue) => ({
      ...prevValue,
      from: prevValue.to,
      to: prevValue.from,
    }));
  }, []);

  const disabled = !input.amount || !input.from || !input.to || loading;

  return (
    <VStack flex={1} justifyContent="center">
      <VStack>
        <HStack>
          <VStack alignItems="flex-start" style={style.input}>
            <Text fontWeight="medium">Amount</Text>
            <NumberInput
              maxWidth="8rem"
              min={0}
              onChange={onAmount}
              precision={2}
              value={input.amount ?? 0}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </VStack>

          <VStack alignItems="flex-start">
            <Text fontWeight="medium">From</Text>
            <CurrencySelect onChange={onFromSelect} value={input.from} />
          </VStack>

          <Box alignSelf="flex-end" cursor="pointer" onClick={onReverse}>
            <Text fontSize="xl" pb={1.5}>
              {SWAP_SYMBOL}
            </Text>
          </Box>

          <VStack alignItems="flex-start">
            <Text fontWeight="medium">To</Text>
            <CurrencySelect onChange={onToSelect} value={input.to} />
          </VStack>
        </HStack>

        <Button
          alignSelf="flex-end"
          disabled={disabled}
          onClick={onClick}
          style={style.button}
          variant="solid"
          width="7rem">
          {loading ? '...' : 'Convert'}
        </Button>

        {data && (
          <Flex style={style.result}>
            <HStack>
              <Text>{data.amount}</Text>
              <Text fontSize="md" fontWeight="bold">
                {data.base}
              </Text>
              <Text fontSize="sm">=</Text>
              <Text>{data.result[Object.keys(data.result)[0]]}</Text>
              <Text fontSize="md" fontWeight="bold">
                {Object.keys(data.result)[0]}
              </Text>
            </HStack>
          </Flex>
        )}
      </VStack>
    </VStack>
  );
};

const style: Record<string, React.CSSProperties> = {
  button: {
    marginTop: '2rem',
  },
  input: {
    marginRight: '2rem',
  },
  result: {
    alignItems: 'center',
    alignSelf: 'stretch',
    borderRadius: '10px',
    boxShadow: '0px 1px 4px 0px #00000040',
    justifyContent: 'center',
    marginTop: '2rem',
    paddingBottom: '1.5rem',
    paddingTop: '1.5rem',
  },
};

export default memo(Converter);
