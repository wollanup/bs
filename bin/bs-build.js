#! /usr/bin/env node
const shell = require("shelljs");
const program = require('commander');
const glob = require("glob");
const concat = require('concat-files');

program
	.version('1.0.0')
	// .command('bs-build [options] <directories...>')
	.usage('bs-build [options] <directories...>')
	.arguments('[options] <directories...>')
	.option('-o, --output', 'Destination directory')
	.option('-m, --multi', 'Treat each sub-folder as a package', function () {
		return true;
	})
	.parse(process.argv);

// src
let directories = program.args || [];
if (directories.length === 0) {
	directories = [shell.pwd().toString()]
}
// Create Multi Packages ?
let multi = program.multi || false;
// Output
let output = program.output || shell.pwd().toString();

// shell("uglify " + )

concat(directories, '/to/destination', function(err) {
	if (err) throw err
	console.log('done');
});
