import axios from "axios";
import { useEffect, useState } from "react";

const CURRENCIES_API_URL = process.env.REACT_APP_CURRENCIES_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export const useCurrencies = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const [error, setError] = useState<boolean>(false);

  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!CURRENCIES_API_URL || !API_KEY) {
        setError(true);

        return;
      }

      setError(false);
      setLoading(true);

      const response = await axios({
        baseURL: CURRENCIES_API_URL,
        params: {
          api_key: API_KEY,
        },
      });

      setLoading(false);

      if (!response || !response.data) {
        setError(true);

        return;
      }

      setData(response.data.currencies);
    };

    fetchData();
  }, []);

  return {
    data,
    error,
    loading,
  };
};
