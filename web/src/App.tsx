import React, {memo, useMemo} from 'react';
import {HashRouter, Navigate, Route, Routes} from 'react-router-dom';
import {Flex} from '@chakra-ui/react';
import Converter from './pages/Converter';
import Exchange from './pages/Exchange';
import SideMenu from './components/SideMenu/SideMenu';
import {Routes as RoutesList} from './navigation/routes';
import './App.css';

const App: React.FC = () => {
  const ExchangePage = useMemo<JSX.Element>(() => <Exchange />, []);

  const ConverterPage = useMemo<JSX.Element>(() => <Converter />, []);

  const InitialRedirect = useMemo<JSX.Element>(
    () => <Navigate to={RoutesList.Exchange} />,
    [],
  );

  return (
    <Flex h="100vh" w="100vw">
      <HashRouter>
        <SideMenu />

        <Routes>
          <Route element={ExchangePage} path={RoutesList.Exchange} />
          <Route element={ConverterPage} path={RoutesList.Converter} />
          <Route element={InitialRedirect} path={RoutesList.Any} />
        </Routes>
      </HashRouter>
    </Flex>
  );
};

export default memo(App);
