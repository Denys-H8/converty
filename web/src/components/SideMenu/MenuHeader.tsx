import React, {memo, useCallback} from 'react';
import {Box, HStack, Text} from '@chakra-ui/react';
import {useNavigate} from 'react-router-dom';
import Logo from '../icons/Logo';
import {MenuLocales} from '../../locales/menu';
import ExpandIcon from '../icons/ExpandIcon';
import {Routes} from '../../navigation/routes';

interface MenuHeaderProps {
  onExpand: () => void;
  toggle: boolean;
}

const logoStyle: React.CSSProperties = {transform: 'rotate(180deg)'};

const MenuHeader: React.FC<MenuHeaderProps> = ({onExpand, toggle}) => {
  const navigate = useNavigate();

  const onLogoClick = useCallback<() => void>(() => {
    navigate(Routes.Exchange);
  }, [navigate]);

  const expandStyle = toggle ? undefined : logoStyle;

  return (
    <HStack mb="28">
      {toggle ? (
        <HStack
          cursor="pointer"
          mr={10}
          onClick={onLogoClick}
          userSelect="none">
          <Logo />
          <Text color="text.dark" fontSize="2xl" fontWeight="bold">
            {MenuLocales.AppName}
          </Text>
        </HStack>
      ) : (
        <Box cursor="pointer" onClick={onLogoClick}>
          <Logo />
        </Box>
      )}

      <Box cursor="pointer" onClick={onExpand}>
        <ExpandIcon style={expandStyle} />
      </Box>
    </HStack>
  );
};

export default memo(MenuHeader);
