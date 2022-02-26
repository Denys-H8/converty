import React, {memo, useMemo} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import SideMenu from './components/SideMenu';
import Converter from './pages/Converter';
import Exchange from './pages/Exchange';
import {Routes as RoutesList} from './navigation/routes';
import {Flex} from '@chakra-ui/react';

const App: React.FC = () => {
  const ExchangePage = useMemo<JSX.Element>(() => <Exchange />, []);

  const ConverterPage = useMemo<JSX.Element>(() => <Converter />, []);

  const InitialRedirect = useMemo<JSX.Element>(
    () => <Navigate to={RoutesList.Exchange} />,
    [],
  );

  return (
    <Flex h="100vh" w="100vw">
      <BrowserRouter>
        <SideMenu />

        <Routes>
          <Route path={RoutesList.Exchange} element={ExchangePage} />
          <Route path={RoutesList.Converter} element={ConverterPage} />
          <Route path={RoutesList.Any} element={InitialRedirect} />
        </Routes>
      </BrowserRouter>
    </Flex>
  );
};

export default memo(App);
