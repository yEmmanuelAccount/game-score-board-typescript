import { getRequiredElement } from '../utils/dom-utils';

/**
 * Inicializa a funcionalidade de alternância de tema e ícone.
 * Deve ser chamada no main.ts.
 */
export function initThemeToggle(): void {
    try {
        // 1. Obtém elementos de forma segura
        const themeButton = getRequiredElement<HTMLButtonElement>('theme-toggle');
        const themeIcon = getRequiredElement<HTMLElement>('theme-icon');
        const htmlElement = document.documentElement; 

        /**
         * Alterna o atributo 'data-theme' no <html> e troca o ícone.
         */
        function toggleTheme(): void {
            const currentTheme = htmlElement.getAttribute('data-theme');

            if (currentTheme === 'light') {
                // Mudar para o tema ESCURO
                htmlElement.setAttribute('data-theme', 'dark');
                themeIcon.classList.replace('fa-sun', 'fa-moon');
            } else {
                // Mudar para o tema CLARO
                htmlElement.setAttribute('data-theme', 'light');
                themeIcon.classList.replace('fa-moon', 'fa-sun');
            }
        }

        // 2. Adiciona o Event Listener
        themeButton.addEventListener("click", toggleTheme);
        console.log("Módulo Tema: Inicializado com sucesso.");
        
    } catch (error) {
        // 3. Captura e reporta erros se os elementos DOM essenciais não existirem
        console.error("Módulo Tema: Falha na inicialização.", error);
    }
}