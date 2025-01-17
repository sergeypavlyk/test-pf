import { useCallback, useEffect, useState } from "react";
import { handleError } from "./utils";
import { mockApiData } from "./mock-data";

interface FetchState<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
  originalRequest: {
    headers: Headers | null;
    status: number | null;
    statusText: string | null;
  } | null;
}

//custom reusable use fetch hook
export function useFetch<T>(url: string, options?: RequestInit) {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    isLoading: true,
    error: null,
    originalRequest: null,
  });

  const controller = new AbortController();
  const { signal } = controller;

  const fetchData = useCallback(async () => {
    setState({
      data: null,
      isLoading: true,
      error: null,
      originalRequest: null,
    });

    try {
      if (url === "mock-url") {
        setTimeout(() => {
          setState({
            data: mockApiData.items as T,
            isLoading: false,
            error: null,
            originalRequest: null,
          });
        }, 1000);
      } else {
        const response = await fetch(url, { ...options, signal });

        const originalRequest = {
          headers: response.headers,
          status: response.status,
          statusText: response.statusText,
        };

        if (!response.ok) {
          await handleError(response);
        }

        const contentType = response.headers.get("Content-Type");
        const data = contentType?.includes("application/json")
          ? ((await response.json()) as T)
          : (null as T);

        setState({
          data,
          isLoading: false,
          error: null,
          originalRequest,
        });
      }
    } catch (err: any) {
      if (err.name !== "AbortError") {
        setState({
          data: null,
          isLoading: false,
          error: err.message,
          originalRequest: null,
        });
      }
    }
  }, [url, options]);

  useEffect(() => {
    fetchData();

    return () => {
      controller.abort();
    };
  }, [fetchData]);

  return { ...state, refetch: fetchData };
}
