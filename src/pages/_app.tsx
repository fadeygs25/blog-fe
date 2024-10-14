import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  // Khởi tạo QueryClient để sử dụng với TanStack Query
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {/* Phần component của trang */}
      <Component {...pageProps} />
      
      {/* Devtools cho react-query để dễ dàng debug */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
