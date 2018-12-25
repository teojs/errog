/* eslint-disable */
const ajax = function(data) {
  var xmlhttp
  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest()
  } else {
    xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')
  }
  xmlhttp.open('POST', 'http://127.0.0.1:8822/errorLog/addErrLog', true)
  xmlhttp.setRequestHeader('Content-type', 'application/json;charset=UTF-8')
  xmlhttp.send(JSON.stringify(data))
}
class Errog {
  init(projectName, apikey) {
    const _console = {
      log: console.log,
      info: console.info,
      debug: console.debug,
      warn: console.warn,
      error: console.error
    }
    var postParams = {
      apiKey: apikey,
      projectName: projectName,
      path: location.href
    }
    window.addEventListener('error', event => {
      postParams.errMsg = event.message
      ajax(postParams)
    })
    console.log = function() {
      postParams.errMsg = Array.prototype.slice.call(arguments, 0).join(' ')
      ajax(postParams)
      _console.log.apply(this, Array.prototype.slice.call(arguments, 0))
    }
    console.info = function() {
      postParams.errMsg = Array.prototype.slice.call(arguments, 0).join(' ')
      ajax(postParams)
      _console.info.apply(this, Array.prototype.slice.call(arguments, 0))
    }
    console.debug = function() {
      postParams.errMsg = Array.prototype.slice.call(arguments, 0).join(' ')
      ajax(postParams)
      _console.debug.apply(this, Array.prototype.slice.call(arguments, 0))
    }
    console.warn = function() {
      postParams.errMsg = Array.prototype.slice.call(arguments, 0).join(' ')
      ajax(postParams)
      _console.warn.apply(this, Array.prototype.slice.call(arguments, 0))
    }
    console.error = function() {
      postParams.errMsg = Array.prototype.slice.call(arguments, 0).join(' ')
      ajax(postParams)
      _console.error.apply(this, Array.prototype.slice.call(arguments, 0))
    }
  }
}
const errog = new Errog()
export const init = errog.init
export default errog

