import React, { Component } from 'react'

import TableEntry from './entry'

export default class Table extends Component {
  render() {
    return (
      <div className="page">
        <h1 className="page-title">Team</h1>

        <table className="table">
          <colgroup>
            <col className="table-col"/>
            <col className="table-col"/>
            <col className="table-col"/>
            <col className="table-col" />
            <col className="table-col is__wide"/>
            <col className="table-col is__wide"/>
            <col className="table-col is__wide"/>
          </colgroup>
          <thead className="table-heading">
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Occupation</th>
              <th>Birthday</th>
              <th>Experience</th>
              <th>Bio</th>
              <th>Hobbies</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {this.props.persons.map(person => (
              <TableEntry key={person.name} {...person} />
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}
