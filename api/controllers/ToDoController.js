/**
 * ToDoController
 *
 * @description :: Server-side logic for managing Todoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    // index action method
    index: function(req, res) {
            Todo.find().exec(function(err, todos) {
                if(err) throw err;
                // Render view with found todos
                res.view('todo/index', {todos: todos});
            });
    },
    // new action method
    new: function(req, res) {
        // Render todo form
        res.view('todo/new');
    },
    // create action method
    create: function(req, res) {
            // Create a new todo using the Todo model
            Todo.create(req.body).exec(function(err, todo) {
                if(err) throw err;
                // Redirect if successful
                res.redirect('/');
            });
    },

};
