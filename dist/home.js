import { initThemeToggle } from './modules/theme.js';
// Importe outras lógicas que *só* a HOME precisa

export function initHome() {
    initThemeToggle();
    console.log("Inicializando lógica da Página Inicial (Carrossel e Busca)...");
    // [Aqui entra a lógica do carrossel e busca da HOME]
}

document.addEventListener('DOMContentLoaded', initHome);
