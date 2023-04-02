function getExt(filename: string): string {
  return filename.split('.').pop()?.toLocaleLowerCase() as string
}

function checkFilename(filename: string, list: string[]) {
  return list.includes(getExt(filename))
}

function isImage(filename: string) {
  return checkFilename(filename, ['png', 'jpeg', 'jpg', 'gif', 'bmp', 'wbep'])
}

function isH5Video(filename: string) {
  return checkFilename(filename, ['mp4', 'webm', 'ogg'])
}

function isPdf(filename: string) {
  return checkFilename(filename, ['pdf'])
}

export {
  getExt,
  checkFilename,
  isImage,
  isH5Video,
  isPdf
}
