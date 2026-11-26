---
marp: true
theme: campus-dev
size: 16:9
paginate: true
html: true
footer: 'ENGENHARIA DE REQUISITOS, TESTES E QUALIDADE · UNIDADE IV'
---

<!-- _class: title -->

<div class="eyebrow">ENGENHARIA DE REQUISITOS, TESTES E QUALIDADE · UNIDADE IV</div>

# Qualidade e
# melhoria contínua

<p class="subtitle">Práticas, evidências e decisões para sustentar a qualidade enquanto o software muda. Último encontro de conteúdo antes da AV2, com revisão das Unidades III e IV.</p>

<div class="byline">
  <strong>Prof. Victor Brayner</strong>
  <span>ads · 2026.2</span>
</div>

---

<div class="eyebrow">PONTO DE PARTIDA</div>

# Os testes passam; o sistema piora

<div class="two-col">
  <div class="col">
    <span class="label">O cenário</span>
    <p>Uma equipe entrega funcionalidades novas toda semana e os testes automatizados passam. Mesmo assim, os usuários reclamam de lentidão, os incidentes aumentam, as correções demoram mais e trechos antigos do sistema viram zona que os desenvolvedores evitam tocar.</p>
    <p class="muted">O produto está melhorando ou piorando? A resposta exige evidência, e a primeira pergunta é qual evidência observar.</p>
  </div>
  <div class="col">
    <span class="label">O que observar antes de responder</span>
    <ul class="list tight">
      <li>quantos incidentes ocorrem e quão graves são;</li>
      <li>quanto tempo o serviço leva para voltar depois de uma falha;</li>
      <li>a latência que os usuários percebem nos períodos de pico;</li>
      <li>quanto tempo uma mudança leva do início à produção;</li>
      <li>quais partes do código ninguém quer mais alterar.</li>
    </ul>
    <p class="muted">Sinais de produto, de processo e de operação se complementam; a leitura de um só deles não responde à pergunta.</p>
  </div>
</div>

<div class="notice closer">
  <span class="notice-title">Pergunta central</span>
  Como perceber que a qualidade está caindo quando a equipe segue entregando funcionalidades?
</div>

---

<!-- _class: section-divider -->

<div class="part">PARTE 01 / 03</div>

# Qualidade como prática

<div class="topic-list">
  <div class="topic"><span class="n">01</span><span>Qualidade e contexto</span></div>
  <div class="topic"><span class="n">02</span><span>Produto e processo</span></div>
  <div class="topic"><span class="n">03</span><span>QA e QC</span></div>
  <div class="topic"><span class="n">04</span><span>Revisões e inspeções</span></div>
</div>

---

<div class="eyebrow">CONCEITO</div>

# Funcionar não basta para ter qualidade

<div class="two-col">
  <div class="col">
    <span class="label">O que a qualidade mede</span>
    <p>Qualidade é o grau em que um produto, serviço ou processo atende às necessidades e expectativas relevantes: requisitos explícitos, necessidades implícitas, contexto de uso e restrições.</p>
    <p>Um sistema pode passar em todos os testes funcionais e ainda ser:</p>
    <ul class="list tight">
      <li>lento para o volume de usuários esperado;</li>
      <li>difícil de aprender e de usar;</li>
      <li>inacessível para parte das pessoas;</li>
      <li>inseguro na proteção de dados;</li>
      <li>caro e arriscado de modificar.</li>
    </ul>
  </div>
  <div class="col">
    <span class="label">Exemplo: portal de matrícula</span>
    <p>A funcionalidade de matrícula está correta nos testes. A qualidade percebida ainda depende de outras condições:</p>
    <ul class="list tight">
      <li>o portal continuar disponível no período de inscrição;</li>
      <li>um estudante com deficiência conseguir concluir o fluxo;</li>
      <li>não existirem matrículas duplicadas por falha de concorrência.</li>
    </ul>
    <p class="muted">A prioridade muda com o contexto: um banco, um jogo e um protótipo de pesquisa avaliam atributos diferentes.</p>
  </div>
</div>

<div class="callout">
  <span class="tag">PERGUNTA</span>
  Um sistema sem bugs conhecidos é, necessariamente, um sistema de qualidade?
</div>

---

<div class="eyebrow">O ESQUEMA</div>

# Evidências fecham o ciclo entre processo e produto

