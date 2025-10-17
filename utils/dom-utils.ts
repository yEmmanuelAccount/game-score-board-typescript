/**
    * Objetivo do arquivo: tentar obter os elementos e garantir que não sejam nulos;
    * Caso o elemento seja nulo ou não for encontrado: enviar uma mensagem sobre o elemento correspondente;

    @param id -> do elemento a ser buscado
    @param assertType (opcional): tipo esperado do elemento
    @returns -> o tipo do elemento encontrado
*/

export function getRequiredElement<T extends HTMLElement = HTMLElement> (
    id: string,
    assertType?: { new (...args: any[]): T} // verifica o tipo
): T {
    const element = document.getElementById(id);

    // se o elemento não for encontrado
    if (!element) {
        // mensagem
        throw new Error(`DOM Error: Element with ID = '${id}' not found.`);
    }

    // se o elemento for encontrado
    return element as T;
}