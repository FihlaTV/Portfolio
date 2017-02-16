var keystone = require('keystone');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res),
		locals = res.locals;

	locals.data = {};
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	// Load other posts
	view.on('init', function(next) {

		var q = keystone.list('Home').model.findOne().where('state', 'published').populate({
			path: 'work',
			populate: {path: 'roles technologies'}
		});

		q.exec(function(err, results) {
			locals.data.home = results;
			next(err);
		});

	});


	// Render the view
	view.render('index');

};
