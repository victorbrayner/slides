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

# Requisitos funcionais
# e não funcionais

<p class="subtitle">Funcionais descrevem o que o sistema faz; não funcionais, com que qualidade e sob quais condições ele opera.</p>

<div class="byline">
  <strong>Prof. Victor Brayner</strong>
  <span>ads · 2026.2</span>
</div>

---

<div class="eyebrow">PONTO DE PARTIDA</div>

# Dois sistemas fazem a mesma consulta

<div class="stack">
<div class="two-col">
  <div class="col">
    <span class="label">O que os dois têm em comum</span>
    <p>Ambos permitem consultar o catálogo da biblioteca. A tela abre, a busca executa, o resultado aparece, nenhum dos dois falha no caminho.</p>
    <ul class="list tight">
      <li>a função oferecida é a mesma;</li>
      <li>as duas implementações cumprem o prometido;</li>
      <li>nas verificações de função, os dois passam.</li>
    </ul>
  </div>
  <div class="col">
    <span class="label">O que separa um do outro</span>
    <p>Um responde em um segundo; o outro leva quarenta. Para quem atende no balcão, um continua útil na pressa; o outro trava o atendimento inteiro.</p>
    <ul class="list tight">
      <li>a experiência de uso muda por completo;</li>
      <li>a viabilidade operacional muda junto;</li>
      <li>nenhuma diferença aparece na frase “permite consultar o catálogo”.</li>
    </ul>
  </div>
</div>

<div class="panel c-orange">
  <span class="label">O que a comparação mostra</span>
  <p>A descrição da função não captura a diferença entre os dois sistemas: ela mora nas condições sob as quais a consulta acontece, e não na consulta em si.</p>
</div>
</div>

<div class="callout">
  <span class="tag">PERGUNTAS GUIA</span>
  O que um sistema deve fazer? E com que qualidade, sob quais condições, para quem?
</div>

---

<div class="eyebrow">TESE</div>

# O que o sistema faz, e com que qualidade faz

| Dimensão | Requisito funcional | Requisito não funcional |
|---|---|---|
| Pergunta | o que o sistema faz? | com que qualidade e condição? |
| Forma comum | ação e resultado | atributo, limite ou restrição |
| Exemplo | registrar um empréstimo | responder a consulta em até 2 segundos |
| Verificação | cenário funcional | métrica, inspeção ou avaliação |

<div class="quote closer">
  <div class="text">“Funcional e não funcional são complementares: um mesmo cenário operacional depende dos dois tipos para fazer sentido.”</div>
  <div class="author">TESE DA AULA</div>
</div>

---

<!-- _class: section-divider -->

<div class="part">PARTE 01 / 04</div>

# Requisitos funcionais

<div class="topic-list cols-3">
  <div class="topic"><span class="n">01</span><span>Serviços e comportamentos</span></div>
  <div class="topic"><span class="n">02</span><span>Ator, condição, ação e resultado</span></div>
  <div class="topic"><span class="n">03</span><span>Amplitude que engana</span></div>
</div>

---

<div class="eyebrow">CONCEITO</div>

# Funcional descreve serviços e comportamentos

<div class="two-col">
  <div class="col">
    <span class="label">O que descreve</span>
    <p>Serviços, comportamentos, respostas e transformações que o sistema deve oferecer em condições específicas, normalmente expressos por ações observáveis.</p>
    <ul class="list tight">
      <li>operações que alguém realiza com o sistema;</li>
      <li>regras que mudam o estado de algo;</li>
      <li>resultados que podem ser conferidos.</li>
    </ul>
  </div>
  <div class="col">
    <span class="label">No sistema de biblioteca</span>
    <ul class="list tight">
      <li>cadastrar um exemplar no acervo;</li>
      <li>registrar o empréstimo de um exemplar disponível;</li>
      <li>impedir novo empréstimo quando o usuário está bloqueado;</li>
      <li>consultar os empréstimos ativos por usuário.</li>
    </ul>
  </div>
</div>

