export const environment = {
  production: true,
  issuer: process.env['ISSUER'] || 'PROD_ISSUER',
  clientId: process.env['CLIENT_ID'] || 'PROD_CLIENT_ID',
  audience: process.env['AUDIENCE'] || 'PROD_AUDIENCE'
};
