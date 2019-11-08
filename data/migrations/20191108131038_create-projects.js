
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
      tbl.increments();
      tbl.string('name').notNullable();
      tbl.text('description');
      tbl.boolean('complete').defaultTo(false).notNullable();
    })
    .createTable('tasks', tbl => {
      tbl.increments();
      tbl.text('description').notNullable();
      tbl.text('notes');
      tbl.boolean('complete').defaultTo(false).notNullable();
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
    .createTable('resources', tbl => {
      tbl.increments();
      tbl.string('name').notNullable();
      tbl.text('description');
    })
    .createTable('project_resources', tbl => {
      tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
      tbl.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resources')

      tbl.primary(['project_id', 'resource_id']);
        })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects');
};
