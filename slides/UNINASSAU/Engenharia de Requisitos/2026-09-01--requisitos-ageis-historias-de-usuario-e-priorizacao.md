---
marp: true
theme: campus-dev
size: 16:9
paginate: true
html: true
footer: 'ENGENHARIA DE REQUISITOS, TESTES E QUALIDADE · UNIDADE I'
---

<!-- _class: title -->

<div class="eyebrow">ENGENHARIA DE REQUISITOS, TESTES E QUALIDADE · UNIDADE I</div>

# Requisitos ágeis: histórias
# de usuário e priorização

<p class="subtitle">Em ambientes ágeis, requisitos evoluem por conversas, exemplos, priorização e feedback.</p>

<div class="byline">
  <strong>Prof. Victor Brayner</strong>
  <span>ads · 2026.2</span>
</div>

---

<div class="eyebrow">PONTO DE PARTIDA</div>

# Por que não congelar tudo antes de começar?

<div class="stack">
<div class="two-col">
  <div class="col">
    <span class="label">O que o documento congelado promete</span>
    <p>Escopo completo, decidido por quem sabe, imune a mudança: escrever tudo antes de começar parece o caminho mais seguro do projeto.</p>
    <ul class="list tight">
      <li>todas as decisões de uma vez, no início;</li>
      <li>nenhuma conversa durante o desenvolvimento;</li>
      <li>mudança tratada como falha do plano original.</li>
    </ul>
  </div>
  <div class="col">
    <span class="label">O que atravessa o projeto enquanto isso</span>
    <p>O feedback chega, o negócio muda de prioridade, o uso revela o que ninguém previu. E o custo de aprender tarde cresce com o tempo.</p>
    <ul class="list tight">
      <li>requisitos viram código antes de qualquer validação;</li>
      <li>as mudanças chegam sem processo para recebê-las;</li>
      <li>o documento envelhece longe do código.</li>
    </ul>
  </div>
</div>

<div class="panel c-orange">
  <span class="label">O que a abordagem ágil procura</span>
  <p>Reduzir o custo de aprender tarde, e não eliminar a análise: o entendimento é refinado aos poucos, com informação suficiente para decidir e construir a próxima entrega.</p>
</div>
</div>

<div class="callout">
  <span class="tag">PERGUNTAS GUIA</span>
  Se sabemos o que o usuário precisa, por que não escrever um documento enorme e congelar tudo antes de começar?
</div>

---

<div class="eyebrow">TESE</div>

# A história é um convite à conversa

<div class="two-col">
  <div class="col">
    <span class="label">O que muda no requisito</span>
    <ul class="list tight">
      <li>ciclos curtos e feedback frequente, com entregas parciais de valor;</li>
      <li>entendimento refinado progressivamente: informação suficiente para decidir e construir a próxima entrega;</li>
      <li>documentação proporcional ao risco, à complexidade, à criticidade e à necessidade de comunicação;</li>
      <li>“ágil” não é sinônimo de “não documentar”.</li>
    </ul>
  </div>
  <div class="col">
    <span class="label">O que continua igual</span>
    <p>Descobrir com stakeholders, negociar conflitos, validar entendimento: as perguntas das aulas anteriores continuam valendo. Muda o ritmo com que elas voltam, e o formato da resposta.</p>
    <ul class="list dash tight">
      <li>necessidade vira história, e não documento congelado;</li>
      <li>validação vira critério de aceitação, e não reunião única;</li>
      <li>mudança vira refinamento de backlog, e não falha a esconder.</li>
    </ul>
  </div>
</div>

<div class="quote closer">
  <div class="text">“A história de usuário é um convite à colaboração, e não uma especificação completa por si só.”</div>
  <div class="author">TESE DA AULA</div>
</div>

---

<!-- _class: section-divider -->

<div class="part">PARTE 01 / 04</div>

# Histórias de usuário

<div class="topic-list cols-3">
  <div class="topic"><span class="n">01</span><span>Como, quero, para</span></div>
  <div class="topic"><span class="n">02</span><span>Ruim e melhor</span></div>
  <div class="topic"><span class="n">03</span><span>Épico em capacidades</span></div>
</div>

---

<div class="eyebrow">ESTRUTURA</div>

# Como, quero, para explicita usuário e valor

<div class="equation">como [tipo de usuário], quero [capacidade], para [benefício]</div>

<div class="two-col">
  <div class="col">
    <span class="label">A estrutura em uso</span>
    <p>“Como estudante, quero consultar o status da minha matrícula para saber se preciso corrigir alguma pendência.”</p>
    <ul class="list tight">
      <li>quem: o tipo de usuário está explícito;</li>
      <li>o quê: uma capacidade, e não uma tela;</li>
      <li>por quê: o benefício está nomeado.</li>
    </ul>
  </div>
  <div class="col">
    <span class="label">O molde não garante qualidade</span>
    <p>“Como usuário, quero um sistema melhor.” Usuário genérico, capacidade vaga, benefício ausente: a frase segue a sintaxe e não diz nada.</p>
    <p class="muted">Cada posição precisa responder a uma pergunta de verdade; senão é preenchimento de formulário.</p>
  </div>
