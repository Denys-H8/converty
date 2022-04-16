import {BoxProps, HStack, Text} from '@chakra-ui/react';
import {motion} from 'framer-motion';
import React, {memo} from 'react';

interface ExchangeCardProps extends BoxProps {
  baseCurrency: string;
  toCurrency: string;
  value: number;
}

const TO_SYMBOL = '👉';

const ExchangeCard: React.FC<ExchangeCardProps> = ({
  baseCurrency,
  toCurrency,
  value,
  ...props
}) => (
  <motion.div
    whileHover={{
      scale: 1.05,
      transition: {duration: 0.15},
    }}>
    <HStack
      alignItems="center"
      borderRadius="10px"
      boxShadow="0px 1px 4px 0px #00000040"
      cursor="pointer"
      justifyContent="space-between"
      px="1rem"
      py="0.5rem"
      userSelect="none"
      width="12rem"
      {...props}>
      <HStack>
        <Text fontSize="md">{baseCurrency}</Text>
        <Text fontSize="sm">{TO_SYMBOL}</Text>
        <Text fontSize="md">{toCurrency}</Text>
      </HStack>

      <Text fontSize="md">{value}</Text>
    </HStack>
  </motion.div>
);

export default memo(ExchangeCard);
