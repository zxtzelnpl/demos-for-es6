
function ajaxEventTrigger(event, detail) {
  var ajaxEvent = new CustomEvent(event, { detail })
  window.dispatchEvent(ajaxEvent)
};

export class WrapXMLHttpRequest {
  static init() {
    if(window.XMLHttpRequest !== WrapXMLHttpRequest) {
      window.XMLHttpRequest = WrapXMLHttpRequest
     }
  }

  constructor() {
    const realXHR = new window
  }

  wrap() {
    const oldXHR = window.XMLHttpRequest

    const self = this

    function newXHR() {
      var realXHR = new oldXHR()
     
      realXHR.addEventListener('load', function () {
        ajaxEventTrigger('ajaxLoad', this)
      }, false)
     
      realXHR.addEventListener('timeout', function () {
        ajaxEventTrigger('ajaxTimeout', this)
      }, false)
     
      realXHR.addEventListener('readystatechange', function() {
        ajaxEventTrigger('ajaxReadyStateChange', this)
      }, false)
     
      return realXHR
    };
     
     window.XMLHttpRequest = newXHR
     self._startLintenAjax()
  }
}