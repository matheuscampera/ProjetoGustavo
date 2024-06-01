// Usando node-cache
const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 30 });

module.exports = cache;

// Para usar Redis, substitua o código acima por:
// const redis = require('redis');
// const client = redis.createClient({
//     host: process.env.REDIS_HOST,
//     port: process.env.REDIS_PORT
// });
// client.on('error', (err) => console.log('Redis Client Error', err));
// module.exports = client;
