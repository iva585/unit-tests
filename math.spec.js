import { describe, expect } from '@jest/globals'
import { isOdd, isEven, isDivisibleBy3 } from './math'

describe('math', () => {
  describe('isOdd', () => {
    it('returns true, if a number is odd', () => {
      const result = isOdd(1)
      expect(result).toBe(true)
    })

    it('returns true, if a negative number is odd', () => {
      const result = isOdd(-3)
      expect(result).toBe(true)
    })

    it('returns false, if a number is even', () => {
      const result = isOdd(2)
      expect(result).toBe(false)
    })

    it('returns false, if a negative number is even', () => {
      const result = isOdd(-4)
      expect(result).toBe(false)
    })
  })
  describe('isEven', () => {
    it('returns true, is a number is even', () => {
      const result = isEven(4)
      expect(result).toBe(true)
    })

    it('returns true, if a negative number is even', () => {
      const result = isEven(-4)
      expect(result).toBe(true)
    })

    it('returns false, if a number is odd', () => {
      const result = isEven(3)
      expect(result).toBe(false)
    })

    it('returns false, if a negative number is odd', () => {
      const result = isEven(-3)
      expect(result).toBe(false)
    })
  })
  describe('isDivisibleBy3', () => {
    it('returns true, is a number is divisible by 3', () => {
      const result = isDivisibleBy3(6)
      expect(result).toBe(true)
    })
    it('returns true, if a negative number is divisible by 3', () => {
      const result = isDivisibleBy3(-6)
      expect(result).toBe(true)
    })

    it('returns false, if a number is not divisible by 3', () => {
      const result = isDivisibleBy3(5)
      expect(result).toBe(false)
    })

    it('returns false, if a negative number is not divisible by 3', () => {
      const result = isDivisibleBy3(-5)
      expect(result).toBe(false)
    })
  })
})
