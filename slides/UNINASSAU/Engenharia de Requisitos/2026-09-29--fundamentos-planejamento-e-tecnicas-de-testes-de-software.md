---
marp: true
theme: campus-dev
size: 16:9
paginate: true
html: true
footer: 'ENGENHARIA DE REQUISITOS, TESTES E QUALIDADE · UNIDADE II'
---

<!-- _class: title -->

<div class="eyebrow">ENGENHARIA DE REQUISITOS, TESTES E QUALIDADE · UNIDADE II</div>

# Fundamentos, planejamento
# e técnicas de testes

<p class="subtitle">Testar é planejar experiências verificáveis que produzem evidências sobre riscos, requisitos e comportamentos.</p>

<div class="byline">
  <strong>Prof. Victor Brayner</strong>
  <span>ads · 2026.2</span>
</div>

---

<div class="eyebrow">PONTO DE PARTIDA</div>

# O botão funcionou no computador da equipe

<div class="stack">
<div class="two-col">
  <div class="col">
    <span class="label">A verificação que foi feita</span>
    <p>Alguém abriu o portal no próprio computador, clicou em Confirmar matrícula, viu a confirmação aparecer e comunicou que a funcionalidade estava pronta.</p>
    <ul class="list tight">
      <li>uma única máquina e um único caminho;</li>
      <li>nenhuma disputa simultânea por vaga;</li>
      <li>o registro no banco não foi conferido.</li>
    </ul>
  </div>
  <div class="col">
    <span class="label">O que o primeiro dia mostrou</span>
    <ul class="list tight">
      <li>dois estudantes ocupam a mesma última vaga no mesmo instante;</li>
      <li>a tela confirma a matrícula, mas o registro não aparece no sistema;</li>
      <li>disciplinas com conflito de horário travam a conclusão sem explicação.</li>
    </ul>
    <p class="muted">Nenhum dos três comportamentos tinha resultado esperado definido antes da liberação.</p>
  </div>
</div>

<div class="panel c-orange">
  <span class="label">O que os sintomas têm em comum</span>
  <p>Cada sintoma corresponde a uma regra de negócio: concorrência pela última vaga, persistência do registro, conflito de horário. Nenhuma virou verificação antes da liberação, e transformar regra em verificação é o trabalho desta aula.</p>
</div>
</div>

<div class="callout">
  <span class="tag">PERGUNTAS GUIA</span>
  Como descobrir esses problemas antes de liberar o portal, e que evidência bastaria para chamar a funcionalidade de pronta?
</div>

---

<div class="eyebrow">TESE</div>

# Testes revelam a presença de defeitos, nunca a ausência

<div class="two-col">
  <div class="col">
    <span class="label">O que um teste pode mostrar</span>
    <p>Um teste aprovado significa que aquele caso, com aquelas entradas e condições, produziu o resultado esperado.</p>
    <ul class="list tight">
      <li>que o comportamento observado correspondeu ao resultado esperado em condições definidas;</li>
      <li>a presença de um defeito, quando a falha aparece na execução;</li>
      <li>evidência para decidir liberar, corrigir ou priorizar.</li>
    </ul>
  </div>
  <div class="col">
    <span class="label">O que ele não mostra sozinho</span>
    <ul class="list tight">
      <li>que não existem outros defeitos;</li>
      <li>que todos os cenários possíveis foram avaliados;</li>
      <li>que o requisito atende à necessidade de quem usa;</li>
      <li>o desempenho sob uma carga diferente da testada.</li>
    </ul>
    <p class="muted">A conclusão sobre qualidade vem do conjunto de evidências, com os limites de cada teste declarados.</p>
  </div>
</div>

<div class="quote closer">
  <div class="text">“Testar é planejar experiências verificáveis que produzem evidências sobre riscos, requisitos e comportamentos.”</div>
  <div class="author">TESE DA AULA</div>
</div>

---

<!-- _class: section-divider -->

<div class="part">PARTE 01 / 04</div>

# Fundamentos e terminologia

<div class="topic-list cols-3">
  <div class="topic"><span class="n">01</span><span>Erro, defeito e falha</span></div>
  <div class="topic"><span class="n">02</span><span>Verificação e validação</span></div>
  <div class="topic"><span class="n">03</span><span>O que a evidência permite afirmar</span></div>
</div>

---

<div class="eyebrow">CONCEITO</div>

