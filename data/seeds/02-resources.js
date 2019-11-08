
exports.seed = function(knex) {
  return knex('resources').insert([
    {name: 'Mozilla Docs', description: 'Back end development materials'},
    {name: 'React tutorials', description: 'Front end development resources'},
    {name: 'Learn enough', description: 'Databases resources'},
    {name: 'DZone', description: 'Devops materials'},
  ]);
};
