import {Box, Select} from '@chakra-ui/react';
import React, {memo} from 'react';

const CurrencySelect: React.FC = () => {
  return (
    <Box>
      <Select>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </Select>
    </Box>
  );
};

export default memo(CurrencySelect);
