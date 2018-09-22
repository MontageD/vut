// 判断参数是否在数组里面
export function isInArray(value,arr) {
    if (arr.indexOf && typeof (arr.indexOf) == 'function') {
        if (arr.indexOf(value) != -1) {
            return true
        }
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (value === arr[i]) {
                return true;
            }
        }
       
    }
    return false;
}