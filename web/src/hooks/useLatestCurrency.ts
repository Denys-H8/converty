import axios from 'axios';
import {useEffect, useState} from 'react';

const API_KEY = '3a2987a0-94dc-11ec-9778-6925dd557c8a';

const useLatestCurrency = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [isError, setIsError] = useState<boolean>(false);

  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      const response = await axios({
        baseURL: 'https://freecurrencyapi.net/api/v2/latest',
        params: {
          apikey: API_KEY,
        },
      });

      setIsLoading(false);

      if (!response || !response.data || !response.data.data) {
        setIsError(true);

        return;
      }

      setData(Object.keys(response.data.data).sort());
    };

    fetchData();
  }, []);

  return {
    isLoading,
    isError,
    data,
  };
};

export default useLatestCurrency;
