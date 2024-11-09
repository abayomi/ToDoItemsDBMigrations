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
        defaultValue: Sequelize.NOW,
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
        allowNull: false,
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
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};