<span class="label">O que o RF deixa em aberto</span>
<ul class="list dash">
  <li>quem pode executar cada operação;</li>
  <li>em que situação a operação é permitida;</li>
  <li>com que rapidez e confiabilidade ela acontece.</li>
</ul>
<p class="muted">As respostas viram requisitos relacionados, e não parágrafos escondidos no mesmo RF.</p>

<div class="notice closer">
  <span class="notice-title">CUIDADO COM A AMPLITUDE</span>
  “Gerenciar livros” é largo demais: a frase não revela quais operações o sistema precisa oferecer, e serve de desculpa para qualquer pedido caber nela.
</div>

---

<div class="eyebrow">ANATOMIA DE UM RF</div>

# Um RF preciso nomeia ator, condição, ação e resultado

<p class="subtitle">Declaração de partida: “O bibliotecário registra o empréstimo de um exemplar disponível.”</p>

<div class="steps cols-4">
  <div class="step">
    <span class="n">01</span>
    <h3>Selecionar</h3>
    <p>O bibliotecário identifica o leitor e o exemplar.</p>
  </div>
  <div class="step">
    <span class="n">02</span>
    <h3>Verificar</h3>
    <p>O sistema confere elegibilidade do leitor e disponibilidade do exemplar.</p>
  </div>
  <div class="step">
    <span class="n">03</span>
    <h3>Registrar</h3>
    <p>Satisfeitas as condições, o empréstimo é gravado.</p>
  </div>
  <div class="step">
    <span class="n">04</span>
    <h3>Atualizar</h3>
    <p>A situação do exemplar passa a refletir o empréstimo.</p>
  </div>
</div>

<span class="label">As perguntas que completam a declaração</span>
<ul class="list dash">
  <li>quem executa a ação, e em que condição?</li>
  <li>qual resultado deve ocorrer, e como ele é observado?</li>
  <li>o que acontece se o exemplar estiver indisponível ou o leitor bloqueado?</li>
</ul>

<div class="panel c-teal closer">
  <span class="label">ATÉ ONDE DETALHAR</span>
  <p>Não transforme toda regra de negócio em detalhe de implementação: o requisito descreve o comportamento esperado; o mecanismo que o realiza é decisão de projeto.</p>
</div>

---

<!-- _class: section-divider -->

<div class="part">PARTE 02 / 04</div>

# Requisitos não funcionais

<div class="topic-list cols-3">
  <div class="topic"><span class="n">01</span><span>Categorias de qualidade</span></div>
  <div class="topic"><span class="n">02</span><span>Exemplos na biblioteca</span></div>
  <div class="topic"><span class="n">03</span><span>A classe segue a formulação</span></div>
</div>

---

<div class="eyebrow">CONCEITO</div>

# Qualidades, condições e restrições da operação

<p class="subtitle">Categorias úteis para começar: nenhuma lista é fechada, e nenhuma categoria é exclusiva.</p>

<div class="cards cols-4">
  <div class="card">
    <span class="n">01</span>
    <h3>Desempenho</h3>
    <p>Tempo de resposta, vazão e capacidade de atender.</p>
  </div>
  <div class="card">
    <span class="n">02</span>
    <h3>Segurança</h3>
    <p>Autenticação, autorização, proteção e auditoria.</p>
  </div>
  <div class="card">
    <span class="n">03</span>
    <h3>Usabilidade</h3>
    <p>Facilidade de aprender e de realizar tarefas.</p>
  </div>
  <div class="card">
    <span class="n">04</span>
    <h3>Confiabilidade</h3>
    <p>Continuidade da operação e recuperação de falhas.</p>
  </div>
  <div class="card">
    <span class="n">05</span>
    <h3>Compatibilidade</h3>
    <p>Interação com plataformas, navegadores e sistemas.</p>
  </div>
  <div class="card">
    <span class="n">06</span>
    <h3>Manutenibilidade</h3>
    <p>Facilidade de compreender, modificar e testar.</p>
  </div>
  <div class="card">
    <span class="n">07</span>
    <h3>Portabilidade</h3>
    <p>Capacidade de operar em ambientes distintos.</p>
  </div>
  <div class="card">
    <span class="n">08</span>
    <h3>Restrições</h3>
    <p>Tecnologia, padrões, legislação e infraestrutura impostas.</p>
  </div>
