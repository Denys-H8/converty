import React, {memo, useCallback} from 'react';
import {VStack} from '@chakra-ui/react';
import MenuHeader from './MenuHeader';
import MenuItems from './MenuItems';

const SideMenu: React.FC = () => {
  const onExpand = useCallback<() => void>(() => {
    console.log('side menu resizing...');
  }, []);

  return (
    <VStack flex={0.15} p="42" backgroundColor="#F5F5F5">
      <MenuHeader onExpand={onExpand} />
      <MenuItems />
    </VStack>
  );
};

export default memo(SideMenu);
