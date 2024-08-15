import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ConfigProvider } from 'antd';
import ruRU from 'antd/es/locale/ru_RU';
import App from './App.tsx'
import './global.css'
import type { ThemeConfig } from 'antd';
import { StyleProvider } from '@ant-design/cssinjs';

export const theme = {
  token: {
    borderRadius: 4,
    colorPrimary: '#205dc1',
    colorText: '#323232',
    // colorTextSecondary: '#fcfcfc',
    // fontFamily: '"IBM Plex Sans", sans-serif',
  },
} satisfies ThemeConfig;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider locale={ruRU} theme={theme}>
      <StyleProvider hashPriority="high">
        <App />
      </StyleProvider>
    </ConfigProvider>
  </StrictMode>,
)