</div>

<div class="notice closer">
  <span class="notice-title">PARA ANOTAR</span>
  A história abre a conversa: o detalhe que falta mora na conversa com quem usa, e não em mais adjetivos no cartão.
</div>

---

<div class="eyebrow">REFINAMENTO</div>

# Um épico vira capacidades menores

<p class="subtitle">Do épico “acompanhar a vida acadêmica” para capacidades que cabem em uma conversa.</p>

<div class="cards cols-4">
  <div class="card">
    <span class="n">01</span>
    <h3>Consultar notas</h3>
    <p>Acompanhar o desempenho nas disciplinas cursadas.</p>
  </div>
  <div class="card">
    <span class="n">02</span>
    <h3>Acompanhar matrícula</h3>
    <p>Saber em que pé está a solicitação, sem procurar a secretaria.</p>
  </div>
  <div class="card">
    <span class="n">03</span>
    <h3>Visualizar faltas</h3>
    <p>Cuidar do limite de presença antes que ele vire problema.</p>
  </div>
  <div class="card">
    <span class="n">04</span>
    <h3>Solicitar declaração</h3>
    <p>Pedir o documento sem deslocamento até o balcão.</p>
  </div>
</div>

<div class="panel c-teal closer">
  <span class="label">O QUE CADA CAPACIDADE AINDA PRECISA</span>
  <p>Conversa sobre regras, critérios de aceitação e prioridade: decompor organiza o trabalho, e não encerra o entendimento.</p>
</div>

---

<!-- _class: section-divider -->

<div class="part">PARTE 02 / 04</div>

# Critérios de aceitação

<div class="topic-list cols-3">
  <div class="topic"><span class="n">01</span><span>Dado, quando, então</span></div>
  <div class="topic"><span class="n">02</span><span>Fluxos alternativos</span></div>
  <div class="topic"><span class="n">03</span><span>História, tarefa e critério</span></div>
</div>

---

<div class="eyebrow">CRITÉRIOS</div>

# Critérios de aceitação tornam a história verificável

<p class="subtitle">Condições que precisam estar satisfeitas para a história ser aceita: claras, observáveis, ligadas ao comportamento esperado.</p>

<div class="cards cols-3">
  <div class="card">
    <span class="n">01</span>
    <h3>Dado</h3>
    <p>que o estudante possui uma solicitação registrada.</p>
  </div>
  <div class="card">
    <span class="n">02</span>
    <h3>Quando</h3>
    <p>acessa a área “Minhas solicitações”.</p>
  </div>
  <div class="card">
    <span class="n">03</span>
    <h3>Então</h3>
    <p>o sistema apresenta status, data e protocolo.</p>
  </div>
</div>

<span class="label">Outros cenários que os critérios devem cobrir</span>
<ul class="list dash">
  <li>ausência de solicitações registradas;</li>
  <li>erro de carregamento da área;</li>
  <li>acesso não autorizado;</li>
  <li>fluxo principal, alternativos e exceções, conforme o escopo e o risco.</li>
</ul>

<div class="notice closer">
  <span class="notice-title">PARA ANOTAR</span>
  Critério de aceitação não é caso de teste completo: serve de base para elaborá-los depois.
</div>

---

<div class="eyebrow">TRÊS ARTEFATOS</div>

# História, critério e tarefa têm papéis distintos

<div class="cards cols-3">
  <div class="card">
    <span class="n">01</span>
    <h3>História</h3>
    <p>Necessidade ou capacidade orientada ao usuário e ao valor que ela traz.</p>
    <p>Responde a “para que serve isto na vida de quem usa?”</p>
  </div>
  <div class="card">
    <span class="n">02</span>
    <h3>Critério de aceitação</h3>
    <p>Condição que define o comportamento aceitável e observável.</p>
    <p>Responde a “como se sabe que está pronto?”</p>
  </div>
  <div class="card">
    <span class="n">03</span>
    <h3>Tarefa técnica</h3>
    <p>Trabalho necessário para implementar ou sustentar: criar endpoint, ajustar índice, configurar log.</p>
    <p>Responde a “o que precisa ser feito para existir?”</p>
  </div>
</div>

<div class="notice closer">
  <span class="notice-title">ATENÇÃO</span>
  Solução técnica não é valor do usuário: cada tarefa precisa dizer a qual história ela serve, e o critério não deve ser subjetivo.
</div>

---

<!-- _class: section-divider -->

