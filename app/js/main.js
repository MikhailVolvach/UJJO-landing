(()=>{var e={598:()=>{function e(e){var t=!0,n=!1,o=null,d={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function i(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function s(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function a(e){t=!1}function u(){document.addEventListener("mousemove",r),document.addEventListener("mousedown",r),document.addEventListener("mouseup",r),document.addEventListener("pointermove",r),document.addEventListener("pointerdown",r),document.addEventListener("pointerup",r),document.addEventListener("touchmove",r),document.addEventListener("touchstart",r),document.addEventListener("touchend",r)}function r(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,document.removeEventListener("mousemove",r),document.removeEventListener("mousedown",r),document.removeEventListener("mouseup",r),document.removeEventListener("pointermove",r),document.removeEventListener("pointerdown",r),document.removeEventListener("pointerup",r),document.removeEventListener("touchmove",r),document.removeEventListener("touchstart",r),document.removeEventListener("touchend",r))}document.addEventListener("keydown",(function(n){n.metaKey||n.altKey||n.ctrlKey||(i(e.activeElement)&&s(e.activeElement),t=!0)}),!0),document.addEventListener("mousedown",a,!0),document.addEventListener("pointerdown",a,!0),document.addEventListener("touchstart",a,!0),document.addEventListener("visibilitychange",(function(e){"hidden"===document.visibilityState&&(n&&(t=!0),u())}),!0),u(),e.addEventListener("focus",(function(e){var n,o,a;i(e.target)&&(t||(o=(n=e.target).type,"INPUT"===(a=n.tagName)&&d[o]&&!n.readOnly||"TEXTAREA"===a&&!n.readOnly||n.isContentEditable))&&s(e.target)}),!0),e.addEventListener("blur",(function(e){var t;i(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(o),o=window.setTimeout((function(){n=!1}),100),(t=e.target).hasAttribute("data-focus-visible-added")&&(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added")))}),!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)}},t={};function n(o){var d=t[o];if(void 0!==d)return d.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}(()=>{"use strict";n(598);const e={windowEl:window,documentEl:document,htmlEl:document.documentElement,bodyEl:document.body};console.log((()=>{const t=navigator.userAgent||navigator.vendor||window.opera;return/android/i.test(t)?(e.htmlEl.classList.add("page--android"),"Android"):/iPad|iPhone|iPod/.test(t)&&!window.MSStream?(e.htmlEl.classList.add("page--ios"),"iOS"):"unknown"})())})()})();