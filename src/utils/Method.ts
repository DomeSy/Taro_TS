import CryptoJS from 'crypto-js'
class Method {
  /*
    脱敏
      str: 脱敏文本
      start: 开始位置
      end: 结束位置
  */
  static Desensit = (str, start, end = str.length) => {
    for(let i = start;i < end; i++){
      str = str.replace(str[i], '*')
    }
    return str;
  }

  // 数组截取
  static Intercept = (list, end , start = 0) => {
    const arr:any = []
    list.map((item:any, index) => {
      if(index >= start && index < end){
        arr.push(item)
      }
    })
    return arr
  }

  //判断是否是空对象
  static isObject = data => {
    return Object.keys(data).length === 0 ? true : false
  }

  static md5 = str => {
    return CryptoJS.MD5(str).toString()
  }
}


export default Method