<div class="stack">
  <div class="media">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 200" role="img" aria-label="O processo influencia o produto; o produto e sua operação geram evidências; as evidências orientam decisões de melhoria que realimentam o processo."><title>Cadeia entre processo, produto, evidências e decisões</title><desc>O processo influencia o produto; o produto e sua operação geram evidências; as evidências orientam decisões de melhoria que realimentam o processo.</desc><text x="20" y="22" font-family="'Roboto Mono', Consolas, monospace" font-size="13" font-weight="700" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0.6">01</text><text x="260" y="22" font-family="'Roboto Mono', Consolas, monospace" font-size="13" font-weight="700" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0.6">02</text><text x="500" y="22" font-family="'Roboto Mono', Consolas, monospace" font-size="13" font-weight="700" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0.6">03</text><text x="740" y="22" font-family="'Roboto Mono', Consolas, monospace" font-size="13" font-weight="700" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0.6">04</text><rect x="20" y="36" width="200" height="78" rx="6" fill="#f4f5f7" stroke="#101f38" stroke-width="2" /><text x="120" y="67" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Processo</text><text x="120" y="91" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">como o trabalho é feito</text><rect x="260" y="36" width="200" height="78" rx="6" fill="#f4f5f7" stroke="#1e88e5" stroke-width="2" /><text x="360" y="67" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Produto</text><text x="360" y="91" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">o software entregue e em uso</text><rect x="500" y="36" width="200" height="78" rx="6" fill="#f4f5f7" stroke="#0e9f6e" stroke-width="2" /><text x="600" y="67" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Evidências</text><text x="600" y="91" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">testes, métricas, incidentes</text><rect x="740" y="36" width="200" height="78" rx="6" fill="#f4f5f7" stroke="#7c3aed" stroke-width="2" /><text x="840" y="67" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Decisões de melhoria</text><text x="840" y="91" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">priorizar, corrigir, prevenir</text><line x1="222" y1="75" x2="249" y2="75" stroke="#1e88e5" stroke-width="2"  /><polygon points="258,75 249,79.95 249,70.05" fill="#1e88e5" /><line x1="462" y1="75" x2="489" y2="75" stroke="#1e88e5" stroke-width="2"  /><polygon points="498,75 489,79.95 489,70.05" fill="#1e88e5" /><line x1="702" y1="75" x2="729" y2="75" stroke="#1e88e5" stroke-width="2"  /><polygon points="738,75 729,79.95 729,70.05" fill="#1e88e5" /><line x1="840" y1="114" x2="840" y2="170" stroke="#5b6472" stroke-width="2" stroke-dasharray="6 5" /><line x1="840" y1="170" x2="120" y2="170" stroke="#5b6472" stroke-width="2" stroke-dasharray="6 5" /><line x1="120" y1="170" x2="120" y2="127" stroke="#5b6472" stroke-width="2" stroke-dasharray="6 5" /><polygon points="120,118 124.95,127 115.05,127" fill="#5b6472" /><text x="480" y="157" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">decisões realimentam o processo</text></svg>
    <div class="caption">O processo influencia o produto; o produto e sua operação geram evidências; as evidências sustentam decisões que mudam o processo na volta seguinte.</div>
  </div>
  <p><strong>Qualidade de produto</strong> olha o que foi entregue: defeitos, desempenho, segurança, usabilidade, manutenibilidade. <strong>Qualidade de processo</strong> olha como o trabalho é feito: retrabalho, tempo de ciclo, eficácia das revisões, previsibilidade.</p>
</div>

<div class="notice closer">
  <span class="notice-title">Ressalva</span>
  Um processo bem documentado não garante produto bom. Um produto que funciona hoje pode esconder um processo insustentável, dependente de poucas pessoas e cheio de dívida acumulada.
</div>

---

<!-- _class: accent-teal -->

<div class="eyebrow">DISTINÇÃO</div>

# QA fortalece o processo; QC avalia o resultado

<p class="subtitle">Garantia da qualidade (Quality Assurance, QA) e controle da qualidade (Quality Control, QC) se complementam. A diferença está na finalidade predominante de cada atividade.</p>

<div class="two-col">
  <div class="panel c-teal">
    <span class="label">QA · GARANTIA</span>
    <p>Atividades planejadas e sistemáticas que dão confiança de que as práticas produzem a qualidade esperada.</p>
    <ul class="list tight">
      <li>definir padrões, critérios e política de revisão;</li>
      <li>orientar práticas de desenvolvimento seguro;</li>
      <li>auditar se o processo acordado é seguido;</li>
      <li>analisar causas recorrentes de defeitos.</li>
    </ul>
    <p class="muted">Olha sobretudo para o processo. Não significa deixar de testar.</p>
  </div>
  <div class="panel c-orange">
    <span class="label">QC · CONTROLE</span>
    <p>Atividades que avaliam o produto ou um resultado específico contra critérios definidos.</p>
    <ul class="list tight">
      <li>executar testes e verificar desempenho e segurança;</li>
      <li>inspecionar uma funcionalidade;</li>
      <li>validar uma entrega contra critérios de aceitação;</li>
      <li>registrar e classificar defeitos.</li>
    </ul>
    <p class="muted">Olha sobretudo para o produto e o resultado.</p>
  </div>
</div>

<div class="callout">
  <span class="tag">PERGUNTA</span>
  Definir a política de revisão de código é QA ou QC? E revisar um pull request específico?
</div>

---

<div class="eyebrow">O CICLO</div>

# QA atravessa o fluxo; QC pontua as etapas

