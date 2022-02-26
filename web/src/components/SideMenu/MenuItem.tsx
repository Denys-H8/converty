import {Box, ChakraProps, HStack, Text} from '@chakra-ui/react';
import React, {memo, useMemo} from 'react';
import ExchangeIcon from '../icons/ExchangeIcon';
import ConverterIcon from '../icons/ConverterIcon';
import {MenuLocales} from '../../locales/menu';

interface MenuItemProps {
  text: MenuLocales;
  onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({text, onClick}) => {
  const Icon = useMemo<React.ReactNode>(() => {
    switch (text) {
      case MenuLocales.ConverterTab:
        return <ConverterIcon />;
      default:
        return <ExchangeIcon />;
    }
  }, [text]);

  return (
    <HStack
      onClick={onClick}
      cursor="pointer"
      pt="1.5"
      pb="1.5"
      pl="6"
      pr="6"
      backgroundColor="#fff"
      alignSelf="stretch"
      borderRadius={10}
      sx={styles.item}
      mb={4}>
      <Box mr={4}>{Icon}</Box>

      <Text fontSize={14}>{text}</Text>
    </HStack>
  );
};

const styles: Record<string, ChakraProps['sx']> = {
  item: {
    boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)',
  },
};

export default memo(MenuItem);
