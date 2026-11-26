---
marp: true
theme: campus-dev
size: 16:9
paginate: true
html: true
footer: 'ENGENHARIA DE REQUISITOS, TESTES E QUALIDADE · UNIDADE III'
---

<!-- _class: title -->

<div class="eyebrow">ENGENHARIA DE REQUISITOS, TESTES E QUALIDADE · UNIDADE III</div>

# Planejamento e análise de
# testes não funcionais

<p class="subtitle">Transformar uma expectativa de qualidade em experimento: condições declaradas, métrica com definição e critério antes de executar.</p>

<div class="byline">
  <strong>Prof. Victor Brayner</strong>
  <span>ads · 2026.2</span>
</div>

---

<div class="eyebrow">PONTO DE PARTIDA</div>

# "Testamos e não vimos falhas" não é evidência

<div class="two-col">
  <div class="col">
    <span class="label">A situação</span>
    <p>Na abertura das inscrições, centenas de estudantes entram no portal de matrícula em um intervalo curto.</p>
    <p>A equipe garante que o sistema está preparado: alguns testes foram feitos durante o desenvolvimento e nenhuma falha apareceu.</p>
    <p class="muted">Entre o dia comum e o pico de inscrições muda a demanda; a afirmação não diz em qual dos dois o sistema foi observado.</p>
  </div>
  <div class="col">
    <span class="label">O que a afirmação não informa</span>
    <ul class="list tight">
      <li>quantos usuários foram simulados;</li>
      <li>quais operações executaram, e em que ritmo;</li>
      <li>se a carga representava o comportamento real;</li>
      <li>por quanto tempo ela foi sustentada;</li>
      <li>quais métricas foram observadas;</li>
      <li>qual resultado seria considerado aceitável.</li>
    </ul>
    <p class="muted">Sem essas informações, o relatório é uma demonstração de funcionamento, não uma avaliação de capacidade.</p>
  </div>
</div>

<div class="callout">
  <span class="tag">PERGUNTA</span>
  Como planejar um teste que produza evidência confiável para decidir se o sistema atende ao que se espera dele?
</div>

---

<!-- _class: accent-purple -->

<div class="eyebrow">TESE</div>

# Intenção de qualidade ainda não é evidência

<div class="two-col">
  <div class="col">
    <span class="label">O que a frase comunica</span>
    <p>"O sistema deve ser rápido, estável e suportar muitos usuários." São promessas sobre a experiência esperada; quem lê imagina o limite que quiser.</p>
  </div>
  <div class="col">
    <span class="label">O que o teste exige antes de executar</span>
    <ul class="list tight">
      <li>qual operação será medida;</li>
      <li>com que sessões, ritmo e duração;</li>
      <li>em que ambiente e com que dados;</li>
      <li>qual métrica, qual limite e o que conta como erro;</li>
      <li>qual resultado aprova o cenário.</li>
    </ul>
  </div>
</div>

<div class="quote closer">
  <div class="text">"Um teste não funcional só produz evidência útil quando sabemos em quais condições o sistema foi avaliado, o que foi medido e qual resultado seria aceitável."</div>
  <div class="author">TESE DA AULA</div>
</div>

---

<!-- _class: section-divider -->

<div class="part">PARTE 01 / 03</div>

# Do requisito ao cenário

<div class="topic-list cols-3">
  <div class="topic"><span class="n">01</span><span>Funcional e não funcional</span></div>
  <div class="topic"><span class="n">02</span><span>Requisito verificável</span></div>
  <div class="topic"><span class="n">03</span><span>A cadeia de evidência</span></div>
</div>

---

<div class="eyebrow">REVISÃO</div>

# A pergunta muda: funciona ou se comporta bem?

<div class="two-col">
  <div class="panel c-teal">
    <span class="label">Teste funcional</span>
    <p>Verifica se o sistema realiza os comportamentos previstos: cadastrar, consultar, confirmar uma matrícula válida.</p>
    <ul class="list tight">
      <li>a pergunta é se a operação faz o que deveria;</li>
      <li>segue passos com resultado esperado;</li>
      <li>exemplo: confirmar uma matrícula válida no portal;</li>
      <li>cadastrar uma vez não diz nada sobre o pico de matrícula.</li>
    </ul>
  </div>
  <div class="panel c-orange">
    <span class="label">Teste não funcional</span>
    <p>Avalia características de qualidade sob condições definidas: desempenho, confiabilidade, compatibilidade, segurança.</p>
    <ul class="list tight">
      <li>a operação é a mesma; a condição muda;</li>
      <li>no desempenho, a pergunta é como ela se comporta com centenas de sessões ativas;</li>
      <li>o interesse está no comportamento sob demanda, em uma janela definida.</li>
    </ul>
    <p class="muted">A mesma estrutura serve à confiabilidade, à compatibilidade e à segurança, cada qual com seus métodos e critérios.</p>
  </div>