<div class="media">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 280" role="img" aria-label="Revisões, testes, validação e monitoramento acontecem em pontos distintos do fluxo de entrega, e o aprendizado de cada ciclo realimenta práticas e critérios."><title>QA e QC no ciclo de entrega</title><desc>Revisões, testes, validação e monitoramento acontecem em pontos distintos do fluxo de entrega, e o aprendizado de cada ciclo realimenta práticas e critérios.</desc><rect x="20" y="24" width="130" height="56" rx="6" fill="#f4f5f7" stroke="#101f38" stroke-width="2" /><text x="85" y="52" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="15" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">REQUISITOS</text><line x1="85" y1="80" x2="85" y2="98" stroke="#5b6472" stroke-width="1.5" stroke-dasharray="6 5" /><text x="85" y="112" font-family="'Roboto Mono', Consolas, monospace" font-size="12" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">revisão</text><line x1="85" y1="124" x2="85" y2="150" stroke="#5b6472" stroke-width="1.5" stroke-dasharray="6 5" /><rect x="178" y="24" width="130" height="56" rx="6" fill="#f4f5f7" stroke="#101f38" stroke-width="2" /><text x="243" y="52" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="15" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">DESENHO</text><line x1="243" y1="80" x2="243" y2="98" stroke="#5b6472" stroke-width="1.5" stroke-dasharray="6 5" /><text x="243" y="112" font-family="'Roboto Mono', Consolas, monospace" font-size="12" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">revisão</text><line x1="243" y1="124" x2="243" y2="150" stroke="#5b6472" stroke-width="1.5" stroke-dasharray="6 5" /><rect x="336" y="24" width="130" height="56" rx="6" fill="#f4f5f7" stroke="#101f38" stroke-width="2" /><text x="401" y="52" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="15" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">IMPLEMENTAÇÃO</text><line x1="401" y1="80" x2="401" y2="98" stroke="#5b6472" stroke-width="1.5" stroke-dasharray="6 5" /><text x="401" y="112" font-family="'Roboto Mono', Consolas, monospace" font-size="12" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">revisão</text><line x1="401" y1="124" x2="401" y2="150" stroke="#5b6472" stroke-width="1.5" stroke-dasharray="6 5" /><rect x="494" y="24" width="130" height="56" rx="6" fill="#f4f5f7" stroke="#101f38" stroke-width="2" /><text x="559" y="52" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="15" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">TESTES</text><line x1="559" y1="80" x2="559" y2="98" stroke="#5b6472" stroke-width="1.5" stroke-dasharray="6 5" /><text x="559" y="112" font-family="'Roboto Mono', Consolas, monospace" font-size="12" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">QC e testes</text><line x1="559" y1="124" x2="559" y2="150" stroke="#5b6472" stroke-width="1.5" stroke-dasharray="6 5" /><rect x="652" y="24" width="130" height="56" rx="6" fill="#f4f5f7" stroke="#101f38" stroke-width="2" /><text x="717" y="52" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="15" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">ENTREGA</text><line x1="717" y1="80" x2="717" y2="98" stroke="#5b6472" stroke-width="1.5" stroke-dasharray="6 5" /><text x="717" y="112" font-family="'Roboto Mono', Consolas, monospace" font-size="12" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">validação</text><line x1="717" y1="124" x2="717" y2="150" stroke="#5b6472" stroke-width="1.5" stroke-dasharray="6 5" /><rect x="810" y="24" width="130" height="56" rx="6" fill="#f4f5f7" stroke="#101f38" stroke-width="2" /><text x="875" y="52" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="15" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">OPERAÇÃO</text><line x1="875" y1="80" x2="875" y2="98" stroke="#5b6472" stroke-width="1.5" stroke-dasharray="6 5" /><text x="875" y="112" font-family="'Roboto Mono', Consolas, monospace" font-size="12" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">monitoramento</text><line x1="875" y1="124" x2="875" y2="150" stroke="#5b6472" stroke-width="1.5" stroke-dasharray="6 5" /><line x1="152" y1="52" x2="167" y2="52" stroke="#1e88e5" stroke-width="2"  /><polygon points="176,52 167,56.95 167,47.05" fill="#1e88e5" /><line x1="310" y1="52" x2="325" y2="52" stroke="#1e88e5" stroke-width="2"  /><polygon points="334,52 325,56.95 325,47.05" fill="#1e88e5" /><line x1="468" y1="52" x2="483" y2="52" stroke="#1e88e5" stroke-width="2"  /><polygon points="492,52 483,56.95 483,47.05" fill="#1e88e5" /><line x1="626" y1="52" x2="641" y2="52" stroke="#1e88e5" stroke-width="2"  /><polygon points="650,52 641,56.95 641,47.05" fill="#1e88e5" /><line x1="784" y1="52" x2="799" y2="52" stroke="#1e88e5" stroke-width="2"  /><polygon points="808,52 799,56.95 799,47.05" fill="#1e88e5" /><line x1="85" y1="150" x2="875" y2="150" stroke="#5b6472" stroke-width="1.5" stroke-dasharray="6 5" /><line x1="480" y1="150" x2="480" y2="183" stroke="#7c3aed" stroke-width="2"  /><polygon points="480,192 475.05,183 484.95,183" fill="#7c3aed" /><rect x="340" y="196" width="280" height="60" rx="6" fill="#f4f5f7" stroke="#7c3aed" stroke-width="2" /><text x="480" y="218" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Aprendizado e melhoria</text><text x="480" y="242" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">alimenta práticas e critérios</text></svg>
  <div class="caption">Revisões, testes, validação e monitoramento espalham-se pelo fluxo de entrega; o aprendizado de cada ciclo realimenta práticas e critérios de QA.</div>
</div>

---

<div class="eyebrow">PRÁTICAS</div>

# Revisar é procurar problemas antes que se espalhem

<p class="subtitle">Revisar um artefato é procurar omissões, ambiguidades e riscos antes que alguém implemente uma interpretação arbitrária. Requisitos, modelos, código, consultas, casos de teste e configuração podem passar por revisão.</p>

