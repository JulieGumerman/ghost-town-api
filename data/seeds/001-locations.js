
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
        {id: 1, location: 'Clearwater', description: "A town of around 800; a good location to sleep and get gas", longitude: "-97.501389", latitude: "37.505556"},
        {id: 2, location: 'Barnard', description: "I've never been there, but it seems like a cool place", longitude: "-98.043056", latitude: "39.189167"},
        {id: 3, location: 'Dunlap', description: "A safehaven for freedmen after the Civil War, it boasts the remains of a once-thriving downtown", longitude: "-96.366111", latitude: "38.575833"}
      ]);
    });
};
