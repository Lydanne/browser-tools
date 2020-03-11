(function () {
  window.fgc.version = '1.0.0';
  window.fgc.updateDate = '20200311';
  const fileNav = document.getElementsByClassName('file-navigation')[0];
  const btn = document.createElement("span");
  btn.className = "btn btn-sm btn-blue";
  btn.innerText = "Source Graph";
  btn.style.marginLeft = '8px';
  btn.onclick = function () {
    const url = window.location.href;
    const sourceGraph = 'https://sourcegraph.com/'
    const last = url.split('://')[1];
    window.open(sourceGraph + last);
  }
  fileNav.appendChild(btn);
})()