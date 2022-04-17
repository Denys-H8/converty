import axios from "axios";
import { useCallback, useState } from "react";
import { ConverterInput } from "../pages/Converter";

const CONVERT_API_URL = process.env.REACT_APP_CONVERT_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export const useConvert = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const [error, setError] = useState<boolean>(false);

  const [data, setData] = useState<any>(null);

  const convert = useCallback<(state: ConverterInput) => Promise<any>>(async (state) => {
    if (!CONVERT_API_URL || !API_KEY) {
      setError(true);

      return;
    }

    setError(false);
    setLoading(true);

    const response = await axios({
      baseURL: CONVERT_API_URL,
      params: {
        amount: state.amount,
        api_key: API_KEY,
        from: state.from,
        to: state.to,
      },
    });

    setLoading(false);

    if(response.data) {
      setData(response.data);
    }
  }, [])

  return {
    convert,
    data,
    error,
    loading
  };
};
