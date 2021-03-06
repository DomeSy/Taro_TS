import Taro from '@tarojs/taro'

const PAGE_WEBVIEW = '/pages/webview/webview'

/**
 * 后端返回的 url 可能是网页链接，需要在 webview 中打开
 * 也可能是小程序自身的链接，只能用 navigate/redirect 之类的打开
 * 就需要有个地方统一判断处理
 */

 /*
  url: 跳转的地址，
    外链直接输入地址，
    跳转本地页面: url: /pages/matter/matter 或/matter
  title: 外链标题
  payload: 跳转是需要的参数
  method: 跳转的方式
    navigateTo（默认）：保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。使用 Taro.navigateBack 可以返回到原页面。小程序中页面栈最多十层。
    redirectTo：关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面。
    switchTab：跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
    reLaunch： 关闭所有页面，打开到应用内的某个页面
  back:
    method为navigateBack时，的回跳第几层，默认为1
  getEnv:来源，设置非指定端不能进入
*/
interface Props {
  url?: string,
  title?: string,
  payload?: any,
  method?: string,
  back?: number
}

export default function Jump({ url='', title = '', payload = {}, method = 'navigateTo', back = 1 }:Props, getEnv?:string) {

  if(getEnv && Taro.getEnv() !== getEnv){
    getEnv = getEnv === 'ALIPAY' ? '支付宝' : getEnv === 'WEAPP' ? '微信' : getEnv === 'WEB' ? 'h5' : getEnv === 'RN' ? 'react-native' : getEnv === 'SWAN' ? '百度' : getEnv === 'QQ' ? 'QQ' : getEnv === 'JD' ? '京东' : getEnv === 'TT' ? ' 字节' : '其他小程序'
    Taro.showToast({
      title: `目前只支持进入${getEnv}`,
      icon: 'none'
    })
    return
  }

  if(method == 'navigateBack') {
    Taro.navigateBack({
      delta: back,
    })
  } else {
    if (/^https?:\/\//.test(url)) {
      let urlStr = url
      if(payload){
        let str = ''
        for(let key in payload) {
          str += `${key}=${payload[key]}&`
        }
        urlStr +=`?${str}`
      }

      urlStr = urlStr.substring(0, urlStr.length-1)

      Taro[method]({
        url: urlStringify(PAGE_WEBVIEW, { url: urlStr, title })
      })
    } else if (/^\//.test(url)) {
      const jumpUrl = /^\/pages\//.test(url) ? url : `/pages${url}${url}`

      //  H5 不支持 switchTab，暂时 hack 下
      if (Taro.getEnv() === 'WEB' && method === 'switchTab') {
        Taro.navigateBack({ delta: Taro.getCurrentPages().length - 1 })
        setTimeout(() => { Taro.redirectTo({ url: jumpUrl }) }, 100)
        return
      }

      Taro[method]({
        url: urlStringify(jumpUrl, payload)
      })
    }else {
      console.error('url输入错误')
    }
  }
}

function urlStringify(url?:string, payload?:any, encode:boolean = true) {
  const arr = Object.keys(payload).map(key =>
    `${key}=${encode ? encodeURIComponent(payload[key]) : payload[key]}`
  )

  // 注意支付宝小程序跳转链接如果没有参数，就不要带上 ?，否则可能无法跳转
  return arr.length ? `${url}?${arr.join('&')}` : url
}
