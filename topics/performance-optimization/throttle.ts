import readline from 'readline';

type Throttle = <T extends(...args:any[]) => void> (func:T, limit: number) => (...args: Parameters<T>) => void;

const throttle : Throttle = (func, limit) => {
    let lastFunc: NodeJS.Timeout | undefined;
    let lastRan: number;

    return function (this: unknown, ...args: Parameters<typeof func>){
        const context = this;
        if(!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            if(lastFunc) clearTimeout(lastFunc);
            lastFunc = setTimeout(() => {
             if((Date.now() - lastRan >= limit)){
                func.apply(context, args);
                lastRan = Date.now();
             }
            }, limit);
        }
    };
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const handleKeystroke = throttle((input: string) => {
    console.log('Keystroke is :', input.trim())
}, 2000);

console.log(' Start Typing :');
rl.on('line', handleKeystroke)

