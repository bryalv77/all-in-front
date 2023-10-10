import React from 'react';
import { createRoot } from 'react-dom/client';
import { i18n, init as i18nInit } from './i18n';
import { AuthToken } from './modules/auth/authToken';
import TenantService from './modules/tenant/tenantService';
import SettingsService from './modules/settings/settingsService';
import AuthService from './modules/auth/authService';
import './index.css';

(async function () {
  const isSocialOnboardRequested =
    AuthService.isSocialOnboardRequested();
  AuthToken.applyFromLocationUrlIfExists();
  await TenantService.fetchAndApply();
  if (isSocialOnboardRequested) {
    await AuthService.socialOnboard();
  }
  SettingsService.applyThemeFromTenant();
  await i18nInit();

  const App = require('./App').default;
  document.title = i18n('app.title');
  const root = createRoot(
    document.getElementById('root') as HTMLElement,
  );

  // Renderiza tu componente principal
  root.render(<App />);
})();
