import React, {memo, useCallback, useState} from 'react';
import {VStack} from '@chakra-ui/react';
import MenuHeader from './MenuHeader';
import MenuItems from './MenuItems';
import CurrencySelect from './CurrencySelect';

// TODO: add expand animation
const SideMenu: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(true);

  const onExpand = useCallback<() => void>(() => {
    setToggle((prevValue) => !prevValue);
  }, []);

  const size = toggle ? 0.15 : 0.05;

  const px = toggle ? '42' : '6';

  return (
    <VStack
      bg="bg.gray"
      flex={size}
      justifyContent="space-between"
      px={px}
      py="42">
      <MenuHeader onExpand={onExpand} toggle={toggle} />
      <MenuItems toggle={toggle} />
      <CurrencySelect />
    </VStack>
  );
};

export default memo(SideMenu);
