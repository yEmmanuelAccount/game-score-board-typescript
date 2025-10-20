/**
 * Obtém um elemento do DOM pelo ID e garante que ele não é nulo.
 * Se o elemento não for encontrado, lança um erro no console.
 * * @param id O ID do elemento a ser buscado.
 * @returns O elemento HTML encontrado.
 */
export function getRequiredElement(id) {
    const element = document.getElementById(id);
    if (!element) {
        // Lançamento de erro claro e explícito
        throw new Error(`DOM Error: Element with ID '${id}' not found. A aplicação não pode inicializar sem ele.`);
    }
    // O TypeScript confia que o elemento é do tipo 'T' (ou HTMLElement se não especificado)
    return element;
}
