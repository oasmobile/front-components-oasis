let head = document.getElementsByTagName("head")[0],
    script = document.createElement('script'),
    ms = Math.floor(new Date().getTime() / 1000),
    msHourMod = ms % 3600,
    timestamp = msHourMod === 0 ? ms : ms - msHourMod,
    version = '',
    fcoEnvUrl = '//img.oasgames.com/fc-oasis/production/runtime.min.js';

if (typeof(fcoUrl) !== 'undefined') {
    fcoEnvUrl = fcoUrl;
}

if (typeof(fcoVersion) !== 'undefined') {
    version = '&version=' + fcoVersion;
}

script.type = 'text/javascript';
script.async = true;
script.src = fcoEnvUrl + '?' + 'timestamp=' + timestamp + version;
script.setAttribute('id', 'fcoScript');

let fcoGdprBox = document.getElementById('fcoScript');

if (!fcoGdprBox) {
    head.appendChild(script);
}
