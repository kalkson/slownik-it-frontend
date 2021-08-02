module.exports = {
  apps: [
    {
      name: 'itglossary',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      exec_mode: 'cluster',
      env: {
        PM2_SERVE_PORT: 8900,
      },
    },
  ],
}
