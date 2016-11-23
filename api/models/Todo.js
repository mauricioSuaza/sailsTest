/**
 * Todo.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
//a todo belongs to a user
module.exports = {

  attributes: {

    owner : { type: 'string' },

    text : { type: 'string' },

    pub: {
     model: 'user'
   }
  }
};
