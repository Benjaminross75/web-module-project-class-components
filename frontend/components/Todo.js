import React from 'react'

export default class Todo extends React.Component {
  render() {
    const {id, name, completed} = this.props.todo

    return (
      <div>
        {name} {completed && ' ✅'}
      </div>
    )
  }
}
