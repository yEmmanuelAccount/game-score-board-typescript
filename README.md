# Objetivo

Registrar de forma mais visual os Jogos Escolares entre dois times (Azul e Branco).

# Rascunho

construa
1. uma home, sem scroll
   1. cabeçalho
      * um botão "GamePlacar" que recarrega ou redireciona o usuário para a primeira página.
      * do lado direito, no fim do cabeçalho, um botão com formato de `sol` para indicar que o site está em tema claro; se clicado,  transforma-se em uma `lua` e coloca o site em tema escuro.
      * do lado direito, antes do seletor de temas, um campo que indique que usuário pode criar uma conta ou efetuar login.
      * centralizado no cabeçalho, uma barra de pesquisa que o usuário poderá pesquisar os anos que estão cadastrados.
   2. no body
      * mais na parte superior, uma descrição breve sobre o objetivo do projeto.
      * abaixo da descrição do projeto, uma div com um carrossel de objetos, no formato de pequenas cartas, representando os anos que já foram cadastrados (2020 até 2025). Ele deve ter uma seta em cada direção para o usuário passar para a "próxima" carta ou voltar uma.
      * o usuário deve ser capaz de clicar nas cartas e, ao clicar, ser direcionado para a página própria daquela carta.
      * se o usuário pesquisar um ano que não está cadastrado (portanto não está no carrossel), no lugar do carrossel deve aparecer a mensagem de "_Jogos ainda não cadastrados. Entre em contato se tiver os dados referentes a esse ano._"

2. CSS
   * tema claro
     * fundo claro, mas que não canse de ficar olhando.
     * letras predominante pretas, para dar contraste com o fundo.
     * cor de destaque para elementos: branco
     * cor secundária para elementos: azul escuro
   * tema escuro
     * fundo escuro, mas que não canse de ficar olhando.
     * letras predominante brancas, para dar contraste com o fundo.
     * cor de destaque para elementos: azul escuro, mas que consiga ser observado facilmente em um fundo escuro
     * cor secundária para elementos: branco, mas não vibrante para não dar destaque de mais.