<div class="part">PARTE 03 / 04</div>

# Priorização e conflitos

<div class="topic-list cols-3">
  <div class="topic"><span class="n">01</span><span>MoSCoW</span></div>
  <div class="topic"><span class="n">02</span><span>Valor e esforço</span></div>
  <div class="topic"><span class="n">03</span><span>Expectativas que competem</span></div>
</div>

---

<div class="eyebrow">PRIORIZAÇÃO</div>

# Must, Should, Could e Won’t ordenam o backlog

<p class="subtitle">Priorizar é ordenar trabalho diante de valor, urgência, risco, dependências, esforço e capacidade. MoSCoW é um ponto de partida, e não uma fórmula.</p>

<div class="cards cols-4">
  <div class="card tint c-orange">
    <span class="n">01</span>
    <h3>Must</h3>
    <p>Sem isto, a entrega não faz sentido. Bloqueia o sucesso do ciclo.</p>
  </div>
  <div class="card tint c-blue">
    <span class="n">02</span>
    <h3>Should</h3>
    <p>Importante, mas tolera atraso sem quebrar a entrega.</p>
  </div>
  <div class="card tint c-teal">
    <span class="n">03</span>
    <h3>Could</h3>
    <p>Agrega valor se houver espaço, tempo e capacidade.</p>
  </div>
  <div class="card tint c-navy">
    <span class="n">04</span>
    <h3>Won’t, neste momento</h3>
    <p>Fora do escopo agora, registrado com o motivo.</p>
  </div>
</div>

<div class="panel c-teal closer">
  <span class="label">O QUE PRIORIZAR NÃO É</span>
  <p>Escolher o pedido do stakeholder mais influente: a decisão precisa de critérios explícitos, transparência e, quando a equipe conhece os componentes, técnicas como valor contra esforço ou WSJF, com limites declarados.</p>
</div>

---

<div class="eyebrow">MAPA DE PRIORIZAÇÃO</div>

# Valor e esforço no mesmo mapa

<div class="media">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 300" role="img" aria-label="Mapa de priorização com eixo horizontal de esforço e eixo vertical de valor; três itens de backlog posicionados de forma ilustrativa.">
    <title>Mapa valor contra esforço</title>
    <desc>Quadrante com eixos de esforço e valor; itens de backlog posicionados de forma ilustrativa para apoiar a conversa de priorização.</desc>
    <line x1="120" y1="240" x2="120" y2="56" stroke="#5b6472" stroke-width="2"  />
    <polygon points="120,46 115,56 125,56" fill="#5b6472" />
    <line x1="120" y1="240" x2="864" y2="240" stroke="#5b6472" stroke-width="2"  />
    <polygon points="874,240 864,235 864,245" fill="#5b6472" />
    <text x="140" y="64" font-family="'Roboto Mono', Consolas, monospace" font-size="12" font-weight="700" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0">valor alto</text>
    <text x="140" y="226" font-family="'Roboto Mono', Consolas, monospace" font-size="12" font-weight="700" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0">valor baixo</text>
    <text x="140" y="268" font-family="'Roboto Mono', Consolas, monospace" font-size="12" font-weight="700" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0">esforço baixo</text>
    <text x="780" y="268" font-family="'Roboto Mono', Consolas, monospace" font-size="12" font-weight="700" fill="#5b6472" text-anchor="end" dominant-baseline="middle" letter-spacing="0">esforço alto</text>
    <circle cx="500" cy="90" r="7" fill="#1e88e5" />
    <text x="516" y="86" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="13.5" font-weight="400" fill="#1f2937" text-anchor="start" dominant-baseline="middle" letter-spacing="0">consultar status da matrícula</text>
    <circle cx="250" cy="175" r="7" fill="#1e88e5" />
    <text x="266" y="171" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="13.5" font-weight="400" fill="#1f2937" text-anchor="start" dominant-baseline="middle" letter-spacing="0">alterar telefone de contato</text>
    <circle cx="700" cy="140" r="7" fill="#1e88e5" />
    <text x="716" y="136" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="13.5" font-weight="400" fill="#1f2937" text-anchor="start" dominant-baseline="middle" letter-spacing="0">indicadores para o gestor</text>
  </svg>
  <div class="caption">Posições ilustrativas para a discussão: riscos e dependências ficam anotados à parte do mapa.</div>
</div>

<div class="notice closer">
  <span class="notice-title">O QUE TROCA A ORDEM</span>
  Dependência e risco mudam a ordem intuitiva: um item pequeno pode ter que esperar outro maior, e um risco alto pode pular a fila.
</div>

---

<div class="eyebrow">CONFLITO</div>

# Duas expectativas legítimas podem competir

