function generateRandomString(length: number, type: 'lowercase' | 'uppercase' | 'numeric' | 'special' = 'lowercase'): string {
  let result = ''
  const characters: Record<string, string> = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numeric: '0123456789',
    special: '!@#$%^&*()_+-=[]{}|;:,.<>?',
  }

  const allowedCharacters = characters[type] || characters.lowercase + characters.uppercase + characters.numeric

  for (let i = 0; i < length; i++) {
    result += allowedCharacters.charAt(Math.floor(Math.random() * allowedCharacters.length))
  }

  return result
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function uncapitalize(str: string) {
  return str.charAt(0).toLowerCase() + str.slice(1)
}

function camelCase(str: string) {
  return str.replace(/[_-][a-z]/g, str => str.slice(1).toUpperCase())
}

export {
  generateRandomString,
  capitalize,
  uncapitalize,
  camelCase
}
