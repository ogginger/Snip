//build.js: Configuration file for optimizing the Snip Object. 
/*
  1. snip.js is implemented with nodejs.
  2. snip.js is implemented as a backbonejs model.
  3. snip.js uses rsvp.js, backbone.js, and file.js as dependencies.
	4. Backbone.js requires underscore and nodejs's implementation of jquery because the server does not have a DOM.
	5. file.js uses nodejs's fs file manager as a dependency.
*/ 
({
    baseUrl: ".",
    paths: {
			"rsvp": "lib/rsvp",
     	"file": "lib/file",
			"backbone": "lib/backbone",
			"underscore": "lib/underscore",
			"jquery": "empty:",
			"fs": "empty:"
    },
    exclude: [ "rsvp", "file", "backbone", "underscore", "jquery", "fs" ],
    name: "Snip",
    out: "snip.min.js"
})
