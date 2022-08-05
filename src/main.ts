import App from './App.svelte'

const app = new App({
  target: document.getElementById('app')
});
console.log(Neutralino);

Neutralino.init();
Neutralino.events.on("windowClose", () => {
    Neutralino.app.exit();
});
export default app
