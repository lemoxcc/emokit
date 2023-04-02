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

function isWord(filename: string) {
  return checkFilename(filename, ['doc', 'docx'])
}

export {
  getExt,
  checkFilename,
  isImage,
  isH5Video,
  isPdf,
  isWord
}
