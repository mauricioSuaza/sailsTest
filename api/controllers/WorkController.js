/**
 * WorkController
 *
 * @description :: Server-side logic for managing Works
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	'new' : function(req, res){
		Pump.findOne(req.param('owner'), function foundPump(err, user) {
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

      company: req.param('company'),

      boss: req.param('boss'),

      time: req.param('time'),

			owner: req.param('owner'),

    }

    // Create a User with the params sent from
    // the sign-up form --> new.ejs
    Work.create(paramObj, function workCreated(err, work) {

      if (err) {
        console.log(err);
        req.session.flash = {
          err: err
        }
        return res.redirect('/work/new');
      }

      // res.json(work);
      res.redirect('/work/show/' + work.id);

    });
  },

  show: function(req, res, next) {
    Work.findOne(req.param('id'), function foundWork(err, work) {
      if (err) return next(err);
      if (!work) return next();

      // res.json(work);
      res.view({
        work: work
      });
    });
  },

  index: function(req, res, next) {
    Work.find(function foundWorks(err, works) {
      if (err) return next(err);

      res.view({
        works: works
      });
    });
  },

  edit: function(req, res, next) {

    Work.findOne(req.param('id'), function foundWork(err, work) {
      if (err) return next(err);
      if (!work) return next('work doesn\'t exist.');

      res.view({
        work: work
      });
    });
  },

  update: function(req, res, next) {

    var paramObj = {

      company: req.param('company'),

      boss: req.param('boss'),

      time: req.param('time'),

    }

    Work.update(req.param('id'), paramObj, function workUpdated(err) {
      if (err) {
        console.log(err);

        req.session.flash = {
          err: err
        }

        return res.redirect('/work/edit/' + req.param('id'));
      }

      res.redirect('/work/show/' + req.param('id'));
    });
  },

  destroy: function(req, res, next) {

    Work.findOne(req.param('id'), function foundWork(err, work) {
      if (err) return next(err);

      if (!work) return next('Work doesn\'t exist.');

      Work.destroy(req.param('id'), function workDestroyed(err) {
        if (err) return next(err);
    });

      res.redirect('/work');

    });
  }


};
