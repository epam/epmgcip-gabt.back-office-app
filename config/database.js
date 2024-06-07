/*
const path = require('path');

module.exports = ({ env }) => {
  const client = env('DATABASE_CLIENT');

  const connections = {
    postgres: {
      connection: {
        // connectionString: env('DATABASE_URL'),
        host: `/cloudsql/${env("INSTANCE_CONNECTION_NAME")}`,
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi'),
        user: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi'),
      },
      pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
    },
  };

    if (env('NODE_ENV') === 'production') {
      return {
        connection: {
          client,
          ...connections[client],
          acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
        },
      };
  } else {
      return {
        connection: {
          client,
          ...connections[client],
          acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
        },
      };
    }
}

*/


module.exports = ({ env }) => {
  return {
    connection: {
      client: 'sqlite',
      connection: {
        filename: env('DATABASE_FILENAME', '.tmp/data.db'),
      },
      useNullAsDefault: true,
      debug: false,
    },
  }
};
