import React from 'react'
import faker from 'faker'

import Table from './table/table'

const fakePersons = [...Array(10)].map(() => ({
  name: faker.name.firstName(),
  lastName: faker.name.lastName(),
  birthday: faker.date.past(30),
  occupation: faker.name.jobTitle(),
  experience: [...Array(Math.random() * 10 | 0)].map(() => `${faker.date.past(30).getFullYear()} — ${faker.name.jobTitle()} at ${faker.company.companyName()}` ),
  about: faker.lorem.sentences(Math.random() * 5),
  hobbies: faker.lorem.sentences(Math.random() * 10),
}))

const Root = () => (
  <Table persons={fakePersons} />
)

export default Root
