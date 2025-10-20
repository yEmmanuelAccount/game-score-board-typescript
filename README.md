# 🏆 Game Score Board - Placar dos Jogos Escolares

## 🚀 Objetivo

$\quad$ Registrar de forma mais visual e interativa os Jogos Escolares anuais entre dois times: Azul e Branco. O projeto visa transformar dados brutos de pontuação em uma experiência visual rica, com foco na navegação temporal e análise de desempenho.

## 🛠️ Tecnologias Utilizadas 

| Tecnologia | Finalidade |
| :--------: | :--------- |
| TypeScript | Lógica da aplicação, tipagem estática e modularização. | 
| HTML | Estrutura semântica do projeto. |
| CSS | Estilização, responsividade e suporte a temas (Claro/Escuro).... | 
| Gráficos | (biblioteca de gráficos ainda não decidida. ex: Chart.js, D3.js) | 

## ✨ Funcionalidades Principais

### 1. Navegação e Acesso aos Dados (Home Page)
* **Busca Rápida**: O usuário pode pesquisar diretamente por um ano específico através da barra de pesquisa no cabeçalho.
* **Carrossel de Anos**: A página inicial apresenta um carrossel interativo que exibe cartões para cada ano de competição registrado, permitindo uma navegação visual e fluida.

### 2. Página de Análise do Ano (Placar Detalhado)

$\quad$ Ao selecionar um ano, o usuário é direcionado para uma página detalhada que oferece uma visão profunda daquela temporada:

#### 2.1. Estrutura de Pontuação

* **Regras Claras**: Uma breve explicação detalha a mecânica de pontuação daquele ano, definindo quantos pontos são concedidos por vitória/empate em diferentes categorias esportivas.
  * Exemplo: Esportes Individuais (10 pontos p/ vencedor, 0 p/ perdedor); Esportes de Equipe (20 pontos p/ vencedor, 10 p/ perdedor).

#### 2.2. Visualização e Linha do Tempo

* **Gráfico de Linha de Pontuação**: Um gráfico interativo exibe a soma de pontos acumulados por cada time (Eixo Y), mapeada ao longo da linha do tempo de jogos (Eixo X).

* **Linha do Tempo Vertical**: Uma navegação vertical, ordenada cronologicamente, organiza todos os eventos da competição:
  * **Tópicos (Eventos/Modalidades)**: Agrupados por Dia/Mês — Horas:Minutos. Cada tópico mostra o somatório total de pontos feitos por cada time naquele evento.
  * **Subtópicos (Jogos)**: Dentro de cada modalidade, são listados os jogos individuais (ex: Jogo 1, Jogo 2). Cada subtópico exibe o placar final e a pontuação concedida a cada time.

### 3. Acesso de Administrador (Futuro)

**Edição Direta**: Usuários com permissão de administrador podem clicar em um jogo específico na linha do tempo para serem redirecionados a uma página de edição. Isso permitirá a inserção ou correção de placares e pontuações de forma dinâmica.

# a

