
exports.seed = function(knex) {
  return knex('tasks').insert([
    {description: 'complete express tutorial', notes: '', complete: false, project_id: 1},
    {description: 'learn database migration using knex', notes: '', complete: false, project_id: 2},
    {description: 'learn how to use express middleware', notes: '', complete: false, project_id: 3},
    {description: 'learn how to use mogodb tutorial', notes: '', complete: false, project_id: 4},
  ]);
};
