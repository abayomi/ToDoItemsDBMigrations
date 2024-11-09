"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("items", "userId", {
      type: Sequelize.UUID,
      allowNull: true, // If you want this field to be mandatory, otherwise set it to true
      references: {
        model: "users", // The name of the table being referenced (in this case, `users`)
        key: "userId", // The column in the referenced table (in this case, `id`)
      },
      onUpdate: "CASCADE", // This ensures the foreign key is updated if the referenced `user` is updated
      onDelete: "CASCADE", // This sets the `userId` to `NULL` if the referenced `user` is deleted
    });
    await queryInterface.addIndex("items", ["userId"]);
  },

  async down(queryInterface, Sequelize) {
    // Removing the `userId` column from the `items` table (this is for rollback)
    await queryInterface.removeColumn("items", "userId");
  },
};