# Erro, defeito e falha marcam momentos diferentes

<div class="cards cols-3">
  <div class="card">
    <span class="n">01</span>
    <h3>Erro</h3>
    <p>Ação, decisão ou interpretação humana incorreta. Pode acontecer na elicitação, no projeto, na programação ou na operação.</p>
    <p>No portal, alguém interpreta que a matrícula pode seguir sem o pré-requisito.</p>
  </div>
  <div class="card">
    <span class="n">02</span>
    <h3>Defeito</h3>
    <p>Problema introduzido em um artefato: requisito, modelo, código, configuração. Pode permanecer latente e nunca se manifestar.</p>
    <p>No portal, a condição implementada verifica a vaga e ignora o pré-requisito.</p>
  </div>
  <div class="card">
    <span class="n">03</span>
    <h3>Falha</h3>
    <p>Manifestação observável de um comportamento incorreto durante a execução ou o uso do sistema.</p>
    <p>No portal, um estudante sem pré-requisito conclui a matrícula.</p>
  </div>
</div>

<div class="notice closer">
  <span class="notice-title">PARA ANOTAR</span>
  O erro pode nascer na Engenharia de Requisitos, antes de qualquer linha de código: revisar e validar requisitos também previne defeitos.
</div>

---

<div class="eyebrow">TERMINOLOGIA</div>

# Do erro humano à falha observada

<div class="media">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 196" role="img" aria-label="Um erro humano introduz um defeito em um artefato; quando a execução atinge a condição necessária, o defeito se manifesta como falha observada.">
    <title>Do erro humano à falha observada</title>
    <desc>Um erro humano introduz um defeito em um artefato; quando a execução atinge a condição necessária, o defeito se manifesta como falha observada.</desc>
    <rect x="24" y="48" width="210" height="88" rx="6" fill="#f4f5f7" stroke="#1e88e5" stroke-width="2" />
    <text x="129" y="84" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Erro humano</text>
    <text x="129" y="108" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">ação ou decisão incorreta</text>
    <line x1="236" y1="92" x2="279" y2="92" stroke="#1e88e5" stroke-width="2"  />
    <polygon points="288,92 279,96.95 279,87.05" fill="#1e88e5" />
    <rect x="292" y="48" width="250" height="88" rx="6" fill="#f4f5f7" stroke="#101f38" stroke-width="2" />
    <text x="417" y="84" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Defeito no artefato</text>
    <text x="417" y="108" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">requisito, código, configuração</text>
    <line x1="544" y1="92" x2="587" y2="92" stroke="#1e88e5" stroke-width="2"  />
    <polygon points="596,92 587,96.95 587,87.05" fill="#1e88e5" />
    <rect x="600" y="64" width="130" height="56" rx="6" fill="#ffffff" stroke="#5b6472" stroke-width="2" stroke-dasharray="6 5" />
    <text x="665" y="84" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#1f2937" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">condição de</text>
    <text x="665" y="102" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#1f2937" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">execução</text>
    <line x1="732" y1="92" x2="775" y2="92" stroke="#1e88e5" stroke-width="2"  />
    <polygon points="784,92 775,96.95 775,87.05" fill="#1e88e5" />
    <rect x="788" y="48" width="150" height="88" rx="6" fill="#f4f5f7" stroke="#d9481f" stroke-width="2" />
    <text x="863" y="84" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Falha observada</text>
    <text x="863" y="108" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">aparece na execução</text>
    <text x="24" y="176" font-family="'Roboto Mono', Consolas, monospace" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0">nem todo erro gera defeito · nem todo defeito é acionado</text>
  </svg>
  <div class="caption">A condição de execução é o que ativa o defeito latente: sem ela, o defeito existe e a falha não aparece.</div>
</div>

<span class="label">O exemplo do pré-requisito, passo a passo</span>
<ul class="list arrow">
  <li>a regra de pré-requisito é esquecida durante a análise;</li>
  <li>o requisito documentado fica incompleto;</li>
  <li>a implementação segue a especificação incompleta;</li>
  <li>um estudante sem pré-requisito solicita a matrícula;</li>
  <li>o sistema aceita a matrícula indevidamente.</li>
</ul>

<div class="notice closer">
  <span class="notice-title">PERGUNTA</span>
  Em qual dessas etapas uma revisão de requisitos teria detido o problema?
