
exports.up = function(knex) {
  return knex.schema.createTable("location-categories", table => {
    table.increments();
    table.integer("location_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("locations");
    table.string("location_category")
        .notNullable();
      
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("location-categories");
};
