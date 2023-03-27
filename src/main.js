const { invoke } = window.__TAURI__.tauri;

import { appWindow } from '@tauri-apps/api/window'

let greetInputEl;
let greetMsgEl;

async function greet() {
  // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  greetMsgEl.textContent = await invoke("greet", { name: greetInputEl.value });
}

window.addEventListener("DOMContentLoaded", () => {
  greetInputEl = document.querySelector("#greet-input");
  greetMsgEl = document.querySelector("#greet-msg");
  document
    .querySelector("#greet-button")
    .addEventListener("click", () => greet());
  document.getElementById('titlebar-minimize')
    .addEventListener('click', () => appWindow.minimize())
  document.getElementById('titlebar-maximize')
    .addEventListener('click', () => appWindow.toggleMaximize())
  document.getElementById('titlebar-close')
    .addEventListener('click', () => appWindow.close())
});