</div>

---

<div class="eyebrow">COMPARAÇÃO</div>

# Verificação e validação respondem perguntas distintas

<p class="lead">Um sistema pode estar conforme a especificação e ainda não resolver o problema de quem o usa: as duas perguntas precisam de resposta.</p>

| Aspecto | Verificação | Validação |
|---|---|---|
| Foco | conformidade com especificações | adequação à necessidade e ao uso |
| Pergunta | construímos o produto corretamente? | construímos o produto certo? |
| Referência | requisitos, critérios, modelos | necessidades, contexto, quem usa |
| No portal | testar se o limite de vagas é respeitado | confirmar se o fluxo serve à secretaria e aos estudantes |

<div class="notice closer">
  <span class="notice-title">CUIDADO</span>
  Verificação não se resume a teste automatizado, nem validação a opinião de usuário: as duas combinam técnicas e evidências.
</div>

---

<!-- _class: section-divider -->

<div class="part">PARTE 02 / 04</div>

# Planejamento e projeto de testes

<div class="topic-list cols-3">
  <div class="topic"><span class="n">01</span><span>Da necessidade à decisão</span></div>
  <div class="topic"><span class="n">02</span><span>Estratégia e plano de testes</span></div>
  <div class="topic"><span class="n">03</span><span>Cenários e casos de teste</span></div>
</div>

---

<div class="eyebrow">CONTINUIDADE</div>

# Da necessidade à decisão, cada elo depende do anterior

<div class="media">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 308" role="img" aria-label="Linha contínua da Engenharia de Requisitos aos testes: necessidade, requisito, critério de aceitação, caso de teste, execução, evidência e decisão.">
    <title>Da necessidade à decisão</title>
    <desc>Linha contínua da Engenharia de Requisitos aos testes: necessidade, requisito, critério de aceitação, caso de teste, execução, evidência e decisão.</desc>
    <rect x="32" y="28" width="190" height="80" rx="6" fill="#f4f5f7" stroke="#101f38" stroke-width="2" />
    <text x="127" y="60" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Necessidade</text>
    <text x="127" y="84" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">problema a resolver</text>
    <rect x="270" y="28" width="190" height="80" rx="6" fill="#f4f5f7" stroke="#101f38" stroke-width="2" />
    <text x="365" y="60" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Requisito</text>
    <text x="365" y="84" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">o que foi acordado</text>
    <rect x="508" y="28" width="190" height="80" rx="6" fill="#f4f5f7" stroke="#1e88e5" stroke-width="2" />
    <text x="603" y="60" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Critério de aceitação</text>
    <text x="603" y="84" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">resultado observável</text>
    <rect x="746" y="28" width="190" height="80" rx="6" fill="#f4f5f7" stroke="#1e88e5" stroke-width="2" />
    <text x="841" y="60" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Caso de teste</text>
    <text x="841" y="84" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">condições, dados e passos</text>
    <line x1="224" y1="68" x2="257" y2="68" stroke="#1e88e5" stroke-width="2"  />
    <polygon points="266,68 257,72.95 257,63.05" fill="#1e88e5" />
    <line x1="462" y1="68" x2="495" y2="68" stroke="#1e88e5" stroke-width="2"  />
    <polygon points="504,68 495,72.95 495,63.05" fill="#1e88e5" />
    <line x1="700" y1="68" x2="733" y2="68" stroke="#1e88e5" stroke-width="2"  />
    <polygon points="742,68 733,72.95 733,63.05" fill="#1e88e5" />
    <line x1="841" y1="110" x2="841" y2="195" stroke="#1e88e5" stroke-width="2"  />
    <polygon points="841,204 836.05,195 845.95,195" fill="#1e88e5" />
    <rect x="746" y="208" width="190" height="80" rx="6" fill="#f4f5f7" stroke="#0e9f6e" stroke-width="2" />
    <text x="841" y="240" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Execução</text>
    <text x="841" y="264" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">comportamento observado</text>
    <rect x="508" y="208" width="190" height="80" rx="6" fill="#f4f5f7" stroke="#0e9f6e" stroke-width="2" />
    <text x="603" y="240" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Evidência</text>
    <text x="603" y="264" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">registro e comparação</text>
    <rect x="270" y="208" width="190" height="80" rx="6" fill="#f4f5f7" stroke="#d9481f" stroke-width="2" />
    <text x="365" y="240" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Decisão</text>
    <text x="365" y="264" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">liberar, corrigir ou priorizar</text>
    <line x1="744" y1="248" x2="709" y2="248" stroke="#1e88e5" stroke-width="2"  />
    <polygon points="700,248 709,243.05 709,252.95" fill="#1e88e5" />
    <line x1="506" y1="248" x2="471" y2="248" stroke="#1e88e5" stroke-width="2"  />
    <polygon points="462,248 471,243.05 471,252.95" fill="#1e88e5" />
  </svg>
  <div class="caption">A evidência de um teste é tão boa quanto o requisito e o critério que a originaram: requisito ambíguo gera teste ambíguo.</div>
