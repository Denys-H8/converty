import {Box, ChakraProps, HStack, Text} from '@chakra-ui/react';
import React, {memo, useCallback, useMemo} from 'react';
import {useLocation} from 'react-router-dom';
import ExchangeIcon from '../icons/ExchangeIcon';
import ConverterIcon from '../icons/ConverterIcon';
import {getPageName, getTabName} from '../../utils/tabs';
import {Routes} from '../../navigation/routes';

interface MenuItemProps {
  variant: Routes;
  onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({variant, onClick}) => {
  const {pathname} = useLocation();

  const isActive = useMemo<boolean>(
    () => getPageName(pathname) === variant,
    [variant, pathname],
  );

  const Icon = useMemo<React.ReactNode>(() => {
    switch (variant) {
      case Routes.Converter:
        return <ConverterIcon isActive={isActive} />;
      default:
        return <ExchangeIcon isActive={isActive} />;
    }
  }, [variant, isActive]);

  const text = getTabName(variant);

  const textColor = isActive ? 'text.black' : 'text.gray';

  return (
    <HStack
      onClick={onClick}
      cursor="pointer"
      pt="1.5"
      pb="1.5"
      pl="6"
      pr="6"
      bg="bg.white"
      alignSelf="stretch"
      borderRadius={10}
      sx={isActive ? styles.activeItem : styles.passiveItem}
      alignItems="center">
      <Box mr={4}>{Icon}</Box>

      <Text fontSize={16} color={textColor}>
        {text}
      </Text>
    </HStack>
  );
};

const styles: Record<string, ChakraProps['sx']> = {
  activeItem: {
    boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)',
  },
  passiveItem: {
    backgroundColor: 'transparent',
  },
};

export default memo(MenuItem);
