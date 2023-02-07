exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex.raw('TRUNCATE TABLE "person" CASCADE')
  await knex('person').insert([
    { email: 'doni@gmail.com', first_name: 'doni', last_name: 'yen' },
    { email: 'mjafar@gmail.com', first_name: 'Jafar', last_name: 'Abdi' }
  ]);
};
