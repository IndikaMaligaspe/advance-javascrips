const loadButton = document.getElementById('loadButton') as HTMLButtonElement;

loadButton.addEventListener('click', async () => {
  console.log('Starting call for lazy module..')
  const { performHeavyTask } = await import('./lazyModule.js');
  performHeavyTask();
});
