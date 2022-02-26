import React from 'react';
import {VStack} from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import {Routes} from '../navigation/routes';

const NavBar: React.FC = () => {
  return (
    <VStack>
      <Link to={Routes.Exchange}>Exchange</Link>
      <Link to={Routes.Converter}>Convert</Link>
    </VStack>
  );
};

export default NavBar;
