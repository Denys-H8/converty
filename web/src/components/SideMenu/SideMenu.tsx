import React, {memo, useCallback} from 'react';
import {VStack} from '@chakra-ui/react';
import MenuHeader from './MenuHeader';
import MenuItems from './MenuItems';
import CurrencySelect from './CurrencySelect';

interface SideMenuProps {
  options: string[];
}

// To Do: add expand functionality
const SideMenu: React.FC<SideMenuProps> = ({options}) => {
  const onExpand = useCallback<() => void>(() => {
    console.log('side menu resizing...');
  }, []);

  return (
    <VStack flex={0.15} p="42" bg="bg.gray" justifyContent="space-between">
      <MenuHeader onExpand={onExpand} />
      <MenuItems />
      <CurrencySelect options={options} />
    </VStack>
  );
};

export default memo(SideMenu);
