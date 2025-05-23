const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const Project = require('./models/Project')


const app = express()
const PORT = 5000

app.use(express.json())

// In-memory array to store projects
const projects = [
  { id: 1, title: 'Netflix Clone', tech: ['Next.js', 'Tailwind'] },
  { id: 2, title: 'Blog CMS', tech: ['Node.js', 'MongoDB'] }
]

app.get('/', (req, res) => {
  res.send('Hello from Express backend!')
})

app.get('/api/projects', (req, res) => {
  res.json(projects)
})

app.post('/api/projects', async (req, res) => {
    try {
      const newProject = await Project.create(req.body)
      res.status(201).json(newProject)
    } catch (err) {
      res.status(500).json({ error: 'Failed to create project' })
    }
  })


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB connection error:', err))


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