</div>

<div class="callout">
  <span class="tag">PERGUNTA</span>
  Um teste funcional pode acontecer dentro de um teste de desempenho?
</div>

---

<div class="eyebrow">O REQUISITO</div>

# Rápido não diz o que medir nem quando aprovar

<div class="stack">
  <div class="quote">
    <div class="text">"O sistema deve ser rápido durante o período de matrícula."</div>
    <div class="author">REQUISITO RECEBIDO</div>
  </div>
  <div class="cards cols-4">
    <div class="card">
      <span class="n">01</span>
      <h3>Unidade e limite</h3>
      <p>"Rápido" não tem número: 1 segundo serve? E 10 segundos?</p>
    </div>
    <div class="card">
      <span class="n">02</span>
      <h3>Operação</h3>
      <p>Não diz qual ação é medida: consultar disciplinas, confirmar matrícula, abrir o portal?</p>
    </div>
    <div class="card">
      <span class="n">03</span>
      <h3>Condições</h3>
      <p>Faltam sessões esperadas, ritmo de chegada, ambiente e duração da avaliação.</p>
    </div>
    <div class="card">
      <span class="n">04</span>
      <h3>Erros e extremos</h3>
      <p>Não define o que conta como falha nem o que fazer com valores fora do comum.</p>
    </div>
  </div>
</div>

<div class="notice closer">
  <span class="notice-title">LEITURA</span>
  Expectativa legítima sobre a experiência. Para verificar atendimento, falta transformá-la em número, operação e condição.
</div>

---

<div class="eyebrow">EXEMPLO</div>

# Uma frase mensurável define o experimento inteiro

<div class="two-col">
  <div class="col">
    <div class="panel c-blue">
      <span class="label">Requisito reescrito</span>
      <p>Durante o período de matrícula, em ambiente de homologação representativo da produção, com 300 sessões simultâneas executando o perfil de navegação definido, 95% das consultas de disciplinas devem responder em menos de 2 segundos, com taxa de erro técnico inferior a 1%, em execução estável de 15 minutos.</p>
    </div>
  </div>
  <div class="col">
    <span class="label">Como ler a frase</span>
    <ul class="list arrow">
      <li><strong>operação</strong>: consulta de disciplinas;</li>
      <li><strong>condição</strong>: 300 sessões simultâneas por 15 minutos estáveis;</li>
      <li><strong>ambiente</strong>: homologação representativa da produção;</li>
      <li><strong>métrica</strong>: tempo de resposta no percentil 95 (p95);</li>
      <li><strong>limite</strong>: menos de 2 segundos para 95% das solicitações;</li>
      <li><strong>erro</strong>: falha técnica abaixo de 1%.</li>
    </ul>
  </div>
</div>

<div class="panel c-purple closer">
  <span class="label">De onde vêm os números</span>
  <p>Hipóteses para o exercício. Limites reais nascem da necessidade do negócio e da capacidade contratada, acordados com quem responde pelo produto; o testador não os escolhe porque parecem razoáveis.</p>
</div>

---

<div class="eyebrow">O ESQUEMA</div>

# Cada elo responde uma pergunta diferente

