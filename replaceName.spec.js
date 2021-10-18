import { describe, expect, it } from '@jest/globals'
import { replaceName } from './replaceName'

describe('replaceName', () => {
  it('replaces a name in a text', () => {
    const result = replaceName('Hello Jane', 'Jane', 'Dolly')
    expect(result).toBe('Hello Dolly')
  })

  it('replaces each occurrence of a name in a text', () => {
    const result = replaceName('Hi John, bye John.', 'John', 'Jane')
    expect(result).toBe('Hi Jane, bye Jane.')
  })
})