<div class="stack">
  <table>
    <thead>
      <tr><th>Prática</th><th>Formalidade</th><th>Uso típico</th></tr>
    </thead>
    <tbody>
      <tr><td>Revisão informal</td><td>Baixa</td><td>Feedback rápido e exploratório</td></tr>
      <tr><td>Revisão por pares</td><td>Baixa a média</td><td>Mudanças de código, requisitos e documentação</td></tr>
      <tr><td>Walkthrough</td><td>Média</td><td>Explicar o fluxo e validar o entendimento coletivo</td></tr>
      <tr><td>Inspeção formal</td><td>Alta</td><td>Artefatos críticos, com papéis, registro e acompanhamento</td></tr>
    </tbody>
  </table>
  <div class="cards cols-2">
    <div class="card">
      <span class="n">01</span>
      <h3>A história que será implementada</h3>
      <p>“Como estudante, quero me matricular em uma disciplina para organizar meu semestre.”</p>
      <p class="muted">Correta no teste; ambígua para quem implementa.</p>
    </div>
    <div class="card">
      <span class="n">02</span>
      <h3>Perguntas antes de implementar</h3>
      <p>Pode se matricular em qualquer disciplina? O que acontece com vagas esgotadas? Há pré-requisitos? E se duas pessoas ocuparem a última vaga ao mesmo tempo? Como o estudante sabe que a matrícula foi confirmada?</p>
    </div>
  </div>
</div>

---

<!-- _class: section-divider -->

<div class="part">PARTE 02 / 03</div>

# Da referência à medida

<div class="topic-list">
  <div class="topic"><span class="n">01</span><span>Modelos e padrões</span></div>
  <div class="topic"><span class="n">02</span><span>Métricas e indicadores</span></div>
  <div class="topic"><span class="n">03</span><span>Produto e processo</span></div>
  <div class="topic"><span class="n">04</span><span>Dívida e monitoramento</span></div>
</div>

---

<div class="eyebrow">REFERÊNCIAS</div>

# Modelo organiza a análise; não entrega qualidade

<div class="two-col">
  <div class="col">
    <span class="label">Modelo de qualidade de produto</span>
    <p>A família ISO/IEC 25000 organiza modelos e atividades de avaliação de sistemas e software. A ISO/IEC 25010 é a referência conhecida para características de produto: adequação funcional, eficiência de desempenho, compatibilidade, usabilidade, confiabilidade, segurança, manutenibilidade e portabilidade.</p>
    <p class="muted">Use como lente: escolha as dimensões que importam no seu contexto, sem tentar memorizar subcaracterísticas. Em trabalho formal, consulte a edição vigente da norma.</p>
  </div>
  <div class="col">
    <span class="label">Referências de processo e gestão</span>
    <ul class="list tight">
      <li><strong>ISO 9001:</strong> sistema de gestão da qualidade;</li>
      <li><strong>ISO/IEC/IEEE 12207:</strong> processos de ciclo de vida de software;</li>
      <li><strong>CMMI:</strong> modelos de maturidade de processo.</li>
    </ul>
    <p>Normas e modelos orientam processos, critérios e melhoria organizacional. O objetivo aqui é reconhecer para que servem, sem confundir modelo, norma, processo interno e certificação.</p>
  </div>
</div>

<div class="panel c-orange closer">
  <span class="label">O que a adoção não garante</span>
  <p>Seguir um modelo não torna o produto bom, não equaliza prioridades e não prova que cada entrega está livre de defeitos. A equipe traduz a referência em práticas, critérios e evidências do próprio contexto.</p>
</div>

---

<div class="eyebrow">DISTINÇÃO</div>

# Um número vira decisão com definição e contexto