<div class="media">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 200" role="img" aria-label="Requisito leva a cenário, cenário a métrica, métrica a critério e critério a resultado; o resultado retorna ao requisito como aprendizado para revisar premissas futuras, sem reescrever o critério da execução já realizada."><title>Cadeia de planejamento do teste</title><desc>Requisito leva a cenário, cenário a métrica, métrica a critério e critério a resultado; o resultado retorna ao requisito como aprendizado para revisar premissas futuras, sem reescrever o critério da execução já realizada.</desc><rect x="16" y="30" width="152" height="76" rx="6" fill="#f4f5f7" stroke="#101f38" stroke-width="2" /><text x="92" y="60" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Requisito</text><text x="92" y="84" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">o que se espera?</text><rect x="210" y="30" width="152" height="76" rx="6" fill="#f4f5f7" stroke="#101f38" stroke-width="2" /><text x="286" y="60" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Cenário</text><text x="286" y="84" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">em quais condições?</text><rect x="404" y="30" width="152" height="76" rx="6" fill="#f4f5f7" stroke="#101f38" stroke-width="2" /><text x="480" y="60" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Métrica</text><text x="480" y="84" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">o que será medido?</text><rect x="598" y="30" width="152" height="76" rx="6" fill="#f4f5f7" stroke="#101f38" stroke-width="2" /><text x="674" y="60" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Critério</text><text x="674" y="84" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">qual limite é aceitável?</text><rect x="792" y="30" width="152" height="76" rx="6" fill="#f4f5f7" stroke="#101f38" stroke-width="2" /><text x="868" y="60" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Resultado</text><text x="868" y="84" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">o que foi observado?</text><line x1="170" y1="68" x2="197" y2="68" stroke="#1e88e5" stroke-width="2"  /><polygon points="206,68 197,72.95 197,63.05" fill="#1e88e5" /><line x1="364" y1="68" x2="391" y2="68" stroke="#1e88e5" stroke-width="2"  /><polygon points="400,68 391,72.95 391,63.05" fill="#1e88e5" /><line x1="558" y1="68" x2="585" y2="68" stroke="#1e88e5" stroke-width="2"  /><polygon points="594,68 585,72.95 585,63.05" fill="#1e88e5" /><line x1="752" y1="68" x2="779" y2="68" stroke="#1e88e5" stroke-width="2"  /><polygon points="788,68 779,72.95 779,63.05" fill="#1e88e5" /><line x1="868" y1="108" x2="868" y2="158" stroke="#d9481f" stroke-width="2" stroke-dasharray="6 5" /><line x1="868" y1="158" x2="92" y2="158" stroke="#d9481f" stroke-width="2" stroke-dasharray="6 5" /><line x1="92" y1="158" x2="92" y2="121" stroke="#d9481f" stroke-width="2" stroke-dasharray="6 5" /><polygon points="92,112 96.95,121 87.05,121" fill="#d9481f" /><text x="480" y="182" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">aprendizado: alimenta a revisão das premissas futuras</text></svg>
  <div class="caption">Um elo ausente enfraquece o resto: resultado sem cenário não se interpreta; cenário sem critério não permite decidir.</div>
</div>

<div class="callout">
  <span class="tag">PERGUNTA</span>
  Em qual elo da cadeia aparece o valor de 2 segundos?
</div>

---

<!-- _class: section-divider -->

<div class="part">PARTE 02 / 03</div>

# O desenho do experimento

<div class="topic-list">
  <div class="topic"><span class="n">01</span><span>Usuários, ritmo e vazão</span></div>
  <div class="topic"><span class="n">02</span><span>Perfil de uso</span></div>
  <div class="topic"><span class="n">03</span><span>Fases da execução</span></div>
  <div class="topic"><span class="n">04</span><span>Carga, estresse e escalabilidade</span></div>
</div>

---

<div class="eyebrow">DISTINÇÃO</div>

# 300 sessões não são 300 requisições por segundo

<p class="subtitle">O vocabulário que descreve a carga, e por que ele não se resume a um número.</p>

<div class="two-col">
  <div class="col">
    <span class="label">Quatro termos, quatro papéis</span>
    <ul class="list tight">
      <li><strong>usuário virtual</strong>: sessão automatizada que executa a jornada definida;</li>
      <li><strong>concorrência</strong>: sessões ou operações ativas no mesmo instante;</li>
      <li><strong>taxa de chegada</strong>: ritmo em que novas solicitações começam a executar;</li>
      <li><strong>vazão</strong>: operações concluídas por segundo.</li>
    </ul>
    <p class="muted">Exemplo didático: 200 usuários virtuais ativos, cada um com pausas entre ações, podem produzir bem menos de 200 requisições por segundo.</p>
  </div>
  <div class="col">
    <span class="label">Por que os números divergem</span>
    <p>Entre uma ação e outra, cada sessão navega, pensa e espera. Trezentas pessoas em uma fila não geram trezentos atendimentos por minuto: o ritmo depende do tempo de cada atendimento e da forma de chegar.</p>
    <p class="muted">300 sessões consultando a cada 30 segundos produzem vazão bem menor do que 300 confirmações disparadas no mesmo instante.</p>
    <p class="muted">É por isso que o cenário registra jornada, ritmo e pausas, além do total de sessões: sem elas, a carga gerada não representa ninguém.</p>
  </div>
</div>

<div class="callout">
  <span class="tag">PERGUNTA</span>
  Alguém entrega o número "300 usuários virtuais". O teste está descrito?
</div>

---

<!-- _class: accent-teal -->

<div class="eyebrow">PERFIL DE CARGA</div>

# A carga se distribui entre as ações da jornada

