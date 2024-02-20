import { navigate } from '@/app/actions'
import { type Command } from '@/app/ui/Console'

export default [
  {
    command: 'cd project2',
    description: 'Go to the projects 2 page',
    // eslint-disable-next-line
    action: () => { navigate('/projects/project2') }
  },
  {
    command: 'cd projects',
    description: 'Go to the projects page',
    // eslint-disable-next-line
    action: () => { navigate('/projects') }
  },
  {
    command: 'cd home',
    description: 'Go to the home page',
    // eslint-disable-next-line
    action: () => { navigate('/') }
  },
  {
    command: 'cd contact',
    description: 'Go to the contact page',
    // eslint-disable-next-line
    action: () => { navigate('/contact') }
  }
] as Command[]
