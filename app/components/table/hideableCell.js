import React, { Component } from 'react'

export default class HideableTableCell extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  onToggle() {
    this.setState({ isHidden: !this.state.isHidden })
  }

  render() {
    const { label, children } = this.props
    const { isHidden } = this.state

    return (
      <div className={ `hideableCell ${isHidden ? 'is__hidden' : ''}` }>
        <div className="hideableCell-label" onClick={() => this.onToggle()}>
          { label }
          <span className="hideableCell-icon fa fa-caret-down" />
        </div>

        <div className="hideableCell-content">
          { children }
        </div>
      </div>
    )
  }
}
