module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'css/app.css' : 'sass/master.scss'
				}
			}
		},
		concat: {
			options: {
				separator: ';',
			},
			dist: {
				src: ['js/jquery-2.2.1.min.js', 'js/CSSPlugin.min.js', 'js/Draggable.js','js/ThrowPropsPlugin.min.js', 'js/TweenLite.min.js'],
				dest: 'js/plugins.js',
			},
		},
		uglify: {
    	my_target: {
      	files: {
        	'js/plugins.min.js': ['js/plugins.js']
      	}
    	}
  	},
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default',['watch']);
}