<div class="stack">
  <div class="media">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 235" role="img" aria-label="Um dado bruto vira métrica com definição e cálculo; com contexto, comparação e tendência, vira indicador; o indicador sustenta uma decisão, e a nova medição verifica o efeito e recomeça o ciclo."><title>Do dado à decisão</title><desc>Um dado bruto vira métrica com definição e cálculo; com contexto, comparação e tendência, vira indicador; o indicador sustenta uma decisão, e a nova medição verifica o efeito e recomeça o ciclo.</desc><text x="28" y="18" font-family="'Roboto Mono', Consolas, monospace" font-size="13" font-weight="700" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0.6">01</text><rect x="28" y="30" width="160" height="64" rx="6" fill="#f4f5f7" stroke="#101f38" stroke-width="2" /><text x="108" y="54" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Dado bruto</text><text x="108" y="78" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">evento registrado</text><line x1="190" y1="62" x2="203" y2="62" stroke="#1e88e5" stroke-width="2"  /><polygon points="212,62 203,66.95 203,57.05" fill="#1e88e5" /><text x="214" y="18" font-family="'Roboto Mono', Consolas, monospace" font-size="13" font-weight="700" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0.6">02</text><rect x="214" y="30" width="160" height="64" rx="6" fill="#f4f5f7" stroke="#101f38" stroke-width="2" /><text x="294" y="54" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Métrica</text><text x="294" y="78" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">definição e cálculo</text><line x1="376" y1="62" x2="389" y2="62" stroke="#1e88e5" stroke-width="2"  /><polygon points="398,62 389,66.95 389,57.05" fill="#1e88e5" /><text x="400" y="18" font-family="'Roboto Mono', Consolas, monospace" font-size="13" font-weight="700" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0.6">03</text><rect x="400" y="30" width="160" height="64" rx="6" fill="#f4f5f7" stroke="#101f38" stroke-width="2" /><text x="480" y="54" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Indicador</text><text x="480" y="78" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">o que isso sugere</text><line x1="562" y1="62" x2="575" y2="62" stroke="#1e88e5" stroke-width="2"  /><polygon points="584,62 575,66.95 575,57.05" fill="#1e88e5" /><text x="586" y="18" font-family="'Roboto Mono', Consolas, monospace" font-size="13" font-weight="700" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0.6">04</text><rect x="586" y="30" width="160" height="64" rx="6" fill="#f4f5f7" stroke="#101f38" stroke-width="2" /><text x="666" y="54" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Decisão e ação</text><text x="666" y="78" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">mudar ou priorizar</text><line x1="748" y1="62" x2="761" y2="62" stroke="#1e88e5" stroke-width="2"  /><polygon points="770,62 761,66.95 761,57.05" fill="#1e88e5" /><text x="772" y="18" font-family="'Roboto Mono', Consolas, monospace" font-size="13" font-weight="700" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0.6">05</text><rect x="772" y="30" width="160" height="64" rx="6" fill="#f4f5f7" stroke="#101f38" stroke-width="2" /><text x="852" y="54" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Nova medição</text><text x="852" y="78" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">verificar o efeito</text><rect x="310" y="138" width="180" height="64" rx="6" fill="#f4f5f7" stroke="#d9481f" stroke-width="2" /><text x="400" y="160" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Contexto</text><text x="400" y="178" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">comparação e tendência</text><text x="400" y="194" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">em relação a um objetivo</text><line x1="400" y1="138" x2="389.60996894379986" y2="80.85482919089917" stroke="#d9481f" stroke-width="2" stroke-dasharray="6 5" /><polygon points="388,72 394.4801249987944,79.96934627180924 384.7398128888053,81.74031210998908" fill="#d9481f" /><line x1="852" y1="94" x2="852" y2="214" stroke="#5b6472" stroke-width="2" stroke-dasharray="6 5" /><line x1="852" y1="214" x2="108" y2="214" stroke="#5b6472" stroke-width="2" stroke-dasharray="6 5" /><line x1="108" y1="214" x2="108" y2="107" stroke="#5b6472" stroke-width="2" stroke-dasharray="6 5" /><polygon points="108,98 112.95,107 103.05,107" fill="#5b6472" /><text x="560" y="202" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">novo ciclo</text></svg>
    <div class="caption">Métrica exige definição de cálculo, janela temporal e fonte; indicador exige comparação, tendência e objetivo. Sem isso, o número não sustenta decisão confiável.</div>
  </div>
  <div class="cards cols-4">
    <div class="card compact">
      <h3>Métrica</h3>
      <p>Quantifica um evento. Ex.: 18 incidentes críticos no trimestre.</p>
    </div>
    <div class="card compact">
      <h3>Indicador</h3>
      <p>Interpreta medidas em contexto. Ex.: incidentes crescem junto com mudanças maiores.</p>
    </div>
    <div class="card compact">
      <h3>Meta</h3>
      <p>Valor ou condição desejada. Ex.: reduzir incidentes críticos.</p>
    </div>
    <div class="card compact">
      <h3>Evidência</h3>
      <p>Registro que sustenta a avaliação. Ex.: registros de incidentes e de versões.</p>
    </div>
  </div>
</div>

---

<div class="eyebrow">MÉTRICAS</div>

# Cada métrica responde a uma dimensão

<div class="two-col">
  <div class="col">
    <span class="label">Produto: o que foi entregue</span>
    <ul class="list tight">
      <li><strong>Confiabilidade:</strong> incidentes, falhas, disponibilidade;</li>
      <li><strong>Desempenho:</strong> latência p50 e p95, vazão, taxa de erro;</li>
      <li><strong>Segurança:</strong> vulnerabilidades por severidade, tempo de correção;</li>
      <li><strong>Usabilidade:</strong> sucesso em tarefas, erros por tarefa, tempo de conclusão;</li>
      <li><strong>Manutenibilidade:</strong> complexidade, duplicação, esforço de mudança.</li>
    </ul>
  </div>
  <div class="col">
    <span class="label">Processo: como o trabalho flui</span>
    <ul class="list tight">
      <li>tempo de ciclo e lead time, conforme a definição adotada pela equipe;</li>
      <li>frequência de implantação e tempo de entrega de mudanças;</li>
      <li>taxa de retrabalho e tempo de revisão;</li>
      <li>mudanças que causam falha e tempo para restaurar o serviço.</li>
    </ul>
    <p class="muted">Em DevOps, frequência de implantação, lead time, taxa de falha de mudanças e tempo de recuperação ajudam a discutir velocidade e estabilidade juntas. Nenhuma delas serve para ranquear pessoas sem contexto.</p>
  </div>
</div>

<div class="notice closer">
  <span class="notice-title">Dois avisos</span>
  Cobertura de testes subindo de 60% para 85% ainda deixa perguntas: as asserções são significativas, os fluxos críticos estão cobertos, os defeitos em produção mudaram? E linhas de código ou número de commits medem atividade, não contribuição.
</div>

---

<!-- _class: accent-purple -->

<div class="eyebrow">CUSTO ACUMULADO</div>

# Dívida técnica é custo que aparece depois

