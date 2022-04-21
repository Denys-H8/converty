import {Box, BoxProps, HStack, Text} from '@chakra-ui/react';
import {motion} from 'framer-motion';
import React, {memo, useMemo} from 'react';

interface ExchangeCardProps extends BoxProps {
  baseCurrency: string;
  toCurrency: string;
  value: number;
  withFlags?: boolean;
}

const TO_SYMBOL = '👉';

const ExchangeCard: React.FC<ExchangeCardProps> = ({
  baseCurrency,
  toCurrency,
  value,
  withFlags = false,
  ...props
}) => {
  const TextDescription = useMemo<React.ReactNode>(
    () => (
      <HStack>
        <Text fontSize="md">{baseCurrency}</Text>
        <Text fontSize="sm">{TO_SYMBOL}</Text>
        <Text fontSize="md">{toCurrency}</Text>
      </HStack>
    ),
    [baseCurrency, toCurrency],
  );

  const FlagsDescription = useMemo<React.ReactNode>(
    () => (
      <HStack position="relative">
        <Box
          backgroundImage={`${process.env.PUBLIC_URL}/assets/${baseCurrency}.png`}
          style={baseFlagStyle}
        />
        <Box
          backgroundImage={`${process.env.PUBLIC_URL}/assets/${toCurrency}.png`}
          style={toFlagStyle}
        />
      </HStack>
    ),
    [baseCurrency, toCurrency],
  );

  return (
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
        {withFlags ? FlagsDescription : TextDescription}

        <Text fontSize="md">{value}</Text>
      </HStack>
    </motion.div>
  );
};

const baseFlagStyle: React.CSSProperties = {
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  border: '1px solid #aaa',
  borderRadius: '50%',
  height: '2rem',
  position: 'relative',
  width: '2rem',
  zIndex: 10,
};

const toFlagStyle: React.CSSProperties = {
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  border: '1px solid #aaa',
  borderRadius: '50%',
  height: '2rem',
  left: '-1rem',
  marginLeft: '0px',
  position: 'relative',
  width: '2rem',
};

export default memo(ExchangeCard);
