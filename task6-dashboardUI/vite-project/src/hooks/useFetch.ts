
import { useEffect, useState } from "react";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

function useFetch<T>(url: string) {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        setState({
          data: null,
          loading: true,
          error: null,
        });

        const response = await fetch(url, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        const result: T = await response.json();

        setState({
          data: result,
          loading: false,
          error: null,
        });
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") {
          return;
        }

        setState({
          data: null,
          loading: false,
          error:
            error instanceof Error
              ? error.message
              : "Something went wrong",
        });
      }
    }

    fetchData();

    return () => controller.abort();
  }, [url]);

  return state;
}

export default useFetch;
