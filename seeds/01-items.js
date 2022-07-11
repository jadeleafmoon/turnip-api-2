/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("items").del();
  await knex("items").insert([
    {
      name: "Apple",
      price: 20,
      owner: "Bob",
      description: "Some description text.",
      imageUrl: "",
    },
    {
      name: "Banana",
      price: 10.5,
      owner: "Bob",
      description: "Some description text.",
      imageUrl: null,
      imageUrl: "",
    },
    {
      name: "Orange",
      price: 200.99,
      owner: "Enzo",
      description: "Some description text.",
      imageUrl: "",
    },
    {
      name: "Mango",
      price: 2,
      owner: "Enzo",
      description: "Some description text.",
      imageUrl: "",
    },
  ]);
};
