// javascript: (function (src) { var srciptEl = document.createElement('script'); srciptEl.setAttribute("src", srciptEl); document.body.appendChild(srciptEl); })("")
(function (window) {
  const url = window.location.href;
  const sourceGraph = 'https://sourcegraph.com/'
  const last = url.split('://')[1];
  window.open(sourceGraph + last)
})(window)