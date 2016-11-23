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
	}


};
