import { describe, expect, it } from '@jest/globals'
import {
  findPeopleByIds,
  getAgesOfFriends,
  getFirstNames,
  getFriendsOfPersonById,
  getFullNames,
  getFullNamesSortedByAge,
  getNameAndAge,
  getPeople,
  getPeopleByAge,
  getPeopleByLastName,
  getPeopleNamesOlderThan,
  isAnyoneOlderThan,
} from './people.js'

describe('people', () => {
  const people = getPeople()

  describe('getFirstNames', () => {
    //it is an assertion(statement in the Java programming language that enables you to test your assumptions about your program.)
    //that tells us what test result is expected
    it('returns the first names', () => {
      const result = getFirstNames(people)
      expect(result).toEqual(['Jane', 'John', 'Max', 'Erika', 'Luke'])
    })
  })

  describe('getFullNames', () => {
    it('returns full names as strings e.g. "Jane Doe"', () => {
      const result = getFullNames(people)
      expect(result).toEqual([
        'Jane Doe',
        'John Doe',
        'Max Mustermann',
        'Erika Musterfrau',
        'Luke Skywalker',
      ])
    })
  })

  describe('getNameAndAge', () => {
    it('returns an array of formatted strings like this: "Skywalker (23)"', () => {
      const result = getNameAndAge(people)
      expect(result).toEqual([
        'Doe (21)',
        'Doe (18)',
        'Mustermann (32)',
        'Musterfrau (38)',
        'Skywalker (23)',
      ])
    })
  })

  describe('getAgesOfFriends', () => {
    it('returns an array of ages for a person friends', () => {
      const result = getAgesOfFriends(people, 1)
      expect(result).toEqual([18, 32, 38])
    })
  })

  describe('getFullNamesSortedByAge', () => {
    it('returns an array of last names sorted by age', () => {
      const result = getFullNamesSortedByAge(people)
      expect(result).toEqual([
        'John Doe',
        'Jane Doe',
        'Luke Skywalker',
        'Max Mustermann',
        'Erika Musterfrau',
      ])
    })
  })

  describe('getPeopleByAge', () => {
    it('returns an array of people of a certain age', () => {
      const result = getPeopleByAge(people, 23)
      expect(result).toEqual([
        {
          id: 5,
          firstName: 'Luke',
          lastName: 'Skywalker',
          age: 23,
          email: 'luke@tatooine-mail.com',
          friendIds: [1, 2],
        },
      ])
    })
  })

  describe('getPeopleNamesOlderThan', () => {
    it('returns an array of people older than a certain age', () => {
      const result = getPeopleNamesOlderThan(people, 30)
      expect(result).toEqual(['Max Mustermann', 'Erika Musterfrau'])
    })
  })

  describe('getPeopleByLastName', () => {
    it('returns an array of people of a certain lastName', () => {
      const result = getPeopleByLastName(people, 'Doe')
      expect(result).toEqual([
        {
          id: 1,
          firstName: 'Jane',
          lastName: 'Doe',
          age: 21,
          email: 'jane@doe.com',
          friendIds: [2, 3, 4],
        },
        {
          id: 2,
          firstName: 'John',
          lastName: 'Doe',
          age: 18,
          email: 'john@doe.com',
          friendIds: [1, 3, 5],
        },
      ])
    })
  })

  describe('findPeopleByIds', () => {
    it('returns an array of people objects for an array of ids', () => {
      const result = findPeopleByIds(people, [1, 2])
      expect(result).toEqual([
        {
          id: 1,
          firstName: 'Jane',
          lastName: 'Doe',
          age: 21,
          email: 'jane@doe.com',
          friendIds: [2, 3, 4],
        },
        {
          id: 2,
          firstName: 'John',
          lastName: 'Doe',
          age: 18,
          email: 'john@doe.com',
          friendIds: [1, 3, 5],
        },
      ])
    })
  })

  describe('getFriendsOfPersonById', () => {
    it("returns a populated array of friends for a person's id", () => {
      const result = getFriendsOfPersonById(people, 1)
      expect(result).toEqual([
        {
          id: 2,
          firstName: 'John',
          lastName: 'Doe',
          age: 18,
          email: 'john@doe.com',
          friendIds: [1, 3, 5],
        },
        {
          id: 3,
          firstName: 'Max',
          lastName: 'Mustermann',
          age: 32,
          email: 'max@mustermann.de',
          friendIds: [1, 2, 4, 5],
        },
        {
          id: 4,
          firstName: 'Erika',
          lastName: 'Musterfrau',
          age: 38,
          email: 'erika.musterfrau@gmail.com',
          friendIds: [2, 5],
        },
      ])
    })
  })

  // hint: implementation should use Array.prototype.some
  describe('isAnyoneOlderThan', () => {
    it('returns true, if any person is older', () => {
      const result = isAnyoneOlderThan(people, 30)
      expect(result).toEqual(true)
    })

    it('returns false, if no person is older', () => {
      const result = isAnyoneOlderThan(people, 40)
      expect(result).toEqual(false)
    })
  })
})
