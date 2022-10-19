const add = require('./add')
const read = require('./read')
const write = require('./write')
const del = require('./delete')
const update = require('./update')

// get user input
const cmd = process.argv
const data = process.argv

var note = {}

if(cmd[2] == 'add') {
    // Build Object
    note = { 
        id: cmd[3],
        title: cmd[4],
        body: cmd[5]
    }
    // Get old note value
    var oldNote = read()
    // Add note to note.txt
    add(note, oldNote)
}

if(cmd[2] == 'read') {
    // Import present
    const present = require('./present')
    
    present(read())
}
if (cmd[2] === "delete") {
    const id = cmd[3]
    const oldnote = read()
    const del = require ('./delete')
    //delete an item from note array
    del(id,oldnote)
    console.log(read)
  }