<div class="stack">
  <p>Um perfil de uso hipotético para o portal de matrícula divide as sessões assim:</p>
  <div class="bar-chart">
    <div class="bar-row">
      <span class="name">Consultar disciplinas</span>
      <div class="bar-track"><div class="bar-fill" style="--value: 50%"></div></div>
      <span class="number">50</span>
    </div>
    <div class="bar-row">
      <span class="name">Consultar horários</span>
      <div class="bar-track"><div class="bar-fill" style="--value: 25%"></div></div>
      <span class="number">25</span>
    </div>
    <div class="bar-row">
      <span class="name">Confirmar matrícula</span>
      <div class="bar-track"><div class="bar-fill" style="--value: 15%"></div></div>
      <span class="number">15</span>
    </div>
    <div class="bar-row">
      <span class="name">Consultar comprovantes</span>
      <div class="bar-track"><div class="bar-fill" style="--value: 10%"></div></div>
      <span class="number">10</span>
    </div>
  </div>
  <p class="muted">Percentual de sessões por ação. Cada sessão ainda pausa entre ações; o perfil completo registra jornada, ritmo e tempo de espera.</p>
</div>

<div class="notice closer">
  <span class="notice-title">HIPÓTESE</span>
  Mistura de exercício, não medição real. Em projeto, sai de dados de uso, entrevistas e regras de negócio validadas.
</div>

---

<div class="eyebrow">EXECUÇÃO</div>

# Aquecer, sustentar e encerrar são fases distintas

<div class="media">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 295" role="img" aria-label="Curva de carga com subida gradual de aquecimento, platô de período estável onde as métricas são lidas e descida de encerramento ao longo do tempo."><title>Perfil de carga ao longo do tempo</title><desc>Curva de carga com subida gradual de aquecimento, platô de período estável onde as métricas são lidas e descida de encerramento ao longo do tempo.</desc><line x1="90" y1="35" x2="90" y2="250" stroke="#5b6472" stroke-width="1"  /><line x1="90" y1="250" x2="910" y2="250" stroke="#5b6472" stroke-width="1"  /><path d="M 90 249 C 220 249 250 132 340 132 L 640 132 C 730 132 760 249 830 249" fill="none" stroke="#1e88e5" stroke-width="2.5" /><line x1="340" y1="112" x2="340" y2="248" stroke="#e3e6eb" stroke-width="1" stroke-dasharray="6 5" /><line x1="640" y1="112" x2="640" y2="248" stroke="#e3e6eb" stroke-width="1" stroke-dasharray="6 5" /><text x="215" y="272" font-family="'Roboto Mono', Consolas, monospace" font-size="12" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">aquecimento</text><text x="490" y="272" font-family="'Roboto Mono', Consolas, monospace" font-size="12" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">período estável</text><text x="740" y="272" font-family="'Roboto Mono', Consolas, monospace" font-size="12" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">encerramento</text><text x="90" y="22" font-family="'Roboto Mono', Consolas, monospace" font-size="12" font-weight="400" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0">sessões ativas</text><text x="910" y="272" font-family="'Roboto Mono', Consolas, monospace" font-size="12" font-weight="400" fill="#5b6472" text-anchor="end" dominant-baseline="middle" letter-spacing="0">tempo</text><line x1="490" y1="112" x2="490" y2="128" stroke="#0e9f6e" stroke-width="2" stroke-dasharray="6 5" /><text x="490" y="100" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="700" fill="#0e9f6e" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">onde as métricas são lidas</text></svg>
  <div class="caption">A leitura principal acontece no platô, com a carga planejada sustentada; a subida e a descida existem para chegar e sair de forma controlada.</div>
</div>

<div class="panel c-orange closer">
  <span class="label">O que o aquecimento protege</span>
  <p>Cache frio e inicializações não viram comportamento estável. Quando a inicialização é o objeto do teste, o aquecimento deixa de ser descarte e vira medição.</p>
</div>

---

<div class="eyebrow">TIPOS DE TESTE</div>

# Mesmo sistema, três perguntas diferentes