</div>

<div class="callout">
  <span class="tag">PERGUNTAS GUIA</span>
  Qual informação precisa estar definida em cada etapa para a seguinte ser confiável?
</div>

---

<div class="eyebrow">PLANEJAMENTO</div>

# Estratégia e plano respondem perguntas diferentes

<div class="two-col">
  <div class="col">
    <span class="label">Estratégia de testes</span>
    <p>Define a abordagem geral: quais áreas são mais críticas, quais níveis e técnicas usar, o que automatizar, quais ambientes são necessários e quais critérios encerram o trabalho.</p>
    <p>Para o portal, a prioridade máxima é impedir matrícula sem pré-requisito, duplicatas, conflito de horário e ocupação acima do limite de vagas.</p>
  </div>
  <div class="col">
    <span class="label">Plano de testes</span>
    <p>Registra como a estratégia vale para um escopo ou ciclo específico: objetivos, itens dentro e fora, recursos e papéis, ambiente e dados, critérios, riscos e forma de comunicar resultados.</p>
    <p>A formalidade é proporcional ao risco e à criticidade: nem todo projeto precisa de documentos extensos e separados.</p>
  </div>
</div>

<div class="panel c-teal closer">
  <span class="label">Critérios de entrada e saída</span>
  <p>Entrada: versão pronta, ambiente e dados disponíveis, requisitos claros o bastante. Saída: casos críticos executados, nenhum defeito bloqueador aberto, riscos residuais comunicados. Cumprir a saída encerra uma decisão dentro do contexto; o processo é iterativo, e uma execução pode revelar requisito ambíguo e devolver a análise ao início.</p>
</div>

---

<div class="eyebrow">PROJETO DE TESTES</div>

# Cenário descreve a situação; caso de teste a executa

<div class="two-col">
  <div class="col">
    <span class="label">Cenário de teste</span>
    <p>Situação ampla que precisa ser avaliada.</p>
    <p>Exemplo: verificar se um estudante conclui a matrícula quando atende a todos os critérios e existe vaga disponível.</p>
    <p class="muted">O cenário diz o que observar; o caso de teste detalha as condições, os dados, os passos e o resultado esperado de uma execução específica.</p>
  </div>
  <div class="col">
    <span class="label">Caso de teste MAT-001</span>
    <table>
      <thead>
        <tr><th>Campo</th><th>MAT-001: matrícula válida</th></tr>
      </thead>
      <tbody>
        <tr><td>Objetivo</td><td>permitir matrícula válida</td></tr>
        <tr><td>Requisito</td><td>regras de elegibilidade da disciplina</td></tr>
        <tr><td>Pré-condições</td><td>autenticado; pré-requisitos cumpridos; vaga disponível; sem conflito</td></tr>
        <tr><td>Dados</td><td>estudante E-102; disciplina BD-201; vagas = 1</td></tr>
        <tr><td>Passos</td><td>acessar a disciplina, solicitar e confirmar</td></tr>
        <tr><td>Resultado esperado</td><td>registro único, vaga atualizada, confirmação exibida</td></tr>
      </tbody>
    </table>
  </div>
</div>

<div class="notice closer">
  <span class="notice-title">PARA ANOTAR</span>
  O resultado esperado é definido antes da execução; o obtido, observado durante. A comparação entre os dois decide o status do caso.
</div>

---

<!-- _class: section-divider -->

<div class="part">PARTE 03 / 04</div>

# Técnicas e níveis de teste

<div class="topic-list cols-3">
  <div class="topic"><span class="n">01</span><span>Caixa-preta e caixa-branca</span></div>
  <div class="topic"><span class="n">02</span><span>Classes, limites e decisões</span></div>
  <div class="topic"><span class="n">03</span><span>Unitário, integração, sistema, aceitação</span></div>
