// const fs = require('fs')
// const chalk = require('chalk')

// const getNotes = function () {
//     return 'your notes....'
// }

// const  addnote = function(title,body){
//     const notes = loadNotes();
//     const duplicateNotes = notes.filter(function (note){
//         return note.title === title
//     })
//     if(duplicateNotes.length === 0){
//         notes.push({
//             title: title,
//             body: body
//         })
//         saveNotes(notes)
//     console.log('New note added!')   
//     }
//     else{
//         console.log('Note title taken!')
//     }
// }
// const removeNote = function(title){
//     // console.log(title)
//     const notes = loadNotes()
//     const notesToKeep = notes.filter(function(note){
//         return note.title !== title
//     })

//     if(notes.length>notesToKeep.length){
//             console.log(chalk.green.inverse("Note removed!"))
//     }
//     else{
//         console.log(chalk.red.inverse("No Note found!"))

//     }

//     saveNotes(notesToKeep)
// }


// const saveNotes = function(notes){
//     const dataJSON = JSON.stringify(notes)
//     fs.writeFileSync('notes.json',dataJSON)
// }

// const loadNotes = function(){
//     try{
//         const dataBuffer = fs.readFileSync('notes.json')
//         const dataJSON = dataBuffer.toString()
//         return JSON.parse(dataJSON)
//     }
//     catch(e){
//         return []
//     }
    
    
    
   
// }

// module.exports = {
//     getNotes :getNotes,
//     addnotes : addnotes,
//     removeNote : removeNote
// }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const fs = require('fs')
const chalk = require('chalk')
// const { title } = require('process')

const addnotes = function(a,c){
        const notes = loadNotes()
        const duplicateNotes = notes.filter((note)=> note.title === a)
        const duplicateNote = notes.find((note)=>note.title ===title)

        
        debugger

        if(duplicateNote === undefined){
            notes.push({
                title: a,
                body : c
            })
            saveNotes(notes)
            console.log(chalk.green.inverse('New note added!'))   
            }
        else{
            console.log(chalk.red.inverse('Note title taken!'))
        }
    }

const removeNote = function(a){
    const notes = loadNotes()
    const notesToKeep = notes.filter(function(note){
        return note.a !== a 
    })
    if(notes.length >notesToKeep.length){
        console.log(chalk.green.inverse("Note removed!"))
    }
    else{
        console.log(chalk.red.inverse("No Note found!"))
    }
    saveNotes(notesToKeep)
}

const loadNotes= ()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e){
        return []
    }
}
const listNotes = () =>{
    const notes = loadNotes()

    console.log(chalk.inverse('Your notes'))
    notes.forEach((notes )=> {
        console.log(notes.title)
    })
}
const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
} 

module.exports={
    addnotes: addnotes,
    removeNote: removeNote,
    listNotes: listNotes
}