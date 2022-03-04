import React, {memo} from 'react';
import {Flex} from '@chakra-ui/react';
import LoadingIcon from './icons/LoadingIcon';

const Loading: React.FC = () => {
  return (
    <Flex flex={1} justifyContent="center" alignItems="center">
      <LoadingIcon />
    </Flex>
  );
};

export default memo(Loading);
