function isString(val: any): val is string {
  return typeof val === 'string'
}

function isNumber(val: any): val is number {
  return typeof val === 'number'
}

function isBoolean(val: any): val is boolean {
  return typeof val === 'boolean'
}

function isSymbol(val: any): val is symbol {
  return typeof val === 'symbol'
}

function isUndefined(val: any): val is undefined {
  return typeof val === 'undefined'
}

function isBigint(val: any): val is bigint {
  return typeof val === 'bigint'
}

function isIPv4(address: string): boolean {
  const pattern = /^((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])$/
  return pattern.test(address)
}

function isIPv4CIDR(address: string): boolean {
  const pattern = /^(?:(?:[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}(?:[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\/([1-9]|[1-2]\d|3[0-2])$/
  return pattern.test(address)
}

function randomSelect<T>(targetArr: T[], quantity: number): T[] {
  const { length } = targetArr
  if(quantity > length) {
    throw new Error('The quantity can\'t be greater than the sum');
  }
  const result: T[] = []
  while(result.length < quantity) {
    const pos = Math.floor(Math.random() *(length - result.length))
    result.push(targetArr[pos])
    ;[targetArr[pos], targetArr[length - result.length]] = [targetArr[result.length], targetArr[pos]]
  }
  return result
}

function generateUUID() {
  if(typeof crypto === 'object') {
    if(typeof crypto.randomUUID === 'function') {
      return crypto.randomUUID()
    }

    if(typeof crypto.getRandomValues === 'function' && typeof Uint8Array === 'function') {
      // @ts-ignore
      return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, (character) => {
        return (Number(character) ^ crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (character / 4))).toString(16)
      })
    }
  }

  let timestamp = new Date().getTime()
  let perforNow = (typeof performance !== 'undefined' && performance.now && performance.now() * 1000) || 0
  
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (character) => {
    let random = Math.random()
    if(timestamp > 0) {
      random = (timestamp * random) % 16 | 0
      timestamp = Math.floor(timestamp / 16)
    } else {
      random = (perforNow + random) % 16 | 0
      perforNow = Math.floor(perforNow / 16)
    }
    return (character === 'x' ? random : (random & 0x3) | 0x8).toString(16)
  })
}

export {
  isString,
  isNumber,
  isBoolean,
  isSymbol,
  isUndefined,
  isBigint,
  isIPv4,
  isIPv4CIDR,
  randomSelect,
  generateUUID
}
