
exports.up = function(knex) {
    return knex.schema
    .createTable('person', function (table) {
       table.increments('id');
       table.string('email', 255).notNullable().unique();
       table.string('first_name', 255).notNullable();
       table.string('last_name', 255).notNullable();
       table.timestamps(true, true);
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('person');
};
