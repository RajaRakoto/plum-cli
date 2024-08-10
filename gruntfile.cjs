/**
 * @description: gruntfile for plum cli
 * @requires: grunt | load-grunt-tasks | grunt-contrib-compress | grunt-shell | grunt-contrib-htmlmin | grunt-contrib-cssmin | grunt-contrib-uglify | grunt-contrib-imagemin
 */
module.exports = (grunt) => {
	require("load-grunt-tasks")(grunt);

	// all files destination (example)
	const backupsDestination = "./backups/";

	// node-glob syntax
	const includeAllFiles = ["**/*", ".*/**/*", "**/.*", "**/.*/**/*"];

	// minify config utility
	function minifyWebConfig(type, folder) {
		return {
			expand: true,
			cwd: `dist/${folder}`,
			src: [`**/*.${type}`, `!**/*.min.${type}`],
			dest: `dist/${folder}`,
			ext: `.${type}`,
		};
	}

	function minifyImgConfig(folder) {
		return {
			expand: true,
			cwd: folder,
			src: ["**/*.{png,jpg,gif,svg}"],
			dest: `dist/${folder}`,
		};
	}

	/**
	 * ~ ALL GRUNT PLUGINS CONFIG ~
	 */
	grunt.initConfig({
		pkg: grunt.file.readJSON("./package.json"),
		/**
		 * Compress files and folders (incremental backup)
		 */
		compress: {
			main: {
				options: {
					archive: `${backupsDestination}main.tar.gz`,
				},
				files: [{ src: ["./*", "./.*"] }],
				filter: "isFile",
			},
			github: {
				options: {
					archive: `${backupsDestination}github.tar.gz`,
				},
				expand: true,
				cwd: "./.github/",
				src: includeAllFiles,
				dest: "github",
			},
			apps: {
				options: {
					archive: `${backupsDestination}apps.tar.gz`,
				},
				expand: true,
				cwd: "./apps/",
				src: includeAllFiles,
				dest: "apps",
			},
			docs: {
				options: {
					archive: `${backupsDestination}docs.tar.gz`,
				},
				expand: true,
				cwd: "./docs/",
				src: includeAllFiles,
				dest: "docs",
			},
			examples: {
				options: {
					archive: `${backupsDestination}examples.tar.gz`,
				},
				expand: true,
				cwd: "./examples/",
				src: includeAllFiles,
				dest: "examples",
			},
			fonts: {
				options: {
					archive: `${backupsDestination}fonts.tar.gz`,
				},
				expand: true,
				cwd: "./fonts/",
				src: includeAllFiles,
				dest: "fonts",
			},
			scripts: {
				options: {
					archive: `${backupsDestination}scripts.tar.gz`,
				},
				expand: true,
				cwd: "./scripts/",
				src: includeAllFiles,
				dest: "scripts",
			},
			src: {
				options: {
					archive: `${backupsDestination}src.tar.gz`,
				},
				expand: true,
				cwd: "./src/",
				src: includeAllFiles,
				dest: "src",
			},
			tests: {
				options: {
					archive: `${backupsDestination}tests.tar.gz`,
				},
				expand: true,
				cwd: "./tests/",
				src: includeAllFiles,
				dest: "tests",
			},
			tmp: {
				options: {
					archive: `${backupsDestination}tmp.tar.gz`,
				},
				expand: true,
				cwd: "./tmp/",
				src: includeAllFiles,
				dest: "tmp",
			},
		},
		/**
		 * Copy dist deps
		 */
		shell: {
			copyDistDeps: {
				command: [
					"cp -r apps dist",
					"cp -r docs dist",
					"cp -r scripts dist",
					"cp -r fonts dist",
				].join("&&"),
			},
		},
		/**
		 * Minify HTML, CSS, JS, Images (png, jpg, gif, svg) from apps and docs to dist
		 */
		htmlmin: {
			dist: {
				files: [
					minifyWebConfig("html", "apps"),
					minifyWebConfig("html", "docs"),
				],
			},
		},
		cssmin: {
			dist: {
				files: [minifyWebConfig("css", "apps"), minifyWebConfig("css", "docs")],
			},
		},
		uglify: {
			dist: {
				files: [minifyWebConfig("js", "apps"), minifyWebConfig("js", "docs")],
			},
		},
		imagemin: {
			dynamic: {
				files: [minifyImgConfig("apps"), minifyImgConfig("docs")],
			},
		},
	});

	// all grunt register tasks
	grunt.registerTask("backup", [
		"compress:main",
		"compress:github",
		"compress:apps",
		"compress:docs",
		"compress:examples",
		"compress:fonts",
		"compress:scripts",
		"compress:src",
		"compress:tests",
		"compress:tmp",
	]);

	grunt.registerTask("copy", ["shell:copyDistDeps"]);

	grunt.registerTask("minify", ["htmlmin", "cssmin", "uglify", "imagemin"]);

	// all tasks lists
	const myTasksNames = ["backup", "copy", "minify"];

	// tasks status (description)
	const myTasksStatus = [
		"compress: main | github | apps | docs | examples | fonts | scripts | src | tests | tmp",
		"copy: apps | docs | scripts | fonts > dist",
		"minify: html | css | js | images",
	];

	// default tasks
	grunt.registerTask("default", () => {
		console.log(
			"\nHere are the lists of plugins (tasks) you can run with grunt:".green,
		);

		/**
		 *
		 * @param {string} taskTitle - task title (Eg: basics tasks)
		 * @param {array} taskNames - task names (Eg: basicsTaskNames)
		 * @param {array} taskStatus - task status (Eg: basicsTaskStatus)
		 * @param {string} taskTheme - colors of theme (Eg: black ,red ,green ,yellow ,blue ,magenta ,cyan ,white ,gray ,grey)
		 */
		function getTaskResume(taskTitle, taskNames, taskStatus, taskTheme) {
			switch (taskTheme) {
				case "cyan":
					console.log(`\n${taskTitle}`.cyan.inverse.bold);
					taskNames.forEach((taskNames, index) => {
						console.log(`${taskNames.cyan} -> ${taskStatus[index]}`);
					});
					break;
				case "magenta":
					console.log(`\n${taskTitle}`.magenta.inverse.bold);
					taskNames.forEach((taskNames, index) => {
						console.log(`${taskNames.magenta} -> ${taskStatus[index]}`);
					});
					break;
				case "yellow":
					console.log(`\n${taskTitle}`.yellow.inverse.bold);
					taskNames.forEach((taskNames, index) => {
						console.log(`${taskNames.yellow} -> ${taskStatus[index]}`);
					});
					break;
				case "blue":
					console.log(`\n${taskTitle}`.blue.inverse.bold);
					taskNames.forEach((taskNames, index) => {
						console.log(`${taskNames.blue} -> ${taskStatus[index]}`);
					});
					break;
				default:
					null;
					break;
			}
		}

		// task resume
		getTaskResume(
			"== PLUM CLI TASKS ==",
			myTasksNames,
			myTasksStatus,
			"magenta",
		);
	});
};