<div class="two-col">
  <div class="col">
    <span class="label">De onde vem</span>
    <p>Dívida técnica é o custo futuro associado a decisões que facilitam a entrega agora e encarecem as mudanças depois. Nem toda decisão pragmática é irresponsável; o problema é o custo que ninguém registra nem administra.</p>
    <ul class="list tight">
      <li>duplicação de código e regras espalhadas;</li>
      <li>acoplamento excessivo entre partes;</li>
      <li>testes ausentes em trechos críticos;</li>
      <li>solução temporária que virou permanente;</li>
      <li>conhecimento concentrado em poucas pessoas.</li>
    </ul>
  </div>
  <div class="col">
    <span class="label">Como acompanhar</span>
    <p>Não existe métrica única de dívida técnica. O que funciona é um inventário priorizado:</p>
    <ul class="list tight">
      <li>causa, consequência e localização;</li>
      <li>risco para produto e operação;</li>
      <li>custo estimado de correção;</li>
      <li>responsável e prioridade;</li>
      <li>condição para reavaliar a decisão.</li>
    </ul>
    <p class="muted">Sinais indiretos: tempo de mudança crescendo, defeitos recorrentes, alterações concentradas em componentes frágeis.</p>
  </div>
</div>

<div class="callout">
  <span class="tag">EXEMPLO</span>
  Uma regra de matrícula copiada em três módulos entrega rápido na primeira vez. Quando a regra muda, um módulo fica para trás e os dados divergem: a dívida é manter a regra distribuída, não apenas o ato de duplicar.
</div>

---

<div class="eyebrow">SINAIS</div>

# Alerta avisa; diagnóstico investiga

<p class="subtitle">Monitorar é acompanhar sinais conhecidos; observabilidade é conseguir investigar o estado interno do sistema a partir das saídas, inclusive para problemas que ninguém antecipou.</p>

<p>Um painel do portal acadêmico pode acompanhar disponibilidade, latência p95 da matrícula, taxa de falhas por operação, fila de processamento e tempo de recuperação. Três tipos de sinal se complementam:</p>

<div class="cards cols-3">
  <div class="card">
    <span class="n">01</span>
    <h3>Logs</h3>
    <p>Registros de eventos com contexto, para reconstruir o que aconteceu.</p>
  </div>
  <div class="card">
    <span class="n">02</span>
    <h3>Métricas</h3>
    <p>Séries de valores agregados ao longo do tempo, para ver tendência e comparar períodos.</p>
  </div>
  <div class="card">
    <span class="n">03</span>
    <h3>Traces</h3>
    <p>O percurso de uma requisição entre componentes, para localizar onde o tempo é gasto.</p>
  </div>
</div>

<div class="callout">
  <span class="tag">PERGUNTA</span>
  O painel mostra latência alta no fluxo de matrícula. O que ainda precisa ser investigado antes de apontar a causa?
</div>

---

<!-- _class: section-divider -->

<div class="part">PARTE 03 / 03</div>

# Melhorar com evidência

<div class="topic-list">
  <div class="topic"><span class="n">01</span><span>O ciclo de melhoria</span></div>
  <div class="topic"><span class="n">02</span><span>Ágil, DevOps e IA</span></div>
  <div class="topic"><span class="n">03</span><span>Diagnóstico de qualidade</span></div>
  <div class="topic"><span class="n">04</span><span>Revisão para a AV2</span></div>
</div>

---

<div class="eyebrow">O CICLO</div>

# Melhorar é testar uma mudança e medir o efeito

