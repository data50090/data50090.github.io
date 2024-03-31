window.addEventListener('scroll', function() {
    progress = (document.body.scrollTop / ( document.body.scrollHeight - window.innerHeight ) ) * 100;
    if (progress > 3) {
        document.getElementById("undertitle").style = "opacity: 1; transform: translateY(-10px)"
    } else {
        document.getElementById("undertitle").style = "opacity: 0; transform: translateY(0px)"
    }
});
function download(url) {
    const a = document.createElement('a')
    a.href = url
    a.download = url.split('/').pop()
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }