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

# Elicitação e análise
# de requisitos

<p class="subtitle">Elicitar é investigar e construir entendimento com os interessados, e não apenas perguntar o que eles querem.</p>

<div class="byline">
  <strong>Prof. Victor Brayner</strong>
  <span>ads · 2026.2</span>
</div>

---

<div class="eyebrow">PONTO DE PARTIDA</div>

# O gestor pediu um sistema para reduzir filas

<div class="stack">
<div class="two-col">
  <div class="col">
    <span class="label">A demanda, como chegou</span>
    <p>O gestor precisa de um sistema para reduzir filas. O pedido nomeia uma solução e um objetivo, e poupa o resto: nada sobre onde o tempo se perde, quais etapas travam ou quem mede o tamanho da fila.</p>
    <ul class="list tight">
      <li>o pedido entra pronto, como se faltasse só construir;</li>
      <li>nenhuma fonte foi ouvida antes dele;</li>
      <li>“fila” pode significar coisas diferentes para cada pessoa.</li>
    </ul>
  </div>
  <div class="col">
    <span class="label">O que aceitar o pedido pressupõe</span>
    <ul class="list tight">
      <li>que a fila é o problema, e não sintoma de outro;</li>
      <li>que um sistema resolve, e não processo, gente ou regra;</li>
      <li>que a solução já é conhecida, e a investigação é desperdício.</li>
    </ul>
    <p class="muted">Três pressupostos, nenhum confirmado com quem atende, quem espera, quem decide ou quem paga.</p>
  </div>
</div>

<div class="panel c-orange">
  <span class="label">O que existe entre o pedido e o projeto</span>
  <p>Uma investigação: onde o tempo se perde, que exceções aparecem, que regras atravessam o atendimento. Perguntas que investigam o processo são diferentes de perguntas que já pressupõem a solução.</p>
</div>
</div>

<div class="callout">
  <span class="tag">PERGUNTAS GUIA</span>
  O que você perguntaria antes de aceitar essa demanda? E como separar as perguntas que investigam das que já sugerem a resposta?
</div>

---

<div class="eyebrow">TESE</div>

# Elicitar é investigar, e não coletar pedidos

<div class="panel c-teal">
  <span class="label">O que a elicitação faz</span>
  <p>Descobrir, compreender e esclarecer necessidades, expectativas, regras, restrições e contexto. As fontes vão além da conversa: pessoas, documentos, sistemas existentes, observação de processos, dados operacionais e normas.</p>
</div>

<div class="panel c-orange">
  <span class="label">Por que o pedido não basta</span>
  <p>O stakeholder nem sempre consegue descrever o requisito: pode oferecer uma solução desejada, um sintoma, uma exceção ou uma regra tácita. A investigação aprofunda o contexto em vez de aceitar a primeira frase.</p>
</div>

<div class="quote closer">
  <div class="text">“Elicitar é investigar e construir entendimento com os interessados, não apenas perguntar o que eles querem.”</div>
  <div class="author">TESE DA AULA</div>
</div>

---

<!-- _class: section-divider -->

<div class="part">PARTE 01 / 04</div>

# Preparar a investigação

<div class="topic-list cols-3">
  <div class="topic"><span class="n">01</span><span>Quem importa</span></div>
  <div class="topic"><span class="n">02</span><span>Influência e conhecimento</span></div>
  <div class="topic"><span class="n">03</span><span>Onde está a informação</span></div>
</div>

---

<div class="eyebrow">PREPARAÇÃO</div>

# Antes de perguntar, mapear quem importa

