"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function DataQueryProvider({ children }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 2, // Retry failed queries twice
        cacheTime: 1000 * 60 * 5, // Cache data for 5 minutes
        staleTime: 1000 * 30, // Data stays fresh for 30 seconds
        refetchOnWindowFocus: true, // Don't refetch when switching tabs
      },
      mutations: {
        retry: 2, // Retry mutations once if they fail
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
