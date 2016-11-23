/**
 * CustomerController
 *
 * @description :: Server-side logic for managing customers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	'new' : function(req, res){
		res.view();
	},


	create: function(req, res) {

    var paramObj = {

      name: req.param('name'),

      state: req.param('state'),

      email: req.param('email'),

    }

    // Create a User with the params sent from
    // the sign-up form --> new.ejs
    Customer.create(paramObj, function customerCreated(err, customer) {

      if (err) {
        console.log(err);
        req.session.flash = {
          err: err
        }
        return res.redirect('/customer/new');
      }

      // res.json(user);
      res.redirect('/customer/show/' + customer.id);

    });
  },

	show: function(req, res, next) {
    Customer.findOne(req.param('id'), function foundUser(err, user) {
      if (err) return next(err);
      if (!user) return next();

      // res.json(user);
      res.view({
        user: user
      });
    });
  },


};
