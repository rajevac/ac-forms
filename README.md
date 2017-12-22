# Gulp Base

This document outlines the installation, dependencies, settings and standardized folder structure for our gulp base.

## Installation

- Copy over the gulpfile.js directory and package.json file into your project root folder.
- Using CMD or Terminal, change directory into your project root.
- If gulp is not already installed, run `npm install gulp` 
- Now run `npm install` this will install your 
   dependencies as defined in the package.json file.
- Build out your folder structure based on the criteria set below. On older projects if the
current structure must be maintained adjust the settings in config.json to match the new structure.


## Gulp Module Dependencies

- autoprefixer
- cleancss
- concat
- csscomb
- gulp
- imagemin
- jshint
- livereload
- minify-css
- notify
- plumber
- rename
- require-dir
- rev
- sass
- sourcemaps
- uglify
- util


## Folder Structure

The paths in our 'gulpfile.js/config.json' are set to this folder structure by default and
may be modified in the config settings when necessary such as older projects,
or when the content management system requires a different structure.

The source directory will store all files to be minified, concatenated, and optimized.
These files are for development and should not be included on the 
live server.

``` 
	|-- root
		|-- source
			|-- scss
				|-- libraries 
			|-- js
				|-- libraries
		|-- public
			|-- assets
				|-- css
				|-- js
			|-- content (user uploaded content)
```


## Gulp Configuration

We are using a modular task based gulp setup. Every task is separated into their own respective files and are referenced by the index file. There should be little to no need to modify the tasks themselves as all settings are set up in the config.json file.

### Config.json

The config file is broken down in the task runners under "gulp", and individual task settings under "tasks". Including CSS, JS, rev, imagemin, csscomb.

### Prefixes:

- Source - Source path to files to edit and run through gulp processes
- Destination/Dest - Destination path for compiled files
- Production - Variable names for the compiled files


## Gulp Tasks

A basic breakdown of gulp tasks in this setup, and their usage.

### scss

Lints, compiles, concats and minifies the scss.  Gulp watch and livereload also run with this task. IncludePath config will accept an array of files that can be referenced for scss includes/imports, which would include libraries like font-awesome, foundation-sites etc.

### scripts

Lints, concats and minifies the js.  Gulp watch and livereload also run with this task. The config setting jsLibrarySourceFiles will accept an array of js library files to be concatted and minified. 

### sourcemaps

Both scss and js tasks have a sourcemaps configuration to create external sourcemaps and reference them in the compiled and minified files. External sourcemaps are preferrable as inline sourcemaps can be viewed as a non-minified file by some evaluators like Google Page Speed Insights.

### rev

Renames production files adding a hash so the new names are unique. This guarantees the delivery of latest files to the browser whenever changes are made.
In order to get the revved names in the templates, you need to install the  CraftCMS Asset Rev plugin
(https://github.com/clubstudioltd/craft-asset-rev) and set up its config file (/craft/config/assetrev.php).

```
<?php
return array(
	'*' => array(
		'manifestPath' => '../public/manifest.json',
		'assetsBasePath' => '../public/',
	),
);
```

### imagemin

Optimizes jpg, png, gif, and svg images. This helps to decrease load times and page weight. Also removes unecessary markup that often conflicts with css manipulation of the svg, as well adding extra file weight.

### csscomb

Progamatically re-enforces the coding standards set at Barrel Strength Design. Running this task will "comb" the scss files and make updates that match the csscomb.json config file, allowing every developer to code however they want as this task will bring it to standard.
. These changes include property ordering, general property value syntax, multi-selector format, line endings and more. Please check out the config file and gulp-csscomb resource if you wish to learn more (https://www.npmjs.com/package/gulp-csscomb). 

