export const throttle = (() => {
  let last = 0
  return (callback: () => void, wait:number = 800) => {
    let now = +new Date()
    if (now - last > wait) {
      callback()
      last = now
    }
  }
})()
export const debounce = (() => {
  let timer: NodeJS.Timeout | null = null
  return (callback: () => void, wait:number = 800) => {
    timer && clearTimeout(timer)
    timer = setTimeout(callback, wait)
  }
})()