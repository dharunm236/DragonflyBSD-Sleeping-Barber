Problema do Barbeiro Dorminhoco
===============================

O Problema do Barbeiro Dorminhoco é um Recurso Educacional Aberto (REA) desenvolvido para
o curso de Sistemas Operacionais I da Universidade de São Paulo (USP), campus São Carlos.

O projeto tem como objetivo complementar a experiência do curso, tanto para professores
como alunos, disponibilizando ferramentas que auxiliam no entendimento de um problema
*quase* clássico de *comunicação inter-processos* e *sincronização*. Entre os recursos
disponíveis estão: explicação do problema e conceitos necessários para seu entendimento,
elaboração de uma das possíveis soluções e os conceitos necessários para o entendimento desta,
uma ferramenta de visualização demonstrando o estado da aplicação a cada passo, e uma 
implementação em C da solução proposta (também usada para a visualização).

Dependências
------------

Um navegador capaz de executar JavaScript.

Instalação
----------

Para instalar o REA basta clonar esse repositório e abrir o `index.html` no navegador.

Uso
---

Para usar o REA, basta navegar pelas entradas no menu de navegação no topo da página. A
maioria das páginas é composta de texto ou código comentado, exceto pela ferramenta de
visualização que tem seu funcionamento e uso explicados abaixo.

A ferramenta de visualização é usada para demonstrar o estado da implementação de uma
solução para o problema em cada passo. O passo usado na visualização é arbitrário e tenta
simular as ações do escalonador.

Estão representados na visualização a sala de espera, onde ficam os clientes esperando para
serem atendidos; a cadeira do barbeiro, onde fica o cliente atualmente sendo atendido; o
estado da aplicação, mostrando o estado dos semáforos do barbeiro e consumidor, o estado do
mutex e quantos clientes estão em espera.
Logo abaixo, o status da aplicação é representado por uma frase, indicando resumidamente
o que está ocorrendo no passo atual da aplicação.

A parte inferior da visualização é ocupada pelo código das duas funções, o qual tem suas
linhas realçadas para indicar as linhas executadas em cada passo, terminando na linha em que
a cada função está ao final do passo.

Os rótulos coloridos no título do painel do código indicam o estado das threads executando
as funções. Apenas uma das duas funções está ativa a cada passo, indicado pela etiqueta azul,
o que representa a thread selecionada pelo escalonador. As tags verde e amarela indicam,
respectivamente, se a função está rodando (mesmo que não esteja escalonada) ou esperando em
um dos semáforos/mutex. A etiqueta cinza na função cliente indica qual o cliente está tendo
o código executado no passo.

Contribuições
-------------

Contribuições de código devem seguir as convenções adotadas pelo projeto.

Contribuições de traduções são altamente encorajadas para que o projeto tenha maior alcance.

Correções são sempre bem-vindas!

Recursos
--------

Recursos usados no projeto:

* [Bootstrap](http://getbootstrap.com/)
* [Font Awesome](http://fontawesome.io/)
* [jQuery](http://jquery.com/)
* [Prism](http://prismjs.com/)

Licensa
-------
O código está licenciado sob a licensa MIT.