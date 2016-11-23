/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

//A user have many todos
module.exports = {

  attributes: {

    name : { type: 'string' },

    age : { type: 'integer' },

    email : { type: 'email' },

    
    // Add a reference to todos
    todos: {
     collection: 'todo',
     via: 'pub'
    }
  }
};
