let head = document.head,
    script = document.createElement('script'),
    ms = Math.floor(new Date().getTime() / 1000),
    msHourMod = ms % 3600,
    timestamp = msHourMod === 0 ? ms : ms - msHourMod,
    version = '',
    fcoEnvUrl = 'https://img.oasgames.com/fc-oasis/runtime.min.js';

if (typeof(fcoVersion) !== 'undefined') {
    version = '&version=' + fcoVersion;
}

if (typeof(fcoEnv) !== 'undefined' && fcoEnv === 'dev') {
    fcoEnvUrl = 'dist/scripts/runtime.min.js';
}

script.src = fcoEnvUrl + '?' + 'timestamp=' + timestamp + version;
script.type = 'text/javascript';
script.setAttribute('id','fcoScript');
script.onload = function () {
    let event = new CustomEvent('fcoready');
    window.dispatchEvent(event);
};

let fcoGdprBox = document.querySelector('#fcoScript');
if(!fcoGdprBox){
    head.appendChild(script);
}
