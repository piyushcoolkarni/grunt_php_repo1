module.exports=function(grunt){


var dbconfig=require('./config.json')['dbconfig'];
console.log("in grunt file");

var cfg = 
{
   dbconfig:dbconfig,   

    phplint:
	{
		options:
		{
		  phpCmd:'<%= dbconfig.cmdpath %>',
		  
		  phpArgs: {
                "-l": null
            },
          
		  spawnLimit: 10
		  	  
		  
		},
		
        good: ['<%= dbconfig.lintgood %>']
        
    },
 phploc:
{
default :
  {
   dir: '<%= dbconfig.locdir %>'
  },
   options:
    {
     bin:'<%= dbconfig.locbin %>',
     names:'<%= dbconfig.locnames %>',
     logCSV:'reports/reportloc.csv',
     countTests:true,
     quite:false,
     progress:true,
     verbose:true,
     ansi:true,
     verbose:true,
     logXML:'reports/reportlocXml.xml' 
    }

}  ,

  phpmd : 
    {
    application:
            {
            dir:'<%= dbconfig.mddir %>'
            },
      options:
           {
           bin:'<%= dbconfig.mdbin %>',
           rulesets:'codesize',
           suffixes:'.php',
           reportFile:'./reports/reportmd',
           reportFormat:'html'
           }


    },

   phpunit:
    {
    classes:{ dir:'tests/'},
    options:
    {
   bin :'vendor/bin/phpunit',
  colors:true,
  bootstrap:'build/phpunit.xml',
  logJunit:'./reports/junit.log',
  logJson:'./reports/json.log',
   coverageClover:'./reports/coverage.log'
    }
    },

phpcpd: 
   {
   application:
     {
     dir:'ecomm_project'
      },
    options:
      {
     quite:false,
     bin:'vendor/bin/phpcpd',
     names:'ecomm_project/*.php',
     reportFile:'reports/cpdreport.xml',
     miniLines:4,
     miniTokens:69,
     verbose:true,
     resultFile:'reports/result.html'
      }

   },

 jshint:
  
  {
   all:['Gruntfile.js','ecomm_project/js/*.js'],
  options:
   {
   reporter:require('jshint-html-reporter'),
   reporterOutput:'reports/jshint-report.html',
   curly:true,
   eqnull:true,
   browser:true,
   undef:true,
   globals:{jQuery:true}
   }
   
}

 




};
 
grunt.initConfig(cfg);
 
grunt.loadNpmTasks("grunt-phplint");
grunt.loadNpmTasks("grunt-phploc");
grunt.loadNpmTasks("grunt-phpmd");
grunt.loadNpmTasks("grunt-phpunit"); 
grunt.loadNpmTasks("grunt-phpcpd");
grunt.loadNpmTasks("grunt-contrib-jshint");
 
grunt.registerTask("default", ["phplint:good","phpmd","phploc","phpunit","phpcpd"]);

grunt.registerTask("jstasks",["jshint"]);

}
