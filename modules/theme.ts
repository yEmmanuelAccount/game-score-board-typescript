// elements
const themeButton = document.getElementById('theme-toggle') as HTMLButtonElement | null;
const htmlElement = document.documentElement;

// function
function toggleTheme(): void {
    // verifica o estado do atributo 'data-theme'
    const currentTheme = htmlElement.getAttribute('data-theme');

    // se estiver no tema 'claro'
    if (currentTheme === 'light') {
        // muda para o 'escuro'
        htmlElement.setAttribute('data-theme', 'dark');

        // trocar o icone: sol para lua
    } else {
        // mudar para 'claro'
        htmlElement.setAttribute('data-theme', 'light');

        // trocar o icone: lua para sol
    }
}

// ação de trocar de tema
if (themeButton) {
    themeButton.addEventListener("click", toggleTheme);
} else {
    // mensagem de erro
    console.error("Erro: botão de trocar de tema (toggle-theme) não foi encontrado no DOM.");
}