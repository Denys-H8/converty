import {MenuLocales} from '../locales/menu';
import {Routes} from '../navigation/routes';

export const getPageName = (pathname: string): Routes => {
  switch (pathname) {
    case '/converter':
      return Routes.Converter;
    default:
      return Routes.Exchange;
  }
};

export const getTabName = (variant: Routes): MenuLocales => {
  switch (variant) {
    case Routes.Converter:
      return MenuLocales.ConverterTab;
    default:
      return MenuLocales.ExchangeTab;
  }
};
