import { initThemeToggle } from './modules/theme';
import { initHome } from './home';
// import { initYearPage } from './modules/year'; // Para páginas futuras
/**
 * Função principal para inicializar toda a aplicação após o carregamento do DOM.
 */
function initializeApp() {
    // 1. Inicializa funcionalidades globais (Tema)
    initThemeToggle();
    // 2. Determina e inicializa a lógica da página atual
    const isHomePage = document.body.classList.contains('home-page');
    // const isYearPage = document.body.classList.contains('year-page'); // Para páginas futuras
    if (isHomePage) {
        initHome();
    }
    // else if (isYearPage) {
    //     initYearPage();
    // }
    console.log("Aplicação Principal: Inicialização concluída.");
}
// Garante que o aplicativo só é inicializado quando o DOM estiver totalmente carregado.
document.addEventListener('DOMContentLoaded', initializeApp);