</div>

<div class="notice closer">
  <span class="notice-title">PARA ANOTAR</span>
  RNF não é capítulo opcional: pode ser condição essencial de aceitação e influenciar arquitetura e decisões desde o primeiro dia do projeto.
</div>

---

<div class="eyebrow">EXEMPLOS E CLASSIFICAÇÃO</div>

# A classificação depende da formulação

<div class="two-col">
  <div class="col">
    <span class="label">Exemplos de RNF na biblioteca</span>
    <ul class="list dash">
      <li>em condições normais, 95% das consultas de catálogo respondem em até 2 segundos;</li>
      <li>somente usuários com perfil de bibliotecário registram devoluções;</li>
      <li>a interface de empréstimo é utilizável em telas de 360 px de largura;</li>
      <li>toda operação de empréstimo deixa registro de auditoria com usuário e horário.</li>
    </ul>
    <p class="muted">Números didáticos: metas precisam de justificativa de negócio e validação com stakeholders.</p>
  </div>
  <div class="col">
    <span class="label">A mesma palavra, formas diferentes</span>
    <p>Segurança aparece como comportamento funcional quando vira regra de autorização, e como RNF quando descreve a proteção global do sistema e sua auditoria.</p>
    <p class="muted">Um RF pode ter condições de desempenho associadas, em declarações relacionadas. Um RNF pode ser avaliado por método qualitativo estruturado, e não apenas por número.</p>
  </div>
</div>

<div class="panel c-orange closer">
  <span class="label">ANTES DE CLASSIFICAR</span>
  <p>Que comportamento ou que atributo está descrito, e em que nível de abstração? A classe segue a formulação, e não a palavra escolhida.</p>
</div>

---

<!-- _class: section-divider -->

<div class="part">PARTE 03 / 04</div>

# Qualidade e verificabilidade

<div class="topic-list cols-3">
  <div class="topic"><span class="n">01</span><span>Atributos da declaração</span></div>
  <div class="topic"><span class="n">02</span><span>Do adjetivo ao critério</span></div>
  <div class="topic"><span class="n">03</span><span>Restrição e preferência</span></div>
</div>

---

<div class="eyebrow">CRITÉRIOS</div>

# Uma boa declaração pode ser analisada e verificada

<div class="two-col">
  <div class="col">
    <span class="label">O que a declaração deve ser</span>
    <ul class="list tight">
      <li>necessária: agrega valor ou evita dano;</li>
      <li>clara: uma só leitura possível;</li>
      <li>completa no contexto: sem lacunas relevantes;</li>
      <li>consistente: sem contradizer as demais.</li>
    </ul>
  </div>
  <div class="col">
    <span class="label">E também deve ser</span>
    <ul class="list tight">
      <li>viável dentro das restrições conhecidas;</li>
      <li>verificável por métrica, inspeção ou avaliação;</li>
      <li>rastreável à origem e aos artefatos relacionados;</li>
      <li>singular: um requisito por declaração.</li>
    </ul>
  </div>
</div>

<span class="label">Testando os atributos em uma frase</span>
<p>“O relatório deve ser rápido.” Necessária, talvez; clara, não: “rápido” muda de significado entre quem emite e quem lê; verificável, menos ainda, sem ambiente, métrica ou limite. Três atributos a recuperar antes de qualquer implementação.</p>

<div class="notice closer">
  <span class="notice-title">PARA ANOTAR</span>
  “Rápido”, “intuitivo”, “seguro” e “moderno” são pistas de expectativa, e não critérios: cada uma precisa virar condição observável antes de virar requisito.
</div>

---

<div class="eyebrow">VERIFICABILIDADE</div>

# “Rápido” ainda não é um critério

<div class="panel c-orange">
  <span class="label">A declaração vaga</span>
  <p>“O sistema deve ser rápido.” Nenhuma parte pode ser conferida: a frase não define ambiente, operação, métrica nem limite.</p>
</div>

<div class="equation">verificável = ambiente + população + operação + métrica + limite</div>

