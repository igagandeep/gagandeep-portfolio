const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  tech: {
    type: [String],
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Project', projectSchema)
