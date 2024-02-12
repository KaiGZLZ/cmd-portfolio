import { navigate } from './actions'
import { type Command } from './ui/Console'

export default [
  {
    command: 'cd about',
    description: 'Go to the about page',
    // eslint-disable-next-line
    action: () => { navigate('/about') }
  },
  {
    command: 'cd projects',
    description: 'Go to the projects page',
    // eslint-disable-next-line
    action: () => { navigate('/projects') }
  },
  {
    command: 'cd contact',
    description: 'Go to the contact page',
    // eslint-disable-next-line
    action: () => { navigate('/contact') }
  }
] as Command[]
