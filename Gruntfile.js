module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		// jshint: {
		// 	files: ['Gruntfile.js', 'src/Bs.js'],
		// 	options: {
		// 		globals: {
		// 			jQuery: true
		// 		}
		// 	}
		// },
		concat: {
			dist: {
				src : [
					'src/Bs.js',
					'src/Lang.js',
					'src/Api.js',
					'src/Template.js',
					'src/Collection.js',
					'src/DataBinder.js',
					'src/Model.js',
					'src/Response.js',
					'src/Storage.js',
					'src/Stylesheet.js',
					'src/View/View.js',
					'src/View/Module/Module.js',
					'src/View/Modal/Modal.js',
					'src/View/Modal/Alert/Alert.js',
					'src/View/Loading/Loading.js',
					'src/View/Collection/Collection.js',
					'src/View/Collection/Error/Error.js',
					'src/View/Collection/Empty/Empty.js',
					'src/View/Collection/Item/Item.js',
					'src/View/Collection/Item/Edit/Edit.js',
					'src/View/Collection/Item/Restore/Restore.js',
					'src/View/Alert/Alert.js',
					'src/View/Alert/Toast/Toast.js',
					'src/View/Alert/Toast/Toast.js',
					'src/Util/Browser.js',
					'src/Util/CallbackBuilder.js',
					'src/Util/UrlParser.js',
				],
				dest: 'dist/js/<%= pkg.name %>.js'
			}
		},

		// babel: {
		// 	options: {
		// 		sourceMap: true,
		// 		presets: ['env']
		// 	},
		// 	dist: {
		// 		files: {
		// 			'dist/js/bs-browser.js': 'src/Api.js'
		// 		}
		// 	}
		// },


		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},
			dist: {
				files: {
					'dist/js/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
				}
			}
		},

	});


	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	// grunt.loadNpmTasks('grunt-babel');

	grunt.registerTask('default', ['concat', 'uglify']);

};
