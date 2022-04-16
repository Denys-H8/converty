import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AppCtx } from "../contexts/currencyContext";

const EXCHANGE_API_URL = process.env.REACT_APP_EXCHANGE_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export const useExchange = () => {
  const {state} = useContext(AppCtx);

  const [loading, setLoading] = useState<boolean>(true);

  const [error, setError] = useState<boolean>(false);

  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!EXCHANGE_API_URL || !API_KEY) {
        setError(true);

        return;
      }

      setError(false);
      setLoading(true);

      const response = await axios({
        baseURL: EXCHANGE_API_URL,
        params: {
          api_key: API_KEY,
          from: state.baseCurrency,
        },
      });

      setLoading(false);

      if (!response || !response.data) {
        setError(true);

        return;
      }

      setData(response.data.results);
    };

    fetchData();
  }, [state.baseCurrency]);

  return {
    data,
    error,
    loading,
  };
};