<div class="panel c-teal">
  <span class="label">A mesma expectativa, verificável</span>
  <p>“Em ambiente de homologação com até 100 sessões simultâneas, 95% das consultas de catálogo respondem em até 2 segundos.”</p>
  <p class="muted">Cenário didático: os parâmetros são hipóteses até serem justificados com o negócio e validados com stakeholders.</p>
</div>

<div class="notice closer">
  <span class="notice-title">CUIDADO COM O NÚMERO</span>
  Declarar um valor não encerra o trabalho: a meta só se sustenta com justificativa de negócio e validação com stakeholders.
</div>

---

<div class="eyebrow">TRÊS VOZES</div>

# Requisito, restrição e preferência

<p class="subtitle">No debate sobre a solução, cada uma pede um tratamento diferente.</p>

<div class="cards cols-3">
  <div class="card">
    <span class="n">01</span>
    <h3>Requisito</h3>
    <p>Condição necessária para atender à necessidade identificada.</p>
    <p>Exemplo: “o operador deve localizar um registro pelo identificador.”</p>
  </div>
  <div class="card">
    <span class="n">02</span>
    <h3>Restrição</h3>
    <p>Limite que condiciona as alternativas de solução.</p>
    <p>Exemplo: “funcionar no navegador institucional homologado.”</p>
  </div>
  <div class="card">
    <span class="n">03</span>
    <h3>Preferência</h3>
    <p>Opção desejável, mas negociável quando outras decisões pesarem mais.</p>
    <p>Exemplo: “preferimos a interface azul.”</p>
  </div>
</div>

<div class="notice closer">
  <span class="notice-title">ATENÇÃO</span>
  Tecnologia escolhida pode ser restrição técnica legítima; confundi-la com necessidade do usuário muda a análise e a prioridade do trabalho.
</div>

---

<!-- _class: section-divider -->

<div class="part">PARTE 04 / 04</div>

# Oficina de classificação

<div class="topic-list cols-3">
  <div class="topic"><span class="n">01</span><span>O portal acadêmico</span></div>
  <div class="topic"><span class="n">02</span><span>Classificar com justificativa</span></div>
  <div class="topic"><span class="n">03</span><span>Reescrever adjetivos</span></div>
</div>

---

<div class="eyebrow">EXERCÍCIO · PORTAL ACADÊMICO</div>

# Classificar e melhorar declarações

<div class="two-col">
  <div class="col">
    <span class="label">Declarações</span>
    <ol class="list ordered">
      <li>o estudante consulta suas notas;</li>
      <li>o portal é fácil de usar;</li>
      <li>o sistema envia confirmação após a solicitação de matrícula;</li>
      <li>as consultas respondem em até 3 segundos para 95% das requisições no cenário de referência;</li>
      <li>o portal utiliza a identidade visual institucional;</li>
      <li>apenas docentes vinculados à turma lançam notas.</li>
    </ol>
  </div>
  <div class="col">
    <span class="label">O que produzir</span>
    <ul class="list tight">
      <li>classificar cada declaração citando o comportamento ou o atributo descrito;</li>
      <li>reescrever “seguro”, “rápido” e “intuitivo” com hipótese declarada e critério verificável;</li>
      <li>apontar quais números precisam de validação com o negócio antes de virar meta;</li>
      <li>marcar as declarações que exigem esclarecimento antes da classificação.</li>
    </ul>
  </div>
</div>

<div class="notice closer">
  <span class="notice-title">AUTOVERIFICAÇÃO</span>
  A classificação cita o comportamento ou o atributo? A reescrita diz quem mede, o que é medido e até que limite? Nenhum valor arbitrário virou fato?
</div>

---

<!-- _class: title -->

<div class="eyebrow">SÍNTESE</div>

# As duas dimensões
# de um mesmo sistema.

<p class="subtitle">Próxima aula: descobrir requisitos com stakeholders, por meio de entrevistas, questionários e workshops.</p>

<div class="byline">
  <strong>Prof. Victor Brayner</strong>
  <span>engenharia de requisitos, testes e qualidade · unidade I</span>
</div>
