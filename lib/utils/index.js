export const throttle = (() => {
    let last = 0;
    return (callback, wait = 800) => {
        let now = +new Date();
        if (now - last > wait) {
            callback();
            last = now;
        }
    };
})();
export const debounce = (() => {
    let timer = null;
    return (callback, wait = 800) => {
        timer && clearTimeout(timer);
        timer = setTimeout(callback, wait);
    };
})();
