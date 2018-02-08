//build.js: Configuration file for optimizing the Snip Object. 
/*
  1. snip.js is implemented with nodejs.
  2. snip.js is implemented as a backbonejs model.
  2. snip.js uses rsvp.js, backbone.js, and file.js as dependencies. 
*/ 
({
    baseUrl: ".",
    paths: {
	"rsvp": "lib/rsvp",
     	"file": "lib/file",
	"backbone": "lib/backbone"
     
    },
    exclude: [ "rsvp", "file", "backbone" ],
    name: "snip",
    out: "snip.min.js"
})
