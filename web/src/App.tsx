import React, {memo, useMemo} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import {Flex} from '@chakra-ui/react';
import Converter from './pages/Converter';
import Exchange from './pages/Exchange';
import SideMenu from './components/SideMenu/SideMenu';
import {Routes as RoutesList} from './navigation/routes';
import useLatestCurrency from './hooks/useLatestCurrency';
import Loading from './components/Loading';

// TODO: handle error
const App: React.FC = () => {
  const ExchangePage = useMemo<JSX.Element>(() => <Exchange />, []);

  const ConverterPage = useMemo<JSX.Element>(() => <Converter />, []);

  const InitialRedirect = useMemo<JSX.Element>(
    () => <Navigate to={RoutesList.Exchange} />,
    [],
  );

  const {isLoading, isError, data} = useLatestCurrency();

  if (isLoading) {
    <Loading />;
  }

  if (isError) {
    return null;
  }

  return (
    <Flex h="100vh" w="100vw">
      <BrowserRouter>
        <SideMenu options={data} />

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