<div class="media">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 290" role="img" aria-label="Três colunas: a carga mantém a linha no uso previsto; o estresse empurra a curva além da capacidade prevista; a escalabilidade compara a curva de demanda com a capacidade adicionada em degraus."><title>Carga, estresse e escalabilidade</title><desc>Três colunas: a carga mantém a linha no uso previsto; o estresse empurra a curva além da capacidade prevista; a escalabilidade compara a curva de demanda com a capacidade adicionada em degraus.</desc><line x1="330" y1="28" x2="330" y2="282" stroke="#e3e6eb" stroke-width="1"  /><line x1="650" y1="28" x2="650" y2="282" stroke="#e3e6eb" stroke-width="1"  /><text x="170" y="42" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Carga</text><text x="170" y="66" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">atende ao uso previsto?</text><line x1="50" y1="240" x2="290" y2="240" stroke="#e3e6eb" stroke-width="1"  /><text x="170" y="268" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">uso previsto sustentado</text><line x1="50" y1="190" x2="290" y2="190" stroke="#1e88e5" stroke-width="2.5" /><text x="490" y="42" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Estresse</text><text x="490" y="66" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">onde e como degrada?</text><line x1="370" y1="240" x2="610" y2="240" stroke="#e3e6eb" stroke-width="1"  /><text x="490" y="268" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">além do previsto</text><line x1="370" y1="185" x2="610" y2="185" stroke="#5b6472" stroke-width="1.5" stroke-dasharray="6 5" /><polyline points="370,238 452,185" fill="none" stroke="#1e88e5" stroke-width="2.5" /><polyline points="452,185 490,160 610,115" fill="none" stroke="#d9481f" stroke-width="2.5" /><text x="490" y="207" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">capacidade prevista</text><text x="810" y="42" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Escalabilidade</text><text x="810" y="66" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">como a capacidade cresce?</text><line x1="690" y1="240" x2="930" y2="240" stroke="#e3e6eb" stroke-width="1"  /><line x1="690" y1="235" x2="930" y2="150" stroke="#1e88e5" stroke-width="2.5" /><polyline points="690,235 750,235 750,205 820,205 820,175 930,175" fill="none" stroke="#0e9f6e" stroke-width="2.5" /><line x1="702" y1="268" x2="716" y2="268" stroke="#1e88e5" stroke-width="2" /><text x="720" y="268" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12" font-weight="400" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0">demanda</text><line x1="802" y1="268" x2="816" y2="268" stroke="#0e9f6e" stroke-width="2" /><text x="820" y="268" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12" font-weight="400" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0">capacidade</text></svg>
  <div class="caption">Carga sustenta o uso previsto; estresse empurra além dele; escalabilidade compara capacidade quando demanda e recursos variam de forma controlada.</div>
</div>

<div class="callout">
  <span class="tag">PERGUNTA</span>
  Para saber se o portal aguenta o pico de matrícula, qual dos três desenhar primeiro?
</div>

---

<!-- _class: section-divider -->

<div class="part">PARTE 03 / 03</div>

# Métricas, critérios e decisão

<div class="topic-list">
  <div class="topic"><span class="n">01</span><span>O que medir</span></div>
  <div class="topic"><span class="n">02</span><span>Percentis e cauda</span></div>
  <div class="topic"><span class="n">03</span><span>Do resultado à decisão</span></div>
  <div class="topic"><span class="n">04</span><span>Ferramentas e prática</span></div>
</div>

---

<div class="eyebrow">MÉTRICAS</div>

# Cada métrica precisa de definição operacional

<p class="subtitle">Quatro indicadores que aparecem em quase todo relatório de desempenho.</p>

<div class="cards cols-4">
  <div class="card">
    <span class="n">01</span>
    <h3>Tempo de resposta</h3>
    <p>Do início da solicitação até a resposta vista por quem pede. Declarar o ponto de medição: navegador, API ou serviço interno.</p>
  </div>
  <div class="card">
    <span class="n">02</span>
    <h3>Vazão</h3>
    <p>Operações concluídas por segundo. Alta sozinha não garante experiência: uma parcela das sessões pode esperar demais.</p>
  </div>
  <div class="card">
    <span class="n">03</span>
    <h3>Taxa de erro</h3>
    <p>Falhas conforme definição explícita. Uma resposta de "sem vaga" pode ser comportamento correto, não erro técnico.</p>
  </div>
  <div class="card">
    <span class="n">04</span>
    <h3>Recursos</h3>
    <p>CPU, memória, rede e conexões. Saturação é indício de gargalo; o diagnóstico pede correlação com tempos, erros e vazão.</p>
  </div>
</div>

<div class="panel c-purple closer">
  <span class="label">Definição operacional</span>
  <p>Sem declarar como cada métrica é medida, duas pessoas calculam o mesmo indicador de formas diferentes e chegam a vereditos distintos.</p>
</div>

---

<!-- _class: accent-orange -->

<div class="eyebrow">PERCENTIS</div>

# A média esconde a cauda; o percentil mostra

