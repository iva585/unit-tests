export function getGreeting(name = 'you') {
  if (name === 'Jerry') {
    return 'Hello Coach!'
  }

  return `Hello ${name}!` // template literal
}
