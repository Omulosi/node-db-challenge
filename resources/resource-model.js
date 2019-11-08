
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

  let rows = db('resources');
  return rows;
}


function findById(id) {
  return db('resources')
    .where({ id })
    .first();
}


async function add(project) {
  const [id] = await db('resources').insert(project);
  return findById(id);
}

function remove(id) {
  return db('resources')
    .where({ id })
    .del();
}

function update(changes, id) {
  return db('resources')
    .where({ id })
    .update(changes, '*');
}
