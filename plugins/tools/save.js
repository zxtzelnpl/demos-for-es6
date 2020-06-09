const fs = require('fs')

const save = (name, data)=>{
  fs.writeFile(name, data, function(err) {
    if(err) {
      throw err
    }
  })
}

module.exports = save