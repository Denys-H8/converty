import React, {memo, useCallback} from 'react';
import {VStack} from '@chakra-ui/react';
import {useNavigate} from 'react-router-dom';
import MenuItem from './MenuItem';
import {MenuLocales} from '../../locales/menu';
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
    <VStack alignItems="flex-start">
      <MenuItem text={MenuLocales.ExchangeTab} onClick={onExchangeClick} />
      <MenuItem text={MenuLocales.ConverterTab} onClick={onConverterClick} />
    </VStack>
  );
};

export default memo(MenuItems);
