import React, {memo, useCallback} from 'react';
import {Box, HStack, Text} from '@chakra-ui/react';
import {useNavigate} from 'react-router-dom';
import Logo from '../icons/Logo';
import {MenuLocales} from '../../locales/menu';
import ExpandIcon from '../icons/ExpandIcon';
import {Routes} from '../../navigation/routes';

interface MenuHeaderProps {
  onExpand: () => void;
}

const MenuHeader: React.FC<MenuHeaderProps> = ({onExpand}) => {
  const navigate = useNavigate();

  const onLogoClick = useCallback<() => void>(() => {
    navigate(Routes.Exchange);
  }, []);

  return (
    <HStack mb="28">
      <HStack cursor="pointer" onClick={onLogoClick} mr={10}>
        <Logo />
        <Text fontSize="xl">{MenuLocales.AppName}</Text>
      </HStack>

      <Box onClick={onExpand} cursor="pointer">
        <ExpandIcon />
      </Box>
    </HStack>
  );
};

export default memo(MenuHeader);
