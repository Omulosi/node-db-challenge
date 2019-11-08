
exports.seed = function(knex) {
  return knex('projects').insert([
    {name: 'Front-end dev', description: 'Do front end dev', complete: false},
    {name: 'Data science', description: 'Data science concepts', complete: false},
    {name: 'writing', description: 'copywriting', complete: false},
    {name: 'Research', description: 'thesis', complete: false},
  ]);
};
