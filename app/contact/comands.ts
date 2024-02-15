import { navigate } from '@/app/actions'
import { type Command } from '@/app/ui/Console'

export default [

  {
    command: 'cd home',
    description: 'Go to the home page',
    // eslint-disable-next-line
    action: () => { navigate('/') }
  },
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
  }
] as Command[]