</div>

---

<div class="eyebrow">TÉCNICAS</div>

# Caixa-preta e caixa-branca buscam a mesma evidência

<div class="media">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 252" role="img" aria-label="A caixa-preta observa entradas e saídas sem ver o interior; a caixa-branca observa decisões e caminhos internos; as duas buscam evidência sobre o comportamento e os riscos.">
    <title>Caixa-preta e caixa-branca</title>
    <desc>A caixa-preta observa entradas e saídas sem ver o interior; a caixa-branca observa decisões e caminhos internos; as duas buscam evidência sobre o comportamento e os riscos.</desc>
    <text x="80" y="36" font-family="'Roboto Mono', Consolas, monospace" font-size="13" font-weight="700" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0.6">CAIXA-PRETA</text>
    <rect x="80" y="50" width="300" height="156" rx="6" fill="#f4f5f7" stroke="#101f38" stroke-width="2" />
    <text x="230" y="116" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Caixa-preta</text>
    <text x="230" y="140" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">entradas e saídas visíveis</text>
    <line x1="14" y1="88" x2="67" y2="88" stroke="#1e88e5" stroke-width="2"  />
    <polygon points="76,88 67,92.95 67,83.05" fill="#1e88e5" />
    <line x1="14" y1="176" x2="67" y2="176" stroke="#1e88e5" stroke-width="2"  />
    <polygon points="76,176 67,180.95 67,171.05" fill="#1e88e5" />
    <text x="14" y="66" font-family="'Roboto Mono', Consolas, monospace" font-size="12" font-weight="400" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0">entradas</text>
    <line x1="380" y1="88" x2="405" y2="88" stroke="#1e88e5" stroke-width="2"  />
    <polygon points="414,88 405,92.95 405,83.05" fill="#1e88e5" />
    <line x1="380" y1="176" x2="405" y2="176" stroke="#1e88e5" stroke-width="2"  />
    <polygon points="414,176 405,180.95 405,171.05" fill="#1e88e5" />
    <text x="384" y="66" font-family="'Roboto Mono', Consolas, monospace" font-size="12" font-weight="400" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0">saídas</text>
    <text x="500" y="108" font-family="'Roboto Mono', Consolas, monospace" font-size="13" font-weight="700" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">mesmo objetivo:</text>
    <text x="500" y="136" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="15.5" font-weight="400" fill="#1f2937" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">produzir evidência sobre</text>
    <text x="500" y="160" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="15.5" font-weight="400" fill="#1f2937" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">o comportamento e os riscos</text>
    <text x="620" y="36" font-family="'Roboto Mono', Consolas, monospace" font-size="13" font-weight="700" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0.6">CAIXA-BRANCA</text>
    <rect x="620" y="50" width="300" height="156" rx="6" fill="#f4f5f7" stroke="#1e88e5" stroke-width="2" />
    <text x="770" y="76" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Caixa-branca</text>
    <text x="770" y="98" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">decisões e caminhos internos</text>
    <polygon points="770,124 822,156 770,188 718,156" fill="#ffffff" stroke="#1e88e5" stroke-width="2" />
    <text x="770" y="156" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12" font-weight="400" fill="#1f2937" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">decisão</text>
    <line x1="716" y1="156" x2="673" y2="156" stroke="#1e88e5" stroke-width="2"  />
    <polygon points="664,156 673,151.05 673,160.95" fill="#1e88e5" />
    <line x1="824" y1="156" x2="867" y2="156" stroke="#1e88e5" stroke-width="2"  />
    <polygon points="876,156 867,160.95 867,151.05" fill="#1e88e5" />
    <text x="690" y="142" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">caminho 1</text>
    <text x="850" y="142" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">caminho 2</text>
    <text x="80" y="232" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0">deriva casos de entradas, saídas e regras esperadas</text>
    <text x="620" y="232" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0">deriva casos de instruções, decisões e caminhos</text>
  </svg>
  <div class="caption">As duas derivam casos de formas diferentes e se completam no mesmo plano: uma lê o comportamento prometido, a outra a estrutura que o produz.</div>
</div>

---

<div class="eyebrow">CAIXA-PRETA</div>

# Poucos valores bem escolhidos dizem mais que muitos

