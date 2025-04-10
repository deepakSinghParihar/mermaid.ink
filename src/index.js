const createDebug = require('debug');
const createApp = require('./app');

const debug = createDebug('app:index');
const PORT = process.env.PORT || 8001;

(async () => {
  const { app } = await createApp();
  await app.listen(PORT, '0.0.0.0');
  debug('server listening on %o', PORT);
})();
