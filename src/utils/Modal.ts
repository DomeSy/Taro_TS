import Taro from '@tarojs/taro'

/**
 * @module 弹出框、轻提示
 *
 * @param alert 普通弹框
 * @param confirm 确认框
 * @param info 轻提示
 * @param success 成功
 * @param loading 加载框
 * @param hide 取消
*/

class Modal {

  /**
   * @param data 可为字符串 或 对象，1>字符串时为消息内容， 2>对象为 title 标题，content为消息内容
   * @param title 标题
   * @param content 提示内容
   * @param button 确定按钮
   * @param fn 确认时的回调
   */
  static alert = (data:any, fn:any=()=>{}) => {
    let { title='提示', content='提示内容', button='确认' } = data
    if(typeof data === 'string') content = data
    Taro.showModal({
      title,
      content,
      showCancel: false,
      confirmText: button,
      success: (res) => {
        if (res.confirm) {
          fn()
        }
      }
    })
  }

   /**
   * @param cacel 取消按钮
   * @param fn1 取消时的回调
   */
  static confirm = (data:any, fn:any=()=>{},fn1 =()=>{}) => {
    let { title='提示', content='提示内容', button='确认',  cacel='取消1'} = data
    if(typeof data === 'string') content = data
    Taro.showModal({
      title,
      content,
      cancelText: cacel,
      confirmText: button,
      success: (res) => {
        if (res.confirm) {
          fn()
        } else if (res.cancel) {
          fn1()
        }
      }
    })
  }


  /**
   * @param content 加载的文字
   * @param duration 显示的时长，默认2
   * @param mask 是否可穿透，默认不可穿透
   */
  static info = (title:string = '提示语', duration:number = 1000, mask:boolean = true) => {
    Taro.showToast({ title, icon: 'none', duration, mask })
  }

  static success = (title:string = 'success!!!', duration:number = 1000, mask:boolean = true) => {
    Taro.showToast({ title, icon: 'success', duration, mask })
  }

  static loading = (title:string = 'fail!!!', mask:boolean = true) => {
    Taro.showLoading({ title, mask })
  }

  static hide = () => {
    Taro.hideLoading()
  }
}

export default Modal
