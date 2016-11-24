/**
 * DistanceController
 *
 * @description :: Server-side logic for managing distances
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	distMeter : function(req,res, next){
		Pump.find(function foundPumps(err, pumps) {
      if (err) return next(err);

      res.view({
        pumps: pumps
      });
    });
  }

};
