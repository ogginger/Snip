//Snip.js: Data Logic for the Snip model.

/* Snip is used for creating or updating files with templated content. */

define([
  "rsvp",
  "backbone",
  "file",
  "Functions/log",
	"render"
], function(
  rsvp,
  backbone,
  file,
  log,
	render
) {
  return backbone.Model.extend({
    "initialize": function() {
      log("Snip initialized successfully!");
      
    },
    
    "defaults": {
      "Dir": "",
      "Snippets": {}
    },

	"render": render,
    
    "snip": function( Input ) {
      var xSnip = this;
      var xSnippets = xSnip.get("Snippets");
      var sDir = xSnip.get("Dir");
      var bDebug = false;
      
      return new rsvp.Promise(function( resolve, reject ) {
        var sSnippet = xSnippets[ Input ];
        
        if ( sSnippet === undefined ) {
          reject({ "message": "Error: That Snippet is unknown." });
        }
        log( "Snippet: " + sSnippet, bDebug );
          
        var sFileName = sDir + sSnippet;
        log( "FileName: " + sFileName , bDebug );
        file.get( sFileName ).then(function( sFile ) {
          resolve( sFile );
        }).catch(function( error ) {
          reject( error );
        });
      });
    }
    
    
  });
});
