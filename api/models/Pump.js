/**
 * Pump.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name : { type: 'string' },

    pumpCard : { type: 'string' },

    generation : { type: 'integer' },

    locationX : { type: 'integer' },

    locationY : { type: 'integer' },

    gender : { type: 'string',
               enum: ['M', 'F']
              },

    state : { type: 'string',
              enum: ['Alive', 'Dead']
            },

    works:{
              collection: 'work',
              via: 'owner',
          }

  }
};
