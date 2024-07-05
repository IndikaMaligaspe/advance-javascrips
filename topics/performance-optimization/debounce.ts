import * as readline from 'readline';

type Debounce = <T extends (...args: any[]) => void>(func: T, wait: number) => (...args: Parameters<T>) => void;


const debounce : Debounce  = (func, wait) => {
    let timeout: NodeJS.Timeout | undefined;
    return function (this: unknown, ...args: Parameters<typeof func>) {
        const context = this;
        if(timeout) clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
;
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const handleInput = debounce((input: string) => {
    console.log('Executing Command : ', input.trim());
}, 1000);

console.log('Type a command and press Enter');
rl.on('line', handleInput);