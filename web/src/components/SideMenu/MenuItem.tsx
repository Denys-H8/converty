import {Box, ChakraProps, HStack, Text} from '@chakra-ui/react';
import React, {memo, useMemo} from 'react';
import {useLocation} from 'react-router-dom';
import ExchangeIcon from '../icons/ExchangeIcon';
import ConverterIcon from '../icons/ConverterIcon';
import {getPageName, getTabName} from '../../utils/tabs';
import {Routes} from '../../navigation/routes';

interface MenuItemProps {
  variant: Routes;
  fullSize: boolean;
  onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({variant, fullSize, onClick}) => {
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

  const iconMargin = fullSize ? 4 : 0;

  const jc = fullSize ? 'flex-start' : 'center';

  return (
    <HStack
      alignItems="center"
      alignSelf="stretch"
      bg="bg.white"
      borderRadius={10}
      cursor="pointer"
      justifyContent={jc}
      onClick={onClick}
      pb="1.5"
      pl="6"
      pr="6"
      pt="1.5"
      sx={isActive ? styles.activeItem : styles.passiveItem}>
      <Box mr={iconMargin}>{Icon}</Box>

      {fullSize && (
        <Text
          color={textColor}
          fontSize={16}
          userSelect="none"
          whiteSpace="nowrap">
          {text}
        </Text>
      )}
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
