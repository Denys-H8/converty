import axios from 'axios';
import {useContext, useEffect, useState} from 'react';
import {AppCtx} from '../contexts/currencyContext';
import {getDateFrom, getDateTo} from '../utils/currencyApi';

const API_KEY = '3a2987a0-94dc-11ec-9778-6925dd557c8a';

const DEFAULT_CURRENCY = 'UAH';

const useCurrency = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [isError, setIsError] = useState<boolean>(false);

  const [data, setData] = useState<any>(null);

  const {state} = useContext(AppCtx);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      const response = await axios({
        baseURL: 'https://freecurrencyapi.net/api/v2/historical',
        params: {
          apikey: API_KEY,
          base_currency: state.baseCurrency ?? DEFAULT_CURRENCY,
          date_from: getDateFrom(),
          date_to: getDateTo(),
        },
      });

      setIsLoading(false);

      if (!response || !response.data || !response.data.data) {
        setIsError(true);

        return;
      }

      setData(response.data.data);
    };

    fetchData();
  }, []);

  return {
    isLoading,
    isError,
    data,
  };
};

export default useCurrency;