<div class="media">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 300" role="img" aria-label="Observar, analisar causas, planejar mudança com hipótese, executar, verificar resultados com a linha de base e aprender; o aprendizado abre o ciclo seguinte."><title>Ciclo de melhoria contínua</title><desc>Observar, analisar causas, planejar mudança com hipótese, executar, verificar resultados com a linha de base e aprender; o aprendizado abre o ciclo seguinte.</desc><text x="40" y="22" font-family="'Roboto Mono', Consolas, monospace" font-size="13" font-weight="700" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0.6">01</text><rect x="40" y="30" width="250" height="72" rx="6" fill="#f4f5f7" stroke="#101f38" stroke-width="2" /><text x="165" y="58" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Observar</text><text x="165" y="82" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">reunir evidências do problema</text><text x="355" y="22" font-family="'Roboto Mono', Consolas, monospace" font-size="13" font-weight="700" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0.6">02</text><rect x="355" y="30" width="250" height="72" rx="6" fill="#f4f5f7" stroke="#101f38" stroke-width="2" /><text x="480" y="58" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Analisar causas</text><text x="480" y="82" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">investigar causas, não sintomas</text><text x="670" y="22" font-family="'Roboto Mono', Consolas, monospace" font-size="13" font-weight="700" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0.6">03</text><rect x="670" y="30" width="250" height="72" rx="6" fill="#f4f5f7" stroke="#101f38" stroke-width="2" /><text x="795" y="58" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Planejar mudança</text><text x="795" y="82" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">PLAN · hipótese e critério de sucesso</text><text x="670" y="162" font-family="'Roboto Mono', Consolas, monospace" font-size="13" font-weight="700" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0.6">04</text><rect x="670" y="170" width="250" height="72" rx="6" fill="#f4f5f7" stroke="#101f38" stroke-width="2" /><text x="795" y="198" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Executar</text><text x="795" y="222" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">DO · mudança em escala controlada</text><text x="355" y="162" font-family="'Roboto Mono', Consolas, monospace" font-size="13" font-weight="700" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0.6">05</text><rect x="355" y="170" width="250" height="72" rx="6" fill="#f4f5f7" stroke="#101f38" stroke-width="2" /><text x="480" y="198" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Verificar</text><text x="480" y="222" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">CHECK · comparar com a linha de base</text><text x="40" y="162" font-family="'Roboto Mono', Consolas, monospace" font-size="13" font-weight="700" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0.6">06</text><rect x="40" y="170" width="250" height="72" rx="6" fill="#f4f5f7" stroke="#101f38" stroke-width="2" /><text x="165" y="198" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Aprender e ajustar</text><text x="165" y="222" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">ACT · manter, ajustar ou reverter</text><line x1="292" y1="66" x2="344" y2="66" stroke="#1e88e5" stroke-width="2"  /><polygon points="353,66 344,70.95 344,61.05" fill="#1e88e5" /><line x1="607" y1="66" x2="659" y2="66" stroke="#1e88e5" stroke-width="2"  /><polygon points="668,66 659,70.95 659,61.05" fill="#1e88e5" /><line x1="795" y1="104" x2="795" y2="157" stroke="#1e88e5" stroke-width="2"  /><polygon points="795,166 790.05,157 799.95,157" fill="#1e88e5" /><line x1="668" y1="206" x2="616" y2="206" stroke="#1e88e5" stroke-width="2"  /><polygon points="607,206 616,201.05 616,210.95" fill="#1e88e5" /><line x1="353" y1="206" x2="301" y2="206" stroke="#1e88e5" stroke-width="2"  /><polygon points="292,206 301,201.05 301,210.95" fill="#1e88e5" /><line x1="165" y1="166" x2="165" y2="113" stroke="#1e88e5" stroke-width="2"  /><polygon points="165,104 169.95,113 160.05,113" fill="#1e88e5" /><text x="178" y="135" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12" font-weight="400" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0">novo ciclo</text></svg>
  <div class="caption">Melhoria contínua é avaliar resultados, implementar mudanças e conferir o efeito esperado. O PDCA (Planejar, Executar, Verificar, Agir) organiza a mesma volta em pipeline, requisitos ou incidentes.</div>
</div>

<div class="notice closer">
  <span class="notice-title">Exemplo</span>
  Regressões recorrentes no módulo de matrícula pedem histórico de incidentes, causa provável, mudança pequena com hipótese, comparação com a linha de base e decisão de manter ou ajustar.
</div>

---

<div class="eyebrow">NO FLUXO</div>

# Ágil e DevOps puxam qualidade para dentro do fluxo

<div class="two-col">
  <div class="col">
    <span class="label">Práticas que incorporam qualidade</span>
    <ul class="list tight">
      <li>critérios de aceitação claros;</li>
      <li>integração contínua (CI) e implantação contínua (CD), com testes automatizados em vários níveis;</li>
      <li>revisão por pares, análise estática e verificações de segurança;</li>
      <li>monitoramento após a implantação, com feedback de usuários e operação;</li>
      <li>implantação gradual, com capacidade de reversão quando apropriado;</li>
      <li>retrospectivas que viram mudança no processo.</li>
    </ul>
  </div>
  <div class="col">
    <span class="label">IA na qualidade</span>
    <p>Onde ajuda: resumir relatórios de incidentes, agrupar defeitos semelhantes, sugerir hipóteses e consultas para análise de logs, revisar critérios de aceitação em busca de ambiguidades.</p>
    <p>Onde exige cuidado: inventar causas sem evidência, confundir correlação com causalidade, ignorar dados sensíveis e políticas de segurança, produzir recomendação plausível e tecnicamente incorreta.</p>
  </div>
</div>

<div class="panel c-purple closer">
  <span class="label">Responsabilidade</span>
  <p>Automação e IA organizam evidências; critério, contexto e decisão continuam com a equipe. A qualidade segue compartilhada entre produto, desenvolvimento, testes, segurança e operação.</p>
</div>

---

<div class="eyebrow">EXERCÍCIO · DIAGNÓSTICO DE QUALIDADE</div>

# Leia os indicadores de um portal acadêmico

<p class="subtitle">O portal de matrícula, notas e documentos recebe mudanças com frequência. Usuários relatam lentidão e erros no pico de uso; incidentes em produção subiram de 8 para 14; e as mudanças no módulo de matrícula demoram mais para sair.</p>

<table>
  <thead>
    <tr><th>Indicador</th><th>Período A</th><th>Período B</th></tr>
  </thead>
  <tbody>
    <tr><td>Incidentes críticos</td><td>1</td><td>4</td></tr>
    <tr><td>Latência p95 no fluxo de matrícula</td><td>1,4 s</td><td>3,2 s</td></tr>
    <tr><td>Mudanças que causaram incidente</td><td>2 de 20</td><td>6 de 24</td></tr>
    <tr><td>Tempo mediano de recuperação</td><td>35 min</td><td>80 min</td></tr>
    <tr><td>Tempo mediano de ciclo das mudanças</td><td>3 dias</td><td>5 dias</td></tr>
    <tr><td>Cobertura de testes automatizados</td><td>68%</td><td>74%</td></tr>
  </tbody>
</table>

<div class="notice closer">
  <span class="notice-title">Dado didático</span>
  Os números são fictícios e criados para exercício de leitura. Não representam uma empresa real.
