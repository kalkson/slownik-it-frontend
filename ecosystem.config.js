module.exports = {
  apps: [
    {
      name: 'itglossary',
      cwd: '/var/www/itglossary.pl/_work/slownik-it-frontend/slownik-it-frontend',
      script: 'npm',
      args: 'start',
      env: {
        PM2_SERVE_PORT: 8900,
      },
    },
    // optionally a second project
],};