<div class="two-col">
  <div class="col">
    <span class="label">Perguntas de preparação</span>
    <ul class="list tight">
      <li>quem executa o processo?</li>
      <li>quem decide sobre a mudança?</li>
      <li>quem recebe o resultado?</li>
      <li>quem opera ou mantém a solução?</li>
      <li>quem sofre consequências indiretas?</li>
      <li>quem define regras ou restrições?</li>
    </ul>
  </div>
  <div class="col">
    <span class="label">O que registrar de cada um</span>
    <ul class="list tight">
      <li>interesse no resultado;</li>
      <li>influência sobre a decisão;</li>
      <li>conhecimento do processo;</li>
      <li>disponibilidade para conversar;</li>
      <li>risco de má representação.</li>
    </ul>
    <p class="muted">Uma matriz simples com essas colunas já evita a armadilha do próximo quadro.</p>
  </div>
</div>

<div class="panel c-orange closer">
  <span class="label">ARMADILHA</span>
  <p>Influência hierárquica não é sinônimo de conhecimento operacional: quem decide raramente é quem sabe onde o processo engasga.</p>
</div>

---

<!-- _class: section-divider -->

<div class="part">PARTE 02 / 04</div>

# Técnicas de elicitação

<div class="topic-list cols-3">
  <div class="topic"><span class="n">01</span><span>Entrevista</span></div>
  <div class="topic"><span class="n">02</span><span>Questionário</span></div>
  <div class="topic"><span class="n">03</span><span>Workshop</span></div>
</div>

---

<div class="eyebrow">ENTREVISTA</div>

# Entrevistar é investigar exceções e motivações

<div class="two-col">
  <div class="col">
    <span class="label">Como conduzir</span>
    <p>Explorar experiências, exceções e motivações em profundidade; a entrevista pode ser estruturada, semiestruturada ou aberta.</p>
    <ul class="list tight">
      <li>preparar objetivo e roteiro flexível;</li>
      <li>começar com perguntas abertas;</li>
      <li>pedir exemplos concretos;</li>
      <li>explorar exceções e frequência;</li>
      <li>confirmar entendimento com paráfrase;</li>
      <li>registrar evidências, decisões e dúvidas.</li>
    </ul>
  </div>
  <div class="col">
    <span class="label">Perguntas que funcionam</span>
    <ul class="list dash">
      <li>“conte como você realiza essa atividade hoje.”</li>
      <li>“o que costuma dar errado?”</li>
      <li>“o que acontece quando o caso foge do fluxo normal?”</li>
      <li>“como você sabe que a tarefa foi concluída?”</li>
      <li>“quem precisa ser informado?”</li>
    </ul>
  </div>
</div>

<div class="notice closer">
  <span class="notice-title">EVITE ESTA PERGUNTA</span>
  “Você concorda que o sistema deveria automatizar isso?” A pergunta já sugere a solução, e a resposta que se quer ouvir vem junto.
</div>

---

<div class="eyebrow">ESCALA E PROFUNDIDADE</div>

# Escala e profundidade pedem técnicas diferentes

<div class="two-col">
  <div class="col">
    <span class="label">Questionário</span>
    <p>Alcança muitos participantes e permite comparar respostas, quando as perguntas são relativamente estáveis.</p>
    <ul class="list tight">
      <li>linguagem simples, uma ideia por pergunta;</li>
      <li>opções equilibradas, com alternativa “outro”;</li>
      <li>teste-piloto antes de aplicar;</li>
      <li>cuidado com amostras enviesadas e com a não resposta.</li>
    </ul>
    <p class="muted">Explorar assunto desconhecido em profundidade não é o ponto forte dele.</p>
  </div>
  <div class="col">
    <span class="label">Workshop</span>
    <p>Reúne stakeholders para construir entendimento compartilhado, mapear processos, explorar alternativas e resolver divergências.</p>
    <ul class="list tight">
      <li>exige facilitação, objetivo claro e regras de participação;</li>
      <li>precisa de registro e de fechamento de decisões;</li>
      <li>riscos: pessoas dominantes, hierarquia que inibe, consenso superficial, ausência de quem executa.</li>
    </ul>
  </div>
</div>

<div class="panel c-teal closer">
  <span class="label">AS TÉCNICAS SE COMBINAM</span>
  <p>Questionário mede, entrevista aprofunda, workshop negocia: o mesmo problema cabe nos três, em momentos diferentes da investigação.</p>
