/**
 * @module 公共配置
 */

const urlFlag = true  // true: 正式 false：测试

const phpUrl = 'https://wxapp.xm.pandabg.cn/index.php?reqUrl=Send.'
const phpUrlTest = 'http://bgapi.105.100baimi.cn/index.php?reqUrl=Send.'

const Config = {
  phpUrl: urlFlag ? phpUrl : phpUrlTest
}

export default Config
