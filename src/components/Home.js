import React from 'react'
import Todos from './Todos';

const dummyTodos = [
    {
        id: 1,
        title: 'todo 1',
        description: 'todo description 1 go on...'
    },
    {
        id: 2,
        title: 'todo 2',
        description: 'todo description 2 go on...'
    }
];
const home = () => {
  return (
    <div>
        <Todos todos={dummyTodos} />
    </div>
  )
}

export default home