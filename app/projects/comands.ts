import { navigate } from '../actions'
import { type Command } from '../ui/Console'

export default [
  {
    command: 'cd project1',
    description: 'Go to the project 1 page',
    // eslint-disable-next-line
    action: () => { navigate('/projects/project1') }
  },
  {
    command: 'cd project2',
    description: 'Go to the project 2 page',
    // eslint-disable-next-line
    action: () => { navigate('/projects/project2') }
  },
  {
    command: 'cd about',
    description: 'Go to the about page',
    // eslint-disable-next-line
    action: () => { navigate('/about') }
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
