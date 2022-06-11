import { Environment } from '@abp/ng.core';

const baseUrl = 'https://strong-salamander-dac723.netlify.app';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'BookStore',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'http://yancy123-001-site1.btempurl.com',
    redirectUri: baseUrl,
    clientId: 'BookStore_App',
    responseType: 'code',
    scope: 'offline_access BookStore',
    requireHttps: false,
  },
  apis: {
    default: {
      url: 'http://yancy123-001-site1.btempurl.com',
      rootNamespace: 'Acme.BookStore',
    },
  },
} as Environment;