<div class="stack">
  <p>Percentil ordena as respostas e olha uma fatia: p50 é a mediana; p95 informa o tempo que 95% das solicitações não ultrapassaram; p99 expõe o 1% mais lento.</p>
  <div class="media">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 275" role="img" aria-label="Histograma com pico de solicitações perto de um segundo e cauda que se estende muito além, com p50 em 0,7 segundo, p95 em 2,4 segundos e p99 em 5,8 segundos."><title>Distribuição de tempos de resposta e percentis</title><desc>Histograma com pico de solicitações perto de um segundo e cauda que se estende muito além, com p50 em 0,7 segundo, p95 em 2,4 segundos e p99 em 5,8 segundos.</desc><line x1="80" y1="240" x2="900" y2="240" stroke="#5b6472" stroke-width="1"  /><rect x="90" y="224" width="16" height="16" rx="2" fill="#1e88e5" fill-opacity="0.35" /><rect x="112" y="205" width="16" height="35" rx="2" fill="#1e88e5" fill-opacity="0.35" /><rect x="134" y="178" width="16" height="62" rx="2" fill="#1e88e5" fill-opacity="0.35" /><rect x="156" y="151" width="16" height="89" rx="2" fill="#1e88e5" fill-opacity="0.35" /><rect x="178" y="125" width="16" height="115" rx="2" fill="#1e88e5" fill-opacity="0.35" /><rect x="200" y="105" width="16" height="135" rx="2" fill="#1e88e5" fill-opacity="0.35" /><rect x="222" y="100" width="16" height="140" rx="2" fill="#1e88e5" fill-opacity="0.35" /><rect x="244" y="111" width="16" height="129" rx="2" fill="#1e88e5" fill-opacity="0.35" /><rect x="266" y="132" width="16" height="108" rx="2" fill="#1e88e5" fill-opacity="0.35" /><rect x="288" y="155" width="16" height="85" rx="2" fill="#1e88e5" fill-opacity="0.35" /><rect x="310" y="174" width="16" height="66" rx="2" fill="#1e88e5" fill-opacity="0.35" /><rect x="332" y="187" width="16" height="53" rx="2" fill="#1e88e5" fill-opacity="0.35" /><rect x="354" y="196" width="16" height="44" rx="2" fill="#1e88e5" fill-opacity="0.35" /><rect x="376" y="203" width="16" height="37" rx="2" fill="#1e88e5" fill-opacity="0.35" /><rect x="398" y="208" width="16" height="32" rx="2" fill="#1e88e5" fill-opacity="0.35" /><rect x="420" y="213" width="16" height="27" rx="2" fill="#1e88e5" fill-opacity="0.35" /><rect x="442" y="216" width="16" height="24" rx="2" fill="#1e88e5" fill-opacity="0.35" /><rect x="464" y="219" width="16" height="21" rx="2" fill="#1e88e5" fill-opacity="0.35" /><rect x="486" y="221" width="16" height="19" rx="2" fill="#1e88e5" fill-opacity="0.35" /><rect x="508" y="222" width="16" height="18" rx="2" fill="#1e88e5" fill-opacity="0.35" /><rect x="530" y="224" width="16" height="16" rx="2" fill="#1e88e5" fill-opacity="0.35" /><rect x="552" y="225" width="16" height="15" rx="2" fill="#1e88e5" fill-opacity="0.35" /><rect x="574" y="226" width="16" height="14" rx="2" fill="#1e88e5" fill-opacity="0.35" /><rect x="596" y="227" width="16" height="13" rx="2" fill="#1e88e5" fill-opacity="0.35" /><rect x="618" y="228" width="16" height="12" rx="2" fill="#1e88e5" fill-opacity="0.35" /><rect x="640" y="228" width="16" height="12" rx="2" fill="#1e88e5" fill-opacity="0.35" /><rect x="662" y="229" width="16" height="11" rx="2" fill="#1e88e5" fill-opacity="0.35" /><rect x="684" y="229" width="16" height="11" rx="2" fill="#1e88e5" fill-opacity="0.35" /><rect x="706" y="230" width="16" height="10" rx="2" fill="#1e88e5" fill-opacity="0.35" /><rect x="728" y="230" width="16" height="10" rx="2" fill="#1e88e5" fill-opacity="0.35" /><rect x="750" y="231" width="16" height="9" rx="2" fill="#1e88e5" fill-opacity="0.35" /><rect x="772" y="231" width="16" height="9" rx="2" fill="#1e88e5" fill-opacity="0.35" /><rect x="794" y="232" width="16" height="8" rx="2" fill="#1e88e5" fill-opacity="0.35" /><rect x="816" y="232" width="16" height="8" rx="2" fill="#1e88e5" fill-opacity="0.35" /><line x1="220" y1="100" x2="220" y2="238" stroke="#101f38" stroke-width="2" stroke-dasharray="6 5" /><text x="220" y="86" font-family="'Roboto Mono', Consolas, monospace" font-size="12" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">p50 · 0,7 s</text><line x1="560" y1="100" x2="560" y2="238" stroke="#d9481f" stroke-width="2" stroke-dasharray="6 5" /><text x="560" y="86" font-family="'Roboto Mono', Consolas, monospace" font-size="12" font-weight="700" fill="#d9481f" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">p95 · 2,4 s</text><line x1="790" y1="100" x2="790" y2="238" stroke="#d9481f" stroke-width="2" stroke-dasharray="6 5" /><text x="790" y="86" font-family="'Roboto Mono', Consolas, monospace" font-size="12" font-weight="700" fill="#d9481f" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">p99 · 5,8 s</text><text x="90" y="30" font-family="'Roboto Mono', Consolas, monospace" font-size="12" font-weight="400" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0">solicitações</text><text x="900" y="264" font-family="'Roboto Mono', Consolas, monospace" font-size="12" font-weight="400" fill="#5b6472" text-anchor="end" dominant-baseline="middle" letter-spacing="0">tempo de resposta por solicitação</text><text x="668" y="152" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">cauda lenta</text></svg>
    <div class="caption">Execução hipotética: metade responde em até 0,7 s, mas a cauda espera muito mais. A média sozinha deixaria essa parcela invisível.</div>
  </div>
