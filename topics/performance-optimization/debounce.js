const { timeEnd } = require('console');
const readline = require('readline')

function debounce(func, wait) {
    let timeout;
    return function(...args){
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait)
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.output
});

const handleInput = debounce((input) => {
    console.log('Executing command : ', input.trim());
}, 1000);

console.log('Type a command and press Enter: ');
rl.on('line', handleInput);