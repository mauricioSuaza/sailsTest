/**
 * Work.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    company : { type: 'string' },

    boss : { type: 'string' },

    time : { type: 'integer' },

    owner: {
      model: 'pump',
      required: 'true'
    }
  }
};
