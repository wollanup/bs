module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		// jshint: {
		// 	files: ['Gruntfile.js', 'src/Bs/Bs.js'],
		// 	options: {
		// 		globals: {
		// 			jQuery: true
		// 		}
		// 	}
		// },

		handlebars: {
			compile: {
				options: {
					namespace  : 'Handlebars.templates',
					processName: function (filePath) {
						return filePath.replace(/src\/(.*)(\.handlebars)/, '$1');
					}
				},
				files  : {
					'dist/js/tmp/templates.js': ['src/Bs/**/*.handlebars'],
				}
			}
		},

		concat: {
			js : {
				src : [
					'dist/js/tmp/templates.js',
					'src/Bs/Bs.js',
					'src/Bs/Lang.js',
					'src/Bs/Api.js',
					'src/Bs/Template.js',
					'src/Bs/Collection.js',
					'src/Bs/DataBinder.js',
					'src/Bs/Model.js',
					'src/Bs/Response.js',
					'src/Bs/Storage.js',
					'src/Bs/Stylesheet.js',
					'src/Bs/View/View.js',
					'src/Bs/View/Module/Module.js',
					'src/Bs/View/Modal/Modal.js',
					'src/Bs/View/Modal/Alert/Alert.js',
					'src/Bs/View/Loading/Loading.js',
					'src/Bs/View/Collection/Collection.js',
					'src/Bs/View/Collection/Error/Error.js',
					'src/Bs/View/Collection/Empty/Empty.js',
					'src/Bs/View/Collection/Item/Item.js',
					'src/Bs/View/Collection/Item/Edit/Edit.js',
					'src/Bs/View/Collection/Item/Restore/Restore.js',
					'src/Bs/View/Alert/Alert.js',
					'src/Bs/View/Alert/Toast/Toast.js',
					'src/Bs/View/Alert/Toast/Toast.js',
					'src/Bs/Util/Browser.js',
					'src/Bs/Util/CallbackBuilder.js',
					'src/Bs/Util/UrlParser.js',
					'dist/js/tmp/lng/*.js'
				],
				dest: 'dist/js/bs.js'
			},
			css: {
				src : [
					'src/Bs/View/Alert/Toast/toast.css',
					'src/Bs/View/Loading/loading.css',
					'src/Bs/View/Modal/modal.css',
					'src/Bs/View/Modal/Alert/alert.css',
				],
				dest: 'dist/css/bs.css'
			}
		},

		// babel: {
		// 	options: {
		// 		sourceMap: true,
		// 		presets: ['env']
		// 	},
		// 	dist: {
		// 		files: {
		// 			'dist/js/bs-browser.js': 'src/Bs/Api.js'
		// 		}
		// 	}
		// },

		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},
			dist   : {
				files: {
					'dist/js/bs.min.js': ['<%= concat.js.dest %>']
				}
			}
		},

		cssmin: {
			options: {
				compatibility         : 'ie8',
				keepSpecialComments   : '*',
				sourceMap             : true,
				sourceMapInlineSources: true,
				advanced              : false
			},
			core   : {
				src : 'dist/css/bs.css',
				dest: 'dist/css/bs.min.css'
			},
		},

		i18next: {
			dist: {
				src : ['src/Bs/**/lng'],
				dest: 'dist/js/tmp/lng'
			}
		},
		clean  : {
			dist: {
				src: [
					"dist/js/tmp",
				]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-handlebars');

	// grunt.loadNpmTasks('grunt-contrib-i18next');
	// grunt.loadNpmTasks('grunt-babel');

	grunt.registerMultiTask('clean', 'Remove temp files', function () {
		let len = this.filesSrc.length;
		for (let x = 0; x < len; x++) {
			if (grunt.file.exists(this.filesSrc[x])) {
				grunt.file.delete(this.filesSrc[x]);
			}
		}
	});

	grunt.registerMultiTask('i18next', 'Add translation bundles to Bs.Lang', function () {
		let that = this,
			len = this.filesSrc.length,
			lang,
			outputDir,
			outputFile,
			originalFile,
			destFile,
			merged;

		// If output dir doesn't exists, then create it
		if (!grunt.file.exists(that.data.dest)) {
			grunt.file.mkdir(that.data.dest);
		}

		let iterateTroughFiles = function (abspath, rootdir, subdir, filename) {
			outputDir = that.data.dest;
			lang = filename.replace(/(\w+).json/, '$1');
			outputFile = outputDir + '/' + lang + '.js';
			let ns = abspath.replace(/src\/(.*)(\/\w+)/, '$1');
			ns = ns.replace(/\/lng\.json/, '');

			originalFile = grunt.file.readJSON(abspath);
			originalFile = '+function(){Bs.Lang.addResourceBundle(\'' + lang + '\', \'' + ns + '\', ' + JSON.stringify(originalFile) + ')}();';
			// if dest file doesn't exist, then just copy it.
			if (!grunt.file.exists(outputFile)) {
				grunt.file.write(outputFile, originalFile);
			} else {
				// read source file, read dest file. merge them. write it in dest file
				destFile = grunt.file.read(outputFile);

				merged = destFile + '\n' + originalFile;

				grunt.file.write(outputFile, merged);
			}
		};

		grunt.file.recurse(that.data.dest, function (abspath) {
			grunt.file.delete(abspath);
		});

		for (let x = 0; x < len; x++) {
			grunt.file.recurse(this.filesSrc[x], iterateTroughFiles);
		}
	});

	grunt.registerTask('default', ['i18next', 'handlebars', 'concat', 'uglify', 'cssmin', 'clean']);

};
