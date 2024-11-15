import type { AppProps } from 'next/app';
import { useState } from 'react';
import { Provider } from 'react-redux'; // Import Provider từ react-redux
import { store } from '../store/store'; // Import store của bạn

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>  {/* Bọc toàn bộ ứng dụng trong Provider */}
        <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
