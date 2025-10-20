import { initThemeToggle } from './modules/theme';
// Importe outras lógicas que *só* a HOME precisa

export function initHome(): void {
    initThemeToggle();
    console.log("Inicializando lógica da Página Inicial (Carrossel e Busca)...");
    // [Aqui entra a lógica do carrossel e busca da HOME]
}

document.addEventListener('DOMContentLoaded', initHome);