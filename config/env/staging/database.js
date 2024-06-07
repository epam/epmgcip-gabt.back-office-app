module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: `/cloudsql/${env("INSTANCE_CONNECTION_NAME_STAGING")}`,
      database: env("DATABASE_NAME_STAGING"),
      user: env("DATABASE_USER_STAGING"),
      password: env("DATABASE_PASSWORD_STAGING"),
    },
  },
});
