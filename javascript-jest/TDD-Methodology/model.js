export default class Model {

    constructor(data = []) {
      this.$collection = []

      if(data.length){
          this.record(data)
      }
    }
  
    record(data) {     //takes value and record it
        // add functionality to add id if there is none
        const primaryKey = 'id'
        const mappedData = data.map(entry => {
          if(entry[primaryKey]) return entry
          entry[primaryKey] = Date.now()
          return entry
        })
        this.$collection.push(...mappedData)
    }

    all() {             // get all item in collection
        //return only copy of the array so the original array isnot changeable
        return this.$collection.map(entry => Object.assign({}, entry))
    }     

    update(key, data) {     //update a specific value
        const primaryKey = 'id'
        const entryIndex = this.$collection.findIndex(entry => entry[primaryKey] === key)
        
        if (entryIndex < 0) return false
        
        this.$collection.splice(
            entryIndex,
            1,
            Object.assign(this.$collection[entryIndex], data)
          )
    }

    find(value) {       // find a specific value
        const primaryKey = 'id'
        const entry =  this.$collection.find(entry => entry[primaryKey] === value)
        
        return entry ? Object.assign({}, entry) : null //make sure to always return the copy so its ucnchageable
    }
  }