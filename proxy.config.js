'use strict';

const HttpsProxyAgent = require('https-proxy-agent');

const proxyConfig = [
  {
    context: '/api',
    target: 'http://localhost:3000',
    changeOrigin: true
  }
];

function setupForCorporateProxy(proxyConfig) {
  if (!Array.isArray(proxyConfig)) {
    proxyConfig = [proxyConfig];
  }

  const proxyServer = process.env.http_proxy || process.env.HTTP_PROXY || 'http://bcgprx.bestcomp.local:3128';
  let agent = null;

  if (proxyServer) {
    agent = new HttpsProxyAgent(proxyServer);
    console.log(`Using corporate proxy server: ${proxyServer}`);
    proxyConfig.forEach(entry => { entry.agent = agent; });
  }

  return proxyConfig;
}

module.exports = setupForCorporateProxy(proxyConfig);