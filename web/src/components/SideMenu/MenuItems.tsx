import React, {memo, useCallback} from 'react';
import {VStack} from '@chakra-ui/react';
import {useNavigate} from 'react-router-dom';
import MenuItem from './MenuItem';
import {Routes} from '../../navigation/routes';

const MenuItems: React.FC = () => {
  const navigate = useNavigate();

  const onExchangeClick = useCallback<() => void>(() => {
    navigate(Routes.Exchange);
  }, []);

  const onConverterClick = useCallback<() => void>(() => {
    navigate(Routes.Converter);
  }, []);

  return (
    <VStack flex={1} alignItems="flex-start" spacing={5}>
      <MenuItem variant={Routes.Exchange} onClick={onExchangeClick} />
      <MenuItem variant={Routes.Converter} onClick={onConverterClick} />
    </VStack>
  );
};

export default memo(MenuItems);
