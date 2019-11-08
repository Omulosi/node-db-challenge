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
  let rows = db('projects');
  return rows;
}


function findById(id) {
  return db('projects')
    .where({ id })
    .first();
}


async function add(project) {
  const [id] = await db('projects').insert(project);
  return findById(id);
}

function remove(id) {
  return db('project')
    .where({ id })
    .del();
}

function update(changes, id) {
  return db('project')
    .where({ id })
    .update(changes, '*');
}
