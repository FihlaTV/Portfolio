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

		var q = keystone.list('Work').model.find().where('state', 'published').populate('roles technologies').limit('6');

		q.exec(function(err, results) {
			locals.data.work = results;
			console.log(results[0].image);
			next(err);
		});

	});

	
	// Render the view
	view.render('index');
	
};
