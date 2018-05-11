let head = document.head,
    script = document.createElement('script'),
    ms = Math.floor(new Date().getTime() / 1000),
    msHourMod = ms % 3600,
    version = '',
    fcoEnvUrl = 'https://img.oasgames.com/fc-oasis/runtime.min.js';

let timestamp = msHourMod === 0 ? ms : ms - msHourMod;

if (typeof(fcoVersion) !== 'undefined') {
    version = '&version=' + fcoVersion;
}

if(typeof(fcoEnv)!== 'undefined' && fcoEnv === 'dev'){
    fcoEnvUrl ='dist/scripts/runtime.min.js';
}

script.src = fcoEnvUrl + '?' + 'timestamp=' + timestamp + version;
script.type = 'text/javascript';

head.appendChild(script);
