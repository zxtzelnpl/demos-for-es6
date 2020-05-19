// 导出数据
export const color = 'red'
export const name = 'Nicholas'
export const magicNumber = 7

// 导出函数
export function sum(num1, num2) {
    return num1 + num2
}

// 导出类
export class Rectangle {
    constructor(length, width) {
        this.length = length
        this.width = width
    }
}

// 这个函数是模块私有的
function subtract(num1, num2) {
    return num1 - num2
}

// 定义一个函数...

const myObj = {
    subtract: '123'
}

function multiply(num1, num2) {
    return num1 * num2
}

export {
    subtract
}


export * from './constants'

// export default myObj
