/**
 * PumpController
 *
 * @description :: Server-side logic for managing Pumps
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
  'new': function(req,res){
    res.view();    
  },

  create: function(req, res) {

    var paramObj = {

      name: req.param('name'),

      pumpCard: req.param('pumpCard'),

      generation: req.param('generation'),

      locationX: req.param('locationX'),

      locationY: req.param('locationY'),

      gender: req.param('gender'),

      state: req.param('state'),

    }

    // Create a User with the params sent from 
    // the sign-up form --> new.ejs
    Pump.create(paramObj, function pumpCreated(err, pump) {

      if (err) {
        console.log(err);
        req.session.flash = {
          err: err
        }
        return res.redirect('/pump/new');
      }

      // res.json(pump);
      res.redirect('/pump/show/' + pump.id);

    });
  },

  show: function(req, res, next) {
    Pump.findOne(req.param('id'), function foundPump(err, pump) {
      if (err) return next(err);
      if (!pump) return next();

      // res.json(pump);
      res.view({
        pump: pump
      });
    });
  },

  index: function(req, res, next) {
    Pump.find(function foundPumps(err, pumps) {
      if (err) return next(err);
      
      res.view({
        pumps: pumps
      });
    });
  },

  edit: function(req, res, next) {

    Pump.findOne(req.param('id'), function foundPump(err, pump) {
      if (err) return next(err);
      if (!pump) return next('pump doesn\'t exist.');

      res.view({
        pump: pump
      });
    });
  },

  update: function(req, res, next) {

    var paramObj = {

      name: req.param('name'),

      pumpCard: req.param('pumpCard'),

      generation: req.param('generation'),

      locationX: req.param('locationX'),

      locationY: req.param('locationY'),

      gender: req.param('gender'),

      state: req.param('state'),

    }

    Pump.update(req.param('id'), paramObj, function pumpUpdated(err) {
      if (err) {
        console.log(err);

        req.session.flash = {
          err: err
        }

        return res.redirect('/pump/edit/' + req.param('id'));
      }

      res.redirect('/pump/show/' + req.param('id'));
    });
  },

  destroy: function(req, res, next) {

    Pump.findOne(req.param('id'), function foundPump(err, pump) {
      if (err) return next(err);

      if (!pump) return next('Pump doesn\'t exist.');

      Pump.destroy(req.param('id'), function pumpDestroyed(err) {
        if (err) return next(err);
    });        

      res.redirect('/pump');

    });
  }
 

};

