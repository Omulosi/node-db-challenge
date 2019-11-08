const knex = require('knex');
const db = require('../data/db-config.js');

module.exports = {
  find,
  findById,
  add,
  remove,
  update,
};

function find() {
  let rows = db('tasks')
    .join('projects', 'tasks.project_id', 'projects.id')
    .select(
          'tasks.id', 
      'tasks.description', 
      'tasks.notes',
      'tasks.complete', 
      'projects.name as projet_name', 
      'projects.description as project_description'
    );
  return rows;
}


function findById(id) {
  return db('tasks')
    .where({ id })
    .first();
}


async function add(project) {
  const [id] = await db('tasks').insert(project);
  return findById(id);
}

function remove(id) {
  return db('tasks')
    .where({ id })
    .del();
}

function update(changes, id) {
  return db('tasks')
    .where({ id })
    .update(changes, '*');
}