</div>

---

<div class="eyebrow">COMPARAÇÃO</div>

# O mesmo problema, três caminhos de investigação

<p class="subtitle">O pedido de reduzir filas, aplicado às três técnicas: cada linha muda o tipo de resposta que sai.</p>

| Técnica | No problema das filas | O que revela melhor |
|---|---|---|
| Entrevista | conversa com quem atende no balcão | exceções, motivações e o fluxo real |
| Questionário | mede quais etapas geram mais dificuldade, com muita gente | escala e comparação entre respondentes |
| Workshop | atendimento, gestão e TI mapeiam o processo juntos | divergências negociadas e acordo de escopo |

<div class="notice closer">
  <span class="notice-title">LEITURA</span>
  Nenhuma técnica substitui as outras: a escolha declara que tipo de ignorância se quer reduzir primeiro.
</div>

---

<!-- _class: section-divider -->

<div class="part">PARTE 03 / 04</div>

# Análise e conflitos

<div class="topic-list cols-3">
  <div class="topic"><span class="n">01</span><span>Da informação ao entendimento</span></div>
  <div class="topic"><span class="n">02</span><span>Conflito legítimo</span></div>
  <div class="topic"><span class="n">03</span><span>Decidir com contexto</span></div>
</div>

---

<div class="eyebrow">ANÁLISE</div>

# Da informação coletada ao entendimento negociado

<p class="subtitle">O que acontece entre a última entrevista e a primeira versão dos requisitos.</p>

<div class="steps cols-4">
  <div class="step">
    <span class="n">01</span>
    <h3>Agrupar</h3>
    <p>evidências organizadas por tema.</p>
  </div>
  <div class="step">
    <span class="n">02</span>
    <h3>Distinguir</h3>
    <p>fatos, interpretações e propostas separados.</p>
  </div>
  <div class="step">
    <span class="n">03</span>
    <h3>Identificar</h3>
    <p>lacunas que ninguém cobriu.</p>
  </div>
  <div class="step">
    <span class="n">04</span>
    <h3>Detectar</h3>
    <p>termos com mais de um sentido.</p>
  </div>
  <div class="step">
    <span class="n">05</span>
    <h3>Comparar</h3>
    <p>perspectivas entre stakeholders.</p>
  </div>
  <div class="step">
    <span class="n">06</span>
    <h3>Localizar</h3>
    <p>conflitos e dependências.</p>
  </div>
  <div class="step">
    <span class="n">07</span>
    <h3>Registrar</h3>
    <p>questões que ficaram em aberto.</p>
  </div>
  <div class="step">
    <span class="n">08</span>
    <h3>Validar</h3>
    <p>sínteses com os envolvidos.</p>
  </div>
</div>

<div class="notice closer">
  <span class="notice-title">PARA ANOTAR</span>
  A análise não encerra em relatório: a síntese volta às fontes para ser confirmada, corrigida ou negada.
</div>

---

<div class="eyebrow">CONFLITO</div>

# Conflito é alvo de investigação, não de autoridade

<div class="cards cols-2">
  <div class="card tint c-orange">
    <h3>“Toda compra exige aprovação do gestor.”</h3>
    <p>Quem fala: financeiro, em nome do controle e da auditoria. Sem aprovação, não há rastro nem prestação de contas.</p>
  </div>
  <div class="card tint c-teal">
    <h3>“Compras urgentes concluem sem aguardar aprovação.”</h3>
    <p>Quem fala: operação, em nome do prazo que o serviço exige. Esperar a aprovação pode custar mais caro que a própria compra.</p>
  </div>
</div>

<span class="label">O que investigar antes de decidir</span>
<ul class="list dash">
  <li>o que define urgência, e quem pode declará-la;</li>
  <li>limites monetários e risco envolvido em cada faixa;</li>
  <li>legislação e normas aplicáveis ao caso;</li>
  <li>mecanismos de auditoria que preservem os dois objetivos.</li>