</div>

<div class="callout">
  <span class="tag">PERGUNTA</span>
  Média de 0,8 s e p95 de 4 s: a experiência foi boa para todos?
</div>

---

<div class="eyebrow">DECISÃO</div>

# Nem toda execução termina em aprovado ou reprovado

<div class="two-col">
  <div class="col">
    <span class="label">O que entra no veredito</span>
    <ul class="list tight">
      <li>critério definido antes, para cada métrica relevante;</li>
      <li>resultado comparado critério a critério, sem média que disfarce;</li>
      <li>validade da execução: a carga foi gerada e sustentada como planejado;</li>
      <li>escopo da conclusão: vale para a versão, o ambiente, os dados e o perfil testados.</li>
    </ul>
  </div>
  <div class="col">
    <span class="label">Quando nada decide</span>
    <ul class="list tight">
      <li>o gerador não produziu a carga planejada;</li>
      <li>o ambiente sofreu interferência fora de controle;</li>
      <li>a versão do sistema mudou no meio da execução;</li>
      <li>a coleta de métricas falhou.</li>
    </ul>
    <p class="muted">A resposta é "execução inválida ou inconclusiva", com a causa registrada e um plano de repetição.</p>
  </div>
</div>

<div class="quote closer">
  <div class="text">"Aprovado" e "reprovado" falam do sistema; "inconclusivo" fala do experimento.</div>
  <div class="author">REGRA DE RELATÓRIO</div>
</div>

---

<div class="eyebrow">EXERCÍCIO · LEITURA DE RESULTADO</div>

# Uma métrica passa, a outra não: qual é o veredito?

<p class="subtitle">Execução hipotética do cenário de matrícula, com os critérios definidos antes.</p>

<div class="two-col">
  <div class="col">
    <span class="label">O que o relatório trouxe</span>
    <table>
      <thead>
        <tr><th>Indicador</th><th>Critério anterior</th><th>Observado</th></tr>
      </thead>
      <tbody>
        <tr><td>p95 da consulta de disciplinas</td><td>abaixo de 2 s</td><td class="hl-orange">2,4 s</td></tr>
        <tr><td>Taxa de erro técnico</td><td>abaixo de 1%</td><td class="hl-teal">0,6%</td></tr>
      </tbody>
    </table>
    <p class="tiny muted">Números didáticos, para leitura do caso.</p>
  </div>
  <div class="col">
    <span class="label">Registrar a conclusão</span>
    <ul class="list tight">
      <li>comparar cada indicador com o seu critério e escrever o veredito do cenário;</li>
      <li>decidir se "a maioria das respostas foi rápida" sustenta aprovação;</li>
      <li>declarar o que a conclusão permite afirmar sobre produção, e o que não permite.</li>
    </ul>
  </div>
</div>

<div class="notice closer">
  <span class="notice-title">COMECE PELO CRITÉRIO</span>
  O número observado só significa algo diante do limite combinado antes de executar.
</div>

---

<div class="eyebrow">FERRAMENTAS</div>

# A ferramenta é meio; a decisão é do planejamento

<p class="subtitle">Comparação introdutória: a escolha depende do cenário, da equipe e dos requisitos técnicos.</p>

