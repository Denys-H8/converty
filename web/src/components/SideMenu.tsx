import React, {memo, useCallback} from 'react';
import {VStack} from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import MenuHeader from './MenuHeader';
import {Routes} from '../navigation/routes';

const SideMenu: React.FC = () => {
  const onExpand = useCallback<() => void>(() => {
    console.log('side menu resizing...');
  }, []);

  return (
    <VStack flex={0.2}>
      <MenuHeader onExpand={onExpand} />

      <Link to={Routes.Exchange}>Exchange</Link>
      <Link to={Routes.Converter}>Convert</Link>
    </VStack>
  );
};

export default memo(SideMenu);