<div class="cards cols-2">
  <div class="card tint c-orange">
    <h3>“Alteração livre da matrícula até o início das aulas.”</h3>
    <p>Quem pede: estudantes, em nome da flexibilidade de ajustar a própria agenda.</p>
  </div>
  <div class="card tint c-teal">
    <h3>“Congelar a turma após a publicação do horário.”</h3>
    <p>Quem pede: secretaria e docentes, em nome do planejamento e da alocação de salas.</p>
  </div>
</div>

<span class="label">O que investigar antes de decidir</span>
<ul class="list dash">
  <li>a janela temporal de cada regra;</li>
  <li>quem tem autoridade para cada mudança;</li>
  <li>impacto em alocação de salas e docentes;</li>
  <li>exceções legítimas, e como registrá-las.</li>
</ul>

<div class="notice closer">
  <span class="notice-title">PERGUNTA GUIA</span>
  As duas declarações são necessariamente incompatíveis, ou a janela, a autoridade e as exceções decidem o caso?
</div>

---

<!-- _class: section-divider -->

<div class="part">PARTE 04 / 04</div>

# Oficina de backlog e IA

<div class="topic-list cols-3">
  <div class="topic"><span class="n">01</span><span>Refinar o backlog</span></div>
  <div class="topic"><span class="n">02</span><span>Priorizar com critério</span></div>
  <div class="topic"><span class="n">03</span><span>IA sob revisão</span></div>
</div>

---

<div class="eyebrow">EXERCÍCIO · REFINAMENTO DE BACKLOG</div>

# Refinar e priorizar um backlog

<div class="two-col">
  <div class="col">
    <span class="label">Backlog inicial do portal acadêmico</span>
    <ol class="list ordered">
      <li>estudante consulta status da matrícula;</li>
      <li>secretaria exporta lista de pendências;</li>
      <li>estudante recebe aviso de documentação incompleta;</li>
      <li>gestor visualiza indicadores de solicitações;</li>
      <li>estudante altera telefone de contato.</li>
    </ol>
    <p class="muted">Não há ordem única: a resposta boa é a que explicita critérios e dependências.</p>
  </div>
  <div class="col">
    <span class="label">O que produzir</span>
    <ul class="list tight">
      <li>escrever três histórias com usuário, capacidade e valor;</li>
      <li>criar dois critérios de aceitação por história;</li>
      <li>propor uma priorização e justificar com critérios;</li>
      <li>identificar uma dependência e um conflito potencial;</li>
      <li>apontar uma informação a confirmar com stakeholder.</li>
    </ul>
  </div>
</div>

<div class="notice closer">
  <span class="notice-title">AUTOVERIFICAÇÃO</span>
  A ordem tem critérios explícitos? As dependências estão visíveis? O que ainda depende de conversa com o stakeholder?
</div>

---

<div class="eyebrow">IA E REQUISITOS ÁGEIS</div>

# IA sugere histórias; valor de negócio não se delega

<div class="two-col">
  <div class="col">
    <span class="label">O que a IA pode</span>
    <ul class="list tight">
      <li>sugerir histórias a partir de descrições;</li>
      <li>dividir épicos em capacidades menores;</li>
      <li>propor critérios e gerar cenários;</li>
      <li>rascunhar o primeiro backlog.</li>
    </ul>
    <p class="muted">A saída entra como rascunho, com marcação de origem para cada item.</p>
  </div>
  <div class="col">
    <span class="label">O que exige o profissional</span>
    <ul class="list tight">
      <li>verificar qual informação veio do contexto;</li>
      <li>separar o que foi inferido do que foi dito;</li>
      <li>apontar o que está ausente;</li>
      <li>definir quem pode validar;</li>
      <li>declarar qual decisão de negócio não pode ser delegada.</li>
    </ul>
  </div>
</div>

<span class="label">Comparação de estudo</span>
<ul class="list dash">
  <li>confrontar uma solicitação vaga com um conjunto de requisitos conhecido;</li>
  <li>marcar o que a IA repetiu, organizou, inferiu, inventou e deixou de perguntar;</li>
  <li>usar contexto fictício, sem dados pessoais ou informações institucionais sensíveis.</li>
</ul>

<div class="panel c-orange closer">
  <span class="label">O QUE A IA NÃO DECIDE</span>
  <p>Usuários fictícios, regras não fornecidas e premissas indevidas aparecem com aparência de requisito: a elaboração acelera, e a validação de valor continua com quem conhece o negócio.</p>
</div>

---

<!-- _class: title -->

<div class="eyebrow">SÍNTESE</div>

# Conversa, exemplo
# e decisão com critério.

<p class="subtitle">Próxima aula: representar requisitos com casos de uso, diagramas UML e protótipos.</p>

<div class="byline">
  <strong>Prof. Victor Brayner</strong>
  <span>engenharia de requisitos, testes e qualidade · unidade I</span>
</div>