</div>

---

<div class="eyebrow">EXERCÍCIO · DIAGNÓSTICO DE QUALIDADE</div>

# Do número bruto ao plano de melhoria

<div class="cards cols-2">
  <div class="card">
    <span class="n">01</span>
    <h3>Ler os sinais</h3>
    <p>Identificar três sinais de deterioração ou risco na tabela, calculando a proporção de mudanças que causaram incidente em cada período.</p>
  </div>
  <div class="card">
    <span class="n">02</span>
    <h3>Priorizar a investigação</h3>
    <p>Escolher duas métricas para investigar primeiro e justificar por que elas importam mais que as outras.</p>
  </div>
  <div class="card">
    <span class="n">03</span>
    <h3>Separar observação de hipótese</h3>
    <p>Indicar quais informações adicionais faltam antes de afirmar qualquer causa e propor uma hipótese de dívida técnica para o tempo de ciclo, marcada como hipótese.</p>
  </div>
  <div class="card">
    <span class="n">04</span>
    <h3>Propor e verificar</h3>
    <p>Propor uma ação de produto e uma de processo; classificar uma como QA e outra como QC; definir como verificar se funcionaram, incluindo o que acompanhar e quais períodos comparar.</p>
  </div>
</div>

<div class="callout">
  <span class="tag">REGRA</span>
  A tabela mostra tendências; sozinha, não explica causas. Antes de concluir, indique que dados faltam.
</div>

---

<div class="eyebrow">REVISÃO · UNIDADES III E IV</div>

# Perguntas para se testar antes da AV2

<div class="two-col">
  <div class="col">
    <span class="label">Unidade III</span>
    <ol class="list ordered tight">
      <li>Qual é a diferença entre teste de carga e teste de estresse?</li>
      <li>Por que um teste de desempenho precisa de cenário, perfil de carga e critérios de aceitação?</li>
      <li>O que a latência p95 informa que a média esconde?</li>
      <li>Qual é a diferença entre usabilidade e acessibilidade?</li>
      <li>Por que a avaliação automatizada de acessibilidade não substitui a avaliação manual?</li>
      <li>O que é uma vulnerabilidade e como ela se relaciona com risco?</li>
      <li>Qual é a diferença entre autenticação e autorização?</li>
    </ol>
  </div>
  <div class="col">
    <span class="label">Unidade IV</span>
    <ol class="list ordered tight">
      <li>QA e QC são sinônimos? Explique.</li>
      <li>Qual é a finalidade de uma inspeção de artefato?</li>
      <li>Por que uma norma de qualidade não garante, por si só, produto sem defeitos?</li>
      <li>Diferencie métrica, indicador e meta.</li>
      <li>Por que cobertura de testes não é sinônimo de qualidade?</li>
      <li>O que é dívida técnica e como ela afeta a evolução do software?</li>
      <li>Qual é a diferença entre monitoramento e diagnóstico?</li>
      <li>Como o PDCA apoia uma melhoria de processo?</li>
      <li>Cite duas práticas de CI/CD que incorporam qualidade ao fluxo.</li>
    </ol>
  </div>
</div>

<div class="notice closer">
  <span class="notice-title">Como usar</span>
  Responda sem consultar o material e volte apenas ao que não sair com segurança; o eixo onde a resposta travar marca o próximo bloco de estudo.
</div>

---

<div class="eyebrow">PARA ANOTAR</div>

# O que reforçar para a AV2

<p class="subtitle">A avaliação abrange as duas unidades por inteiro. Os eixos abaixo organizam o estudo, começando pelo que não saiu nas perguntas do slide anterior.</p>

<div class="cards cols-3">
  <div class="card">
    <span class="n">01</span>
    <h3>Testes não funcionais</h3>
    <p>Carga, estresse e escalabilidade; cenário, perfil de carga e critérios; o que o p95 revela.</p>
  </div>
  <div class="card">
    <span class="n">02</span>
    <h3>Experiência do usuário</h3>
    <p>UX, usabilidade e acessibilidade; limites da avaliação automatizada.</p>
  </div>
  <div class="card">
    <span class="n">03</span>
    <h3>Segurança</h3>
    <p>Vulnerabilidades, testes de segurança e análise de riscos; autenticação e autorização.</p>
  </div>
  <div class="card">
    <span class="n">04</span>
    <h3>Qualidade como prática</h3>
    <p>QA, QC, revisões, inspeções, modelos e padrões, com seus limites.</p>
  </div>
  <div class="card">
    <span class="n">05</span>
    <h3>Medição</h3>
    <p>Métricas de produto e processo; indicadores e metas; escolha consciente do que medir.</p>
  </div>
  <div class="card">
    <span class="n">06</span>
    <h3>Evolução e melhoria</h3>
    <p>Dívida técnica, monitoramento, PDCA e práticas de CI/CD.</p>
  </div>
</div>

---

<!-- _class: title -->

<div class="eyebrow">SÍNTESE</div>

# Qualidade se constrói,
# se observa e se melhora.

<p class="subtitle">Requisitos e critérios viram práticas; práticas geram evidências; evidências sustentam as decisões de melhoria no próximo ciclo.</p>

<div class="byline">
  <strong>Prof. Victor Brayner</strong>
  <span>engenharia de requisitos, testes e qualidade · unidade IV</span>
</div>
