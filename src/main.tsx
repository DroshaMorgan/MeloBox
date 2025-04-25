import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/es/locale/ru_RU';
import App from './App.tsx';
import './global.css';
import type { ThemeConfig } from 'antd';
import { StyleProvider } from '@ant-design/cssinjs';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const theme = {
  token: {
    borderRadius: 4,
    colorPrimary: '#205dc1',
    colorText: '#323232',
    // colorTextSecondary: '#fcfcfc',
    // fontFamily: '"IBM Plex Sans", sans-serif',
  },
} satisfies ThemeConfig;

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ConfigProvider locale={ruRU} theme={theme}>
        <StyleProvider hashPriority="high">
          <App />
        </StyleProvider>
      </ConfigProvider>
    </QueryClientProvider>
  </StrictMode>
);
