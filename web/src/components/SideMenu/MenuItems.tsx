import React, {memo, useCallback} from 'react';
import {VStack} from '@chakra-ui/react';
import {useNavigate} from 'react-router-dom';
import MenuItem from './MenuItem';
import {Routes} from '../../navigation/routes';

interface MenuItemsProps {
  toggle: boolean;
}

const MenuItems: React.FC<MenuItemsProps> = ({toggle}) => {
  const navigate = useNavigate();

  const onExchangeClick = useCallback<() => void>(() => {
    navigate(Routes.Exchange);
  }, [navigate]);

  const onConverterClick = useCallback<() => void>(() => {
    navigate(Routes.Converter);
  }, [navigate]);

  return (
    <VStack alignItems="flex-start" flex={1} spacing={5}>
      <MenuItem
        fullSize={toggle}
        onClick={onExchangeClick}
        variant={Routes.Exchange}
      />
      <MenuItem
        fullSize={toggle}
        onClick={onConverterClick}
        variant={Routes.Converter}
      />
    </VStack>
  );
};

export default memo(MenuItems);
