const readline = require('readline')

function throttle(func, limit) {
    let lastRan;
    let lastFunc;

    return function(...args){
        const context = this;
        if(!lastRan){
            func.apply(context, args);
            lastRan = Date.now();
        }
        if(lastFunc) clearTimeout(lastFunc);
        lastFunc = setTimeout(()=>{
            if(Date.now() - lastRan >= limit){
                func.apply(context, args);
                lastRan = Date.now();
            }
        }, limit)
    }
}


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const handleKeystroke = throttle((input) => {
    console.log('Keystroke is :', input.trim())
}, 2000);

console.log(' Start Typing :');
rl.on('line', handleKeystroke)