<p class="subtitle">Um formulário com 10 campos, dezenas de valores possíveis por campo, vários perfis e navegadores: testar cada combinação é impraticável.</p>

<div class="two-col">
  <div class="col">
    <span class="label">Particionamento de equivalência</span>
    <p>Divide o domínio de entradas em classes que a regra trata de forma semelhante e escolhe um representante de cada uma.</p>
    <ul class="list tight">
      <li>regra ilustrativa: solicitar de 1 a 6 disciplinas;</li>
      <li>classes: abaixo de 1, entre 1 e 6, acima de 6;</li>
      <li>representantes: 0, 3 e 7.</li>
    </ul>
    <p class="muted">Três execuções cobrem as três classes da regra ilustrativa; o número de casos cresce com os campos e as regras envolvidas.</p>
  </div>
  <div class="col">
    <span class="label">Análise de valor-limite</span>
    <p>Concentra os testes nas fronteiras entre classes, onde comparações como usar &gt; no lugar de &gt;= costumam quebrar.</p>
    <ul class="list tight">
      <li>abaixo do limite inferior: 0;</li>
      <li>nos limites: 1 e 6;</li>
      <li>acima do limite superior: 7, com vizinhos 2 e 5.</li>
    </ul>
    <p class="muted">Para valores contínuos, datas ou intervalos complexos, os limites precisam ser definidos com cuidado.</p>
  </div>
</div>

<div class="callout">
  <span class="tag">NA PRÁTICA</span>
  A seleção reduz o número de execuções; a qualidade das classes continua dependendo da leitura correta da regra.
</div>

---

<div class="eyebrow">CAIXA-PRETA · COMBINAÇÕES</div>

# Tabela de decisão expõe as combinações que importam

<p class="lead">Quando o resultado depende de várias condições juntas, cada linha da tabela vira um caso de teste.</p>

| Pré-requisito atendido? | Há vaga? | Sem conflito de horário? | Resultado esperado |
|---|---|---|---|
| Sim | Sim | Sim | Permitir a matrícula |
| Não | Sim | Sim | Bloquear por pré-requisito |
| Sim | Não | Sim | Bloquear por falta de vaga |
| Sim | Sim | Não | Bloquear por conflito |

<div class="notice closer">
  <span class="notice-title">OUTRA TÉCNICA CAIXA-PRETA</span>
  Quando o sistema muda de estado em resposta a eventos, como uma solicitação em rascunho, pendente, confirmada ou cancelada, os casos verificam as transições permitidas e as inválidas.
</div>

---

<div class="eyebrow">CAIXA-BRANCA</div>

# Cobertura mede o que foi executado, não a qualidade

<div class="two-col">
  <div class="col">
    <span class="label">O código orienta a seleção</span>

```text
se estudante_atende_pre_requisito:
    se existe_vaga:
        permitir_matricula()
    senão:
        informar_sem_vaga()
senão:
    informar_pre_requisito_pendente()
```

    <p class="muted">Os três casos mínimos percorrem todas as linhas e exercitam cada decisão nos dois sentidos.</p>
  </div>
  <div class="col">
    <span class="label">O que exercitar</span>
    <ul class="list tight">
      <li>instruções: proporção de linhas executadas; 15 de 20 instruções percorridas equivalem a 75%, conforme a definição adotada;</li>
      <li>decisões: cada condição precisa ser executada como verdadeira e como falsa;</li>
      <li>seleção mínima: pré-requisito cumprido com vaga, cumprido sem vaga e pré-requisito pendente.</li>
    </ul>
    <p class="muted">Cobertura de decisões costuma exigir mais casos que cobertura de instruções, porque cada ramo precisa ser alcançado.</p>
  </div>
</div>

<div class="callout">
  <span class="tag">LIMITE</span>
  Cobertura de 100% de instruções não prova que os resultados esperados estão corretos: um teste pode percorrer uma linha sem verificar o que ela produziu.
</div>

---

<div class="eyebrow">NÍVEIS DE TESTE</div>

# Cada nível de teste avalia um escopo diferente

