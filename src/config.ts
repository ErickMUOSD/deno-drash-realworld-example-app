export const config = {
  database: {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    hostname: process.env.DB_HOSTNAME,
    port: 5432,
  },
};
