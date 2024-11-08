module.exports = {
  development: {
    username: process.env.DB_USER || "postgres", // Default username for PostgreSQL
    password: process.env.DB_PASSWORD || "", // Password for the database
    database: process.env.DB_DATABASE || "my_database", // Database name for development
    host: process.env.DB_HOST || "localhost", // Host where the database is running
    dialect: "postgres", // Set the dialect to PostgreSQL
    port: process.env.DB_PORT || 5432, // Default PostgreSQL port
    logging: console.log, // Optionally log SQL queries to console
    migrationStorageTableName: "migrations",
    dialectOptions: {
      ssl: {
        require: true, // Require SSL connection
      },
    },
  },
  test: {
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_DATABASE || "my_database_test",
    host: process.env.DB_HOST || "localhost",
    dialect: "postgres",
    port: process.env.DB_PORT || 5432,
    logging: false, // Disable logging in test environment
    migrationStorageTableName: "migrations",
    dialectOptions: {
      ssl: {
        require: true, // Require SSL connection
      },
    },
  },
  production: {
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_DATABASE || "my_database_prod",
    host: process.env.DB_HOST || "localhost",
    dialect: "postgres",
    port: process.env.DB_PORT || 5432,
    logging: false, // Disable logging in production
    migrationStorageTableName: "migrations",
    dialectOptions: {
      ssl: {
        require: true, // Require SSL connection
        rejectUnauthorized: false, // Optional: For Heroku or cloud services
      },
    },
  },
};