</ul>

<div class="notice closer">
  <span class="notice-title">COMO NÃO DECIDIR</span>
  Escolher a fala do cargo mais alto encerra a discussão sem resolver o conflito: os dois objetivos são legítimos, e a decisão precisa de contexto explícito e registrado.
</div>

---

<!-- _class: section-divider -->

<div class="part">PARTE 04 / 04</div>

# Prática e uso crítico de IA

<div class="topic-list cols-3">
  <div class="topic"><span class="n">01</span><span>Entrevista simulada</span></div>
  <div class="topic"><span class="n">02</span><span>IA como apoio</span></div>
  <div class="topic"><span class="n">03</span><span>O que continua humano</span></div>
</div>

---

<div class="eyebrow">EXERCÍCIO · ENTREVISTA SIMULADA</div>

# Simular uma entrevista de elicitação

<div class="two-col">
  <div class="col">
    <span class="label">Os três papéis da simulação</span>
    <ul class="list tight">
      <li><strong>entrevistador</strong>: conduz a conversa e pergunta;</li>
      <li><strong>stakeholder</strong>: vive o processo, como o operador do estacionamento;</li>
      <li><strong>observador</strong>: registra perguntas indutivas, lacunas e confirmações.</li>
    </ul>
    <p class="muted">O alvo do entrevistador: compreender o fluxo atual, os problemas, as exceções, as informações necessárias e os critérios de sucesso.</p>
  </div>
  <div class="col">
    <span class="label">A ficha de elicitação</span>
    <ol class="list ordered">
      <li>objetivo da entrevista;</li>
      <li>perfil do stakeholder entrevistado;</li>
      <li>pelo menos seis perguntas;</li>
      <li>três evidências ou informações obtidas;</li>
      <li>duas dúvidas que permanecem;</li>
      <li>um conflito ou risco identificado;</li>
      <li>síntese validável, separando fala, interpretação e hipótese.</li>
    </ol>
  </div>
</div>

<div class="notice closer">
  <span class="notice-title">AUTOVERIFICAÇÃO</span>
  As perguntas são abertas e neutras? Evidência e inferência estão separadas na ficha? O que a conversa deixou de fora?
</div>

---

<div class="eyebrow">IA COMO APOIO</div>

# IA organiza informação; validação continua humana

<span class="label">O que a IA faz bem</span>
<ul class="list dash tight">
  <li>transformar notas em tópicos e temas recorrentes;</li>
  <li>sugerir perguntas de aprofundamento;</li>
  <li>identificar termos vagos e contradições aparentes;</li>
  <li>gerar a primeira versão de atas e histórias.</li>
</ul>

<span class="label">O que pode dar errado</span>
<ul class="list dash tight">
  <li>inventar detalhes que ninguém disse;</li>
  <li>eliminar nuances que importavam;</li>
  <li>confundir frequência com importância;</li>
  <li>apresentar hipótese como fato.</li>
</ul>

<p class="muted">Comparação de estudo: confrontar as próprias notas de um cenário fictício com uma síntese de IA, marcando o que é sustentado, o que é inferência, o que foi inventado e o que precisa voltar ao stakeholder.</p>

<div class="quote closer">
  <div class="text">“IA acelera a construção. A Engenharia de Requisitos garante que estamos construindo a coisa certa.”</div>
  <div class="author">LINHA TRANSVERSAL DA AULA</div>
</div>

---

<!-- _class: title -->

<div class="eyebrow">SÍNTESE</div>

# Elicitar é investigar
# com quem usa o sistema.

<p class="subtitle">Próxima aula: requisitos em contextos ágeis, histórias de usuário, critérios de aceitação e priorização.</p>

<div class="byline">
  <strong>Prof. Victor Brayner</strong>
  <span>engenharia de requisitos, testes e qualidade · unidade I</span>
</div>
