/**
 * StockController
 *
 * @description :: Server-side logic for managing stocks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	'new' : function(req, res){
		Customer.findOne(req.param('owner'), function foundCustomer(err, user) {
      if (err) return next(err);
      if (!user) return next();
      // res.json(user);
      res.view({
        user: user
      });
    });
	},

	create: function(req, res) {

		var paramObj = {

			symbol: req.param('symbol'),

			number_of_shares: req.param('number_of_shares'),

			owner: req.param('owner'),

		}

		// Create a User with the params sent from
		// the sign-up form --> new.ejs
		Stock.create(paramObj, function stockCreated(err, stock) {

			if (err) {
				console.log(err);
				req.session.flash = {
					err: err
				}
				return res.redirect('/stock/new');
			}

			// res.json(user);
			res.redirect('/customer/show/' + stock.owner);

		});
	}


};
