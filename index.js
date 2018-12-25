/* eslint-disable */
const ajax = function(data) {
  try {
    var xmlhttp
    if (window.XMLHttpRequest) {
      xmlhttp = new XMLHttpRequest()
    } else {
      xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')
    }
    xmlhttp.open('POST', 'http://api.teoxu.cn/errorLog/addErrLog', true)
    xmlhttp.setRequestHeader('Content-type', 'application/json;charset=UTF-8')
    xmlhttp.send(JSON.stringify(data))
  } catch (error) {
    console.log(error)
  }
}
const types = ['log', 'info', 'debug', 'warn', 'error']
class Errog {
  init(projectName, apikey) {
    setTimeout(() => {
      const _console = {
        log: console.log,
        info: console.info,
        debug: console.debug,
        warn: console.warn,
        error: console.error
      }
      const postParams = {
        apiKey: apikey,
        projectName: projectName,
        path: location.href
      }
      window.addEventListener('error', event => {
        postParams.errMsg = event.message
        postParams.type = 'error'
        ajax(postParams)
      })
      types.forEach(type => {
        console[type] = function() {
          _console[type].apply(this, Array.prototype.slice.call(arguments, 0))
          postParams.errMsg = Array.prototype.slice.call(arguments, 0).join(' ')
          postParams.type = type
          ajax(postParams)
        }
      })
    }, 0)
  }
}
const errog = new Errog()
// export const init = errog.init
export default errog
