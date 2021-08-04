module.exports = {
  apps: [
    {
      name: 'itglossary',
      cwd: '.',
      script: 'npm',
      args: 'start',
      env: {
        PM2_SERVE_PORT: 8900,
      },
    },
    // optionally a second project
],};
