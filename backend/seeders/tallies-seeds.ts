module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Tallies",
      [
        {
          value: 1,
          userId: 1,
          category: "attendence",
          note: "thanks for attending!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 2,
          userId: 1,
          category: "attendence",
          note: "thanks for attending!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Tallies", null, {});
  },
};
