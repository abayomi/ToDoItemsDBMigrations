"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      userId: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4, // Automatically generates a UUIDv4
      },
      userEmail: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      userEmailVerifiedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      userPassword: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: false,
      },
      userPasswordResetToken: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
        unique: false,
      },
      userSalt: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
        unique: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      deletedAt: {
        type: Sequelize.DATE, // This is the column that tracks soft deletion
        allowNull: true, // Allow NULL so that it won't be set unless the record is "soft-deleted"
        defaultValue: null, // Default to NULL
      },
    });
    //   // Step 2: Alter the table to use hash partitioning on the 'userId' column
    //   await queryInterface.sequelize.query(`
    //     ALTER TABLE users
    //     PARTITION BY HASH (userId);
    //   `);

    //   // Step 3: Create partitions for the hash ranges
    //   await queryInterface.sequelize.query(`
    //     CREATE TABLE users_p0 PARTITION OF users
    //     FOR VALUES WITH (MODULUS 2, REMAINDER 0);
    //   `);

    //   await queryInterface.sequelize.query(`
    //     CREATE TABLE users_p1 PARTITION OF users
    //     FOR VALUES WITH (MODULUS 2, REMAINDER 1);
    //   `);

    //   await queryInterface.sequelize.query(`
    //     ALTER TABLE users_p0 ADD CONSTRAINT users_p0_pk PRIMARY KEY (userId);
    //   `);

    //   await queryInterface.sequelize.query(`
    //     ALTER TABLE users_p1 ADD CONSTRAINT users_p1_pk PRIMARY KEY (userId);
    //   `);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};
