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

export {
  generateRandomString
}
