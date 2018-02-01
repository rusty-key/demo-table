import React, { Component } from 'react'

import HideableCell from './hideableCell'

export default class TableEntry extends Component {
  render() {
    const { name, lastName, birthday, occupation, experience, about, hobbies } = this.props

    return (
      <tr className="tableEntry">
        <td className="tableEntry-cell is__name">
          { name }
        </td>

        <td className="tableEntry-cell is__name">
          { lastName }
          <span className="tableEntry-helper">, </span>
        </td>

        <td className="tableEntry-cell">
          { occupation }
          <span className="tableEntry-helper">, </span>
        </td>

        <td className="tableEntry-cell">
          <span className="tableEntry-helper">born </span>
          { `${birthday.getDate()}.${('0' + (birthday.getMonth() + 1)).slice(-2)}.${birthday.getFullYear()}` }
        </td>

        <td className="tableEntry-cell is__wide">
          <HideableCell label="Experience">
            { experience.length ? experience.sort().map(entry => (
              <div className="tableEntry-job" key={entry}>{ entry }</div>)
            ) : '—'}
          </HideableCell>
        </td>

        <td className="tableEntry-cell is__wide">
          <HideableCell label="Bio">
            { about }
          </HideableCell>
        </td>

        <td className="tableEntry-cell is__wide">
          <HideableCell label="Hobbies">
            { hobbies }
          </HideableCell>
        </td>
      </tr>
    )
  }
}
