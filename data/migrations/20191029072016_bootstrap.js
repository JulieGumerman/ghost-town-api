
exports.up = function(knex) {
  return knex.schema.createTable("locations", table => {
      table.increments();
      table.string("location").notNullable();
      table.text("description").notNullable();
      table.string("longitude").notNullable();
      table.string("latitude").notNullable();

  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("locations");
};
