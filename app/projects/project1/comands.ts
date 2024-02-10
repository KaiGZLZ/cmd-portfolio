import { navigate } from '@/app/actions'
import { type Command } from '@/app/ui/Console'

export default [

  {
    command: 'cd home',
    description: 'Go to the home page',
    // eslint-disable-next-line
    action: () => { navigate('/projects') }
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
    action: () => { navigate('/projects') }
  }
] as Command[]
