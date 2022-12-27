import { isIPv4, isIPv4CIDR } from './utils'

function splitIPv4(address: string): number[] {
  if(!isIPv4(address)) {
    throw new Error('parameter must be an IPv4 address')
  }

  return address.split('.').map(Number)
}

function checkIsInSameNetworkSegment(cidr1: string, cidr2: string): boolean {
  if(!isIPv4CIDR(cidr1) || !isIPv4CIDR(cidr2)) {
    throw new Error('parameter format must be CIDR')
  }
  
  const [ip1, mask1] = cidr1.split('\/')
  const [ip2, mask2] = cidr2.split('\/')

  const ipArr1 = splitIPv4(ip1)
  const ipArr2 = splitIPv4(ip2)

  const ip1Binary = (ipArr1[0] << 24) | (ipArr1[1] << 16) | (ipArr1[2] << 8) | (ipArr1[3] >>> 0)
  const ip2Binary = (ipArr2[0] << 24) | (ipArr2[1] << 16) | (ipArr2[2] << 8) | (ipArr2[3] >>> 0)

  return (ip1Binary & mask1 as any) === (ip2Binary & mask2 as any)
}

export {
  checkIsInSameNetworkSegment
}
