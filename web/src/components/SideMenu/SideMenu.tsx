import React, {memo, useCallback, useContext, useMemo} from 'react';
import {MotionStyle, Variants, motion, useCycle} from 'framer-motion';
import MenuHeader from './MenuHeader';
import MenuItems from './MenuItems';
import CurrencySelect from './CurrencySelect';
import {AppCtx} from '../../contexts/currencyContext';

const menuStyle: MotionStyle = {
  alignItems: 'center',
  backgroundColor: '#F5F5F5',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  paddingBottom: 42,
  paddingTop: 42,
};

const SideMenu: React.FC = () => {
  const {dispatch} = useContext(AppCtx);

  const [variant, toggleVariant] = useCycle('open', 'closed');

  const onExpand = useCallback<() => void>(() => {
    toggleVariant();
  }, [toggleVariant]);

  const variants = useMemo<Variants>(
    () => ({
      closed: {paddingLeft: '0.8rem', paddingRight: '0.8rem', width: '8rem'},
      open: {paddingLeft: '2rem', paddingRight: '2rem', width: '16rem'},
    }),
    [],
  );

  const onSelect = useCallback<React.ChangeEventHandler<HTMLSelectElement>>(
    (event) => {
      dispatch({payload: event.target.value, type: 'update'});
    },
    [dispatch],
  );

  const toggle = variant === 'open';

  return (
    <motion.div animate={variant} style={menuStyle} variants={variants}>
      <MenuHeader onExpand={onExpand} toggle={toggle} />
      <MenuItems toggle={toggle} />
      <CurrencySelect onChange={onSelect} />
    </motion.div>
  );
};

export default memo(SideMenu);