<div class="media">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 290" role="img" aria-label="Escopos aninhados: o teste unitário avalia uma função isolada, o de integração avalia componentes que se comunicam, o de sistema avalia o fluxo completo, e a aceitação acontece fora, com quem conhece o processo.">
    <title>Os quatro níveis de teste</title>
    <desc>Escopos aninhados: o teste unitário avalia uma função isolada, o de integração avalia componentes que se comunicam, o de sistema avalia o fluxo completo, e a aceitação acontece fora, com quem conhece o processo.</desc>
    <rect x="48" y="32" width="560" height="246" rx="6" fill="#ffffff" stroke="#101f38" stroke-width="2" />
    <text x="60" y="52" font-family="'Roboto Mono', Consolas, monospace" font-size="13" font-weight="700" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0.6">SISTEMA</text>
    <text x="60" y="70" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0">fluxo completo no portal</text>
    <rect x="88" y="90" width="480" height="166" rx="6" fill="#f4f5f7" stroke="#1e88e5" stroke-width="2" />
    <text x="100" y="110" font-family="'Roboto Mono', Consolas, monospace" font-size="13" font-weight="700" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0.6">INTEGRAÇÃO</text>
    <text x="100" y="128" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0">serviço de matrícula e banco de dados</text>
    <rect x="240" y="162" width="220" height="68" rx="6" fill="#f4f5f7" stroke="#0e9f6e" stroke-width="2" />
    <text x="350" y="188" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Unitário</text>
    <text x="350" y="212" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">função de pré-requisito</text>
    <line x1="610" y1="156" x2="689" y2="156" stroke="#5b6472" stroke-width="2" stroke-dasharray="6 5" />
    <polygon points="698,156 689,160.95 689,151.05" fill="#5b6472" />
    <rect x="700" y="108" width="230" height="96" rx="6" fill="#f4f5f7" stroke="#d9481f" stroke-width="2" />
    <text x="815" y="148" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Aceitação</text>
    <text x="815" y="172" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">secretaria e estudantes avaliam</text>
  </svg>
  <div class="caption">Os escopos se ampliam da função isolada ao sistema completo; a aceitação acontece fora, com quem conhece o processo.</div>
</div>

<div class="notice closer">
  <span class="notice-title">EIXOS DISTINTOS</span>
  Nível descreve o escopo avaliado; funcional e não funcional descrevem o tipo de requisito. Um teste de desempenho pode ser executado em nível de sistema, e critérios de aceitação podem incluir atributos não funcionais.
</div>

---

<!-- _class: section-divider -->

<div class="part">PARTE 04 / 04</div>

# Automação e consolidação

<div class="topic-list cols-3">
  <div class="topic"><span class="n">01</span><span>A pirâmide como modelo</span></div>
  <div class="topic"><span class="n">02</span><span>O que automatizar primeiro</span></div>
  <div class="topic"><span class="n">03</span><span>IA e revisão humana</span></div>
</div>

---

<div class="eyebrow">AUTOMAÇÃO</div>

# Muitos testes rápidos na base, poucos lentos no topo

<div class="media">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 300" role="img" aria-label="Pirâmide com muitos testes unitários rápidos na base, quantidade moderada de testes de integração no meio e poucos testes de interface ou ponta a ponta no topo.">
    <title>Pirâmide de testes</title>
    <desc>Pirâmide com muitos testes unitários rápidos na base, quantidade moderada de testes de integração no meio e poucos testes de interface ou ponta a ponta no topo.</desc>
    <polygon points="300,34 354,106 246,106" fill="#d9481f" />
    <polygon points="246,106 354,106 408,178 192,178" fill="#1e88e5" />
    <polygon points="192,178 408,178 508,254 92,254" fill="#0e9f6e" />
    <line x1="327" y1="70" x2="540" y2="70" stroke="#5b6472" stroke-width="1" stroke-dasharray="6 5" />
    <text x="548" y="64" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="14" font-weight="700" fill="#101f38" text-anchor="start" dominant-baseline="middle" letter-spacing="0">Interface e ponta a ponta</text>
    <text x="548" y="88" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0">menos testes, mais lentos, mais dependências</text>
    <line x1="382" y1="144" x2="540" y2="144" stroke="#5b6472" stroke-width="1" stroke-dasharray="6 5" />
    <text x="548" y="138" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="14" font-weight="700" fill="#101f38" text-anchor="start" dominant-baseline="middle" letter-spacing="0">Integração</text>
    <text x="548" y="162" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0">quantidade moderada</text>
    <line x1="458" y1="216" x2="540" y2="216" stroke="#5b6472" stroke-width="1" stroke-dasharray="6 5" />
    <text x="548" y="210" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="14" font-weight="700" fill="#101f38" text-anchor="start" dominant-baseline="middle" letter-spacing="0">Unitários</text>
    <text x="548" y="234" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0">muitos, rápidos e localizados</text>
    <text x="92" y="282" font-family="'Roboto Mono', Consolas, monospace" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0">busca feedback rápido e reduz a dependência de ponta a ponta</text>
  </svg>
  <div class="caption">Representação de estratégia, não uma lei: a proporção concreta depende da arquitetura, do produto e dos riscos.</div>