| Ferramenta | Como o cenário é definido | Quando considerar |
|---|---|---|
| Apache JMeter | Plano montado na interface gráfica, com execução também fora dela | Equipes que constroem o plano visualmente e automatizam depois |
| k6 | Cenários escritos como código, com foco em automação | Integração com pipelines e cenários versionados |
| Locust | Usuários e jornadas programados em Python | Equipes que já descrevem comportamentos em Python |
| Gatling | Cenários como código, com relatórios de execução | Quem prefere teste de carga como código |

<div class="panel c-teal closer">
  <span class="label">Antes de escolher</span>
  <p>Conferir protocolo, capacidade de gerar a carga sem virar o gargalo, exportação de resultados e integração com o fluxo da equipe. Nenhuma delas define limites ou aprova algo no seu lugar.</p>
</div>

---

<div class="eyebrow">EXERCÍCIO · PLANO DE TESTE</div>

# Propor o teste antes do período de matrícula

<div class="stack">
  <div class="panel c-blue">
    <span class="label">Requisito recebido pela equipe</span>
    <p>"O sistema deve funcionar bem quando muitos estudantes acessarem ao mesmo tempo."</p>
  </div>
  <div class="cards cols-3">
    <div class="card compact">
      <span class="n">01</span>
      <h3>Requisito verificável</h3>
      <p>Reescrever a frase com operação, condição, métrica e limite; valores declarados como hipóteses.</p>
    </div>
    <div class="card compact">
      <span class="n">02</span>
      <h3>Objetivo e jornada</h3>
      <p>Definir a pergunta do teste e a operação avaliada no portal.</p>
    </div>
    <div class="card compact">
      <span class="n">03</span>
      <h3>Perfil de carga</h3>
      <p>Estimar sessões, ritmo de chegada, pausas e duração do período estável.</p>
    </div>
    <div class="card compact">
      <span class="n">04</span>
      <h3>Ambiente e dados</h3>
      <p>Descrever onde o teste roda e com que volume e estado de dados.</p>
    </div>
    <div class="card compact">
      <span class="n">05</span>
      <h3>Métricas e critérios</h3>
      <p>Escolher ao menos quatro métricas com unidade e definir limites antes de executar.</p>
    </div>
    <div class="card compact">
      <span class="n">06</span>
      <h3>Ferramenta, riscos e IA</h3>
      <p>Justificar a ferramenta, registrar dois riscos e como validar a ajuda da IA.</p>
    </div>
  </div>
</div>

<div class="notice closer">
  <span class="notice-title">O QUE FAZ UM BOM PLANO</span>
  Cada número declarado responde a uma pergunta da cadeia: quem lê consegue repetir o teste.
</div>

---

<div class="eyebrow">AUTOVERIFICAÇÃO</div>

# Checar o plano antes de confiar nele

<p class="subtitle">Nenhuma delas exige ferramenta para responder: é o plano que está em jogo.</p>

<div class="two-col">
  <div class="col">
    <span class="label">Retome as respostas</span>
    <ul class="list tight">
      <li>Qual a diferença entre a métrica e o critério de aceitação?</li>
      <li>Por que 300 sessões simultâneas não descrevem sozinhas um perfil de carga?</li>
      <li>Onde a média engana, e qual medida revela?</li>
      <li>Uma execução interrompida por falha do gerador reprova o sistema?</li>
      <li>Por que definir o critério depois de ver o resultado compromete a avaliação?</li>
    </ul>
    <p class="muted">Se alguma resposta demorar, o elo correspondente da cadeia é o ponto fraco do estudo.</p>
  </div>
  <div class="col">
    <span class="label">Antes de apresentar qualquer plano</span>
    <ul class="list tight">
      <li>Que decisão esse teste permitirá tomar?</li>
      <li>Como sabemos que a carga representa o uso real?</li>
      <li>O que seria aprovação, e o que invalidaria a execução?</li>
      <li>Que conclusão os dados coletados não permitem tirar?</li>
      <li>Quem validou os limites, e qual necessidade eles representam?</li>
    </ul>
    <p class="muted">Um plano sem resposta para essas perguntas coleta dados sem propósito.</p>
  </div>
</div>

<div class="panel c-purple closer">
  <span class="label">Próxima aula</span>
  <p>Usabilidade e acessibilidade: além de suportar a demanda, as pessoas precisam conseguir usar o sistema de forma eficaz e inclusiva.</p>
</div>

---

<!-- _class: title -->

<div class="eyebrow">SÍNTESE</div>

# A qualidade do teste nasce
# antes da ferramenta.

<p class="subtitle">Requisito verificável, cenário representativo, métrica com definição e critério antes da execução: é isso que transforma intenção em evidência.</p>

<div class="byline">
  <strong>Prof. Victor Brayner</strong>
  <span>ads · 2026.2</span>
</div>
