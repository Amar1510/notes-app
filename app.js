
const notes = require('./notes.js')

// const { require } = require("yargs");

// const { describe, demandOption } = require('yargs')
const yargs = require('yargs')
const { describe } = require('yargs')

//customize yargs version
yargs.version('1.1.0')

//create add command
// yargs.command({
//     command: 'add',
//     describe: 'Add a new note',
//     builder:{
//         title:{
//             describe: 'Note title',
//             demandOption: true,
//             type: 'string'
//         }, 
//         body:{
//             describe: 'Note body',
//             demandOption: true,
//             type: 'string' 

//         }
//     },
//     handler: function  (argv) {
//         notes.addnotes(argv.title,argv.body)
//     }

// })

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title:{
            describe:"Note title",
            demandOption: true,
            type: "string"
        }
    },
    handler: function  (argv) {
        notes.removeNote(argv.title)
    }

}) 


yargs.command({
    command: 'list',
    describe: 'list all nodes',
    handler : function() {
        notes.listNotes()
    }
}) 

yargs.command({
    command: 'read',
    describe: 'read all the notes',
    handler: function(){
        console.log("reading all notes!")
    }
})
 
 

// console.log(yargs.argv)

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// yargs.command({
//     command: 'add',
//     describe: 'add notes',
//     builder:{
//         title:{
//             describe : 'Note title',
//             demandOption: true,
//             type:'string'
//         },
//         body:{
//             describe: 'Note body',
//             demandOption: true,
//             type: 'string' 
//         }
//     },
//     handler: function(argv){
//         notes.addnotes(argv.title,argv.body)
//     }
// })
yargs.parse()