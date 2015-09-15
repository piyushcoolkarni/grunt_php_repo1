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
    classes:{ dir:'tests'},
    options:
    {
   bin :'vendor/bin/phpunit',
  colors:true,
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
     reportFile:'reports/cpdreport.xml',
     miniLines:4,
     miniTokens:69,
     verbose:true,
     resultFile:'reports/result.html'
      }

   }

 


};
 
grunt.initConfig(cfg);
 
grunt.loadNpmTasks("grunt-phplint");
grunt.loadNpmTasks("grunt-phploc");
grunt.loadNpmTasks("grunt-phpmd");
grunt.loadNpmTasks("grunt-phpunit"); 
grunt.loadNpmTasks("grunt-phpcpd");
 
grunt.registerTask("default", ["phplint:good","phpmd","phploc","phpunit","phpcpd"]);

}
