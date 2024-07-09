export const performHeavyTask = () => {
    console.log('Performing a heavy task...');
    // Simulate a heavy task
    for (let i = 0; i < 1e7; i++) { }
    console.log('Heavy task completed.');
};