</div>

<div class="notice closer">
  <span class="notice-title">AUTOMAÇÃO NÃO ELIMINA O PLANEJAMENTO</span>
  Um script executa instruções. Não decide se o cenário representa a necessidade de quem usa, se a regra de negócio está correta ou se o resultado esperado foi bem definido.
</div>

---

<div class="eyebrow">AUTOMAÇÃO E IA</div>

# Automatizar o que se repete; revisar o que se sugere

<div class="two-col">
  <div class="col">
    <span class="label">Bom candidato à automação</span>
    <p>Automação é usar ferramentas e scripts para preparar, executar e comparar verificações sem repetir o esforço manual a cada mudança.</p>
    <ul class="list tight">
      <li>fluxo repetido com frequência;</li>
      <li>resultado esperado objetivo e verificável;</li>
      <li>dados e ambiente controláveis;</li>
      <li>comportamento relativamente estável;</li>
      <li>risco alto se uma regressão passar despercebida.</li>
    </ul>
  </div>
  <div class="col">
    <span class="label">Onde a revisão humana decide</span>
    <p>Ferramentas de IA aceleram a escrita de casos, dados e rascunhos de script, e podem cometer erros que só quem conhece o negócio percebe.</p>
    <ul class="list tight">
      <li>inventar regras que não foram especificadas;</li>
      <li>gerar testes que apenas repetem a implementação;</li>
      <li>inferir o resultado esperado do comportamento atual e validar o comportamento errado;</li>
      <li>deixar de fora permissões, concorrência e exceções.</li>
    </ul>
  </div>
</div>

<div class="callout">
  <span class="tag">PERGUNTAS GUIA</span>
  Se uma IA gerar 50 testes para uma funcionalidade, isso prova que ela está bem testada?
</div>

---

<div class="eyebrow">EXERCÍCIO · PORTAL DE MATRÍCULA</div>

# Projetar os primeiros testes do portal

<div class="two-col">
  <div class="col">
    <span class="label">As cinco regras da solicitação</span>
    <ol class="list ordered">
      <li>estudante autenticado;</li>
      <li>pré-requisitos da disciplina cumpridos;</li>
      <li>pelo menos uma vaga disponível;</li>
      <li>nenhum conflito de horário com disciplina já confirmada;</li>
      <li>nenhuma matrícula duplicada para o mesmo estudante e disciplina.</li>
    </ol>
    <p class="muted">Um clique isolado não aciona as regras 4 e 5: conflito e duplicata dependem de estado e de execuções repetidas.</p>
  </div>
  <div class="col">
    <span class="label">O que produzir</span>
    <ul class="list tight">
      <li>escrever quatro cenários, com um caminho válido e três situações inválidas;</li>
      <li>detalhar dois casos com pré-condições, dados, passos e resultado esperado;</li>
      <li>identificar pelo menos um valor-limite ou condição de fronteira;</li>
      <li>indicar o nível de teste mais adequado para cada caso detalhado;</li>
      <li>relacionar cada caso a uma das cinco regras;</li>
      <li>apontar uma situação importante que o conjunto ainda não cobre.</li>
    </ul>
  </div>
</div>

<div class="notice closer">
  <span class="notice-title">AUTOVERIFICAÇÃO</span>
  Que requisito este teste verifica? Qual é a pré-condição? Que dado representa o limite? O que ainda ficou de fora?
</div>

---

<!-- _class: title -->

<div class="eyebrow">SÍNTESE</div>

# Testar é produzir
# evidência para decidir.

<p class="subtitle">Requisitos orientam os testes, os testes revelam lacunas, e as mudanças precisam ser rastreadas.</p>

<div class="byline">
  <strong>Prof. Victor Brayner</strong>
  <span>engenharia de requisitos, testes e qualidade · unidade II</span>
</div>
