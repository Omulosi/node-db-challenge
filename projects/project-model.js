const knex = require('knex');
const db = require('../data/db-config.js');

module.exports = {
  find,
  findById,
  findProjectTasks,
  add,
  remove,
  update,
};

function updateCompleteField(arr) {
  arr.map(task => task.complete = Boolean(task.complete))  
}

async function find() {
  let rows = await db('projects');
  updateCompleteField(rows);
  return rows;
}

function findProjectTasks(project_id) {
  return db('tasks')
    .join('projects', 'tasks.project_id', 'projects.id')
    .select('tasks.id', 'tasks.description','tasks.notes', 'tasks.complete')
    .where('project_id', project_id);
}

async function findById(id) {
  try {
    let tasks =  await findProjectTasks(id);
    updateCompleteField(tasks);
    let project = await db('projects')
      .where({ id })
      .first();

    project['tasks'] = tasks;
    return project;
  } catch(error) {
    throw error;
  }
}


async function add(project) {
  const [id] = await db('projects').insert(project);
  return findById(id);
}

function remove(id) {
  return db('projects')
    .where({ id })
    .del();
}

async function update(changes, id) {
  let projetId =  await db('projects')
    .where({ id })
    .update(changes);

  return findById(projetId);
}
