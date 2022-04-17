import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AppCtx } from "../contexts/currencyContext";

const POPULAR_EXCHANGE_API_URL = process.env.REACT_APP_POPULAR_EXCHANGE_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const TO_CURRENCY = 'UAH%2EUR%2USD%2JPY%2GBP%2CHF%2CAD';

export const usePopularExchange = () => {
  const {state} = useContext(AppCtx);

  const [loading, setLoading] = useState<boolean>(true);

  const [error, setError] = useState<boolean>(false);

  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!POPULAR_EXCHANGE_API_URL || !API_KEY) {
        setError(true);

        return;
      }

      setError(false);
      setLoading(true);

      const response = await axios({
        baseURL: POPULAR_EXCHANGE_API_URL,
        params: {
          api_key: API_KEY,
          from: state.baseCurrency,
          to: TO_CURRENCY,
        },
      });

      setLoading(false);

      if (!response || !response.data) {
        setError(true);

        return;
      }

      setData(response.data);
    };

    fetchData();
  }, [state.baseCurrency]);

  return {
    data,
    error,
    loading,
  };
};
