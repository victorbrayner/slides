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

# Documentação e
# gerenciamento de requisitos

<p class="subtitle">Requisitos são ativos de informação: precisam ser compreendidos, relacionados, versionados e controlados.</p>

<div class="byline">
  <strong>Prof. Victor Brayner</strong>
  <span>ads · 2026.2</span>
</div>

---

<div class="eyebrow">PONTO DE PARTIDA</div>

# A regra mudou; ninguém sabe o que ela afeta

<div class="stack">
<div class="two-col">
  <div class="col">
    <span class="label">O que aconteceu</span>
    <p>A equipe alterou a regra de matrícula. A mudança parece pequena: uma condição a mais, uma tela a ajustar.</p>
    <ul class="list tight">
      <li>a tela de solicitação foi ajustada;</li>
      <li>o teste daquela tela passou;</li>
      <li>a alteração seguiu em frente.</li>
    </ul>
  </div>
  <div class="col">
    <span class="label">O que ninguém sabe</span>
    <ul class="list tight">
      <li>quais relatórios leem a mesma regra;</li>
      <li>quais validações repetem a condição em outro lugar;</li>
      <li>quais notificações dependem do status que ela define;</li>
      <li>quais testes deveriam ter sido revisados.</li>
    </ul>
  </div>
</div>

<div class="panel c-orange">
  <span class="label">O que a descoberta tardia custa</span>
  <p>Sem registro das relações, cada resposta vira busca manual, e alguma fica de fora. A equipe perde contexto, implementa versões divergentes e não avalia impacto antes de decidir.</p>
</div>
</div>

<div class="callout">
  <span class="tag">PERGUNTAS GUIA</span>
  Como descobrir o que uma mudança afeta antes de implementá-la, e não depois?
</div>

---

<div class="eyebrow">TESE</div>

# Requisitos são ativos vivos de informação

<div class="two-col">
  <div class="col">
    <span class="label">Por que documentar</span>
    <p>Requisitos mudam por alteração de negócio, legislação, feedback, limitação técnica ou descoberta de risco. O registro preserva o entendimento que motivou cada decisão, inclusive para quem chega depois.</p>
    <p class="muted">O formato acompanha o projeto: texto, backlog, modelos, protótipos, tabelas ou combinação deles.</p>
  </div>
  <div class="col">
    <span class="label">O que o registro precisa ser</span>
    <ul class="list tight">
      <li>claro, consistente, verificável e rastreável;</li>
      <li>adequado ao público que lê;</li>
      <li>suficiente para comunicar, decidir e auditar;</li>
      <li>mantido vivo, ou perde o valor no primeiro desalinhamento.</li>
    </ul>
  </div>
</div>

<div class="quote closer">
  <div class="text">“Requisitos não são documento que se escreve uma vez e arquiva: são ativos de informação que evoluem com o sistema.”</div>
  <div class="author">TESE DA AULA</div>
</div>

---

<!-- _class: section-divider -->

<div class="part">PARTE 01 / 04</div>

# Registro e especificação

<div class="topic-list cols-3">
  <div class="topic"><span class="n">01</span><span>O que registrar</span></div>
  <div class="topic"><span class="n">02</span><span>Um exemplo, REQ-014</span></div>
  <div class="topic"><span class="n">03</span><span>Proporcionalidade</span></div>
</div>

---

<div class="eyebrow">ESTRUTURA MÍNIMA</div>

# O que registrar em cada requisito

<p class="subtitle">Campos que um registro mínimo costuma ter, quando aplicáveis ao projeto.</p>

| Campo | Em REQ-014, por exemplo |
|---|---|
| Identificador | REQ-014, estável mesmo quando o texto muda |
| Descrição | validar conflito de horário na solicitação de matrícula |
| Origem e validação | objetivo que a motivou; stakeholder que valida |
| Estado e prioridade | proposto, aprovado, implementado; prioridade acordada |
| Critérios e dependências | critérios de aceitação; relações com outros requisitos |
| Versão e relações | histórico de mudanças; casos de uso, componentes e testes |

<div class="notice closer">
  <span class="notice-title">PARA ANOTAR</span>
  Nenhum projeto usa exatamente este conjunto: os campos atendem à comunicação, à governança e ao risco de quem lê e de quem decide.
</div>

---

<div class="eyebrow">PROPORCIONALIDADE</div>

# Mais páginas não significam mais qualidade

<div class="panel c-orange">
  <span class="label">DOCUMENTAÇÃO EXCESSIVA</span>
  <p>Texto que ninguém lê, desatualizado na primeira mudança: esconde decisões válidas em meio a ruído, e passa a responder errado.
  </p>
</div>

<div class="panel c-teal">
  <span class="label">DOCUMENTAÇÃO INSUFICIENTE</span>
  <p>Dependência de memória individual: quem saiu levou o contexto; quem ficou redecide o que já estava decidido, sem saber.</p>
</div>

<span class="label">O ponto de equilíbrio</span>
<ul class="list dash">
  <li>registro suficiente para decidir e auditar;</li>
  <li>formato que a equipe consegue manter vivo;</li>
  <li>quadro e planilha resolvem, quando o processo é claro.</li>
</ul>

<div class="notice closer">
  <span class="notice-title">A PERGUNTA CERTA</span>
  Não é “documentar mais ou menos”, e sim “quem precisa de que informação para decidir, e quando”.
</div>

---

<!-- _class: section-divider -->

<div class="part">PARTE 02 / 04</div>

# Rastreabilidade

<div class="topic-list cols-3">
  <div class="topic"><span class="n">01</span><span>A cadeia de artefatos</span></div>
  <div class="topic"><span class="n">02</span><span>O que a matriz responde</span></div>
  <div class="topic"><span class="n">03</span><span>Lacunas explícitas</span></div>
</div>

---

<div class="eyebrow">CADEIA</div>

# A cadeia liga objetivo, requisito, código e teste

<div class="media">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 184" role="img" aria-label="Cadeia de rastreabilidade do objetivo ao teste: reduzir erros de matrícula, REQ-014 validar conflito de horário, UC-03 solicitar matrícula, serviço de matrícula e CT-021 tentativa com conflito, com caminho de retorno do requisito ao teste.">
    <title>Cadeia de rastreabilidade</title>
    <desc>Objetivo, requisito, caso de uso, componente e teste encadeados; se o requisito muda, a cadeia mostra quais artefatos revisar.</desc>
    <rect x="8" y="36" width="160" height="96" rx="6" fill="#f4f5f7" stroke="#101f38" stroke-width="2" />
    <text x="88" y="64" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Objetivo</text>
    <text x="88" y="90" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">reduzir erros</text>
    <text x="88" y="110" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">de matrícula</text>
    <line x1="172" y1="84" x2="196" y2="84" stroke="#1e88e5" stroke-width="2"  />
    <polygon points="204,84 195,88.95 195,79.05" fill="#1e88e5" />
    <rect x="204" y="36" width="160" height="96" rx="6" fill="#f4f5f7" stroke="#1e88e5" stroke-width="2" />
    <text x="284" y="64" font-family="'Roboto Mono', Consolas, monospace" font-size="15" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">REQ-014</text>
    <text x="284" y="90" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">validar conflito</text>
    <text x="284" y="110" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">de horário</text>
    <line x1="364" y1="84" x2="388" y2="84" stroke="#1e88e5" stroke-width="2"  />
    <polygon points="396,84 387,88.95 387,79.05" fill="#1e88e5" />
    <rect x="400" y="36" width="160" height="96" rx="6" fill="#f4f5f7" stroke="#1e88e5" stroke-width="2" />
    <text x="480" y="64" font-family="'Roboto Mono', Consolas, monospace" font-size="15" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">UC-03</text>
    <text x="480" y="90" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">solicitar</text>
    <text x="480" y="110" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">matrícula</text>
    <line x1="560" y1="84" x2="584" y2="84" stroke="#1e88e5" stroke-width="2"  />
    <polygon points="592,84 583,88.95 583,79.05" fill="#1e88e5" />
    <rect x="596" y="36" width="160" height="96" rx="6" fill="#f4f5f7" stroke="#1e88e5" stroke-width="2" />
    <text x="676" y="64" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Componente</text>
    <text x="676" y="90" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">serviço de</text>
    <text x="676" y="110" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">matrícula</text>
    <line x1="756" y1="84" x2="780" y2="84" stroke="#1e88e5" stroke-width="2"  />
    <polygon points="788,84 779,88.95 779,79.05" fill="#1e88e5" />
    <rect x="792" y="36" width="160" height="96" rx="6" fill="#f4f5f7" stroke="#d9481f" stroke-width="2" />
    <text x="872" y="64" font-family="'Roboto Mono', Consolas, monospace" font-size="15" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">CT-021</text>
    <text x="872" y="90" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">tentativa com</text>
    <text x="872" y="110" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">conflito</text>
    <line x1="284" y1="132" x2="284" y2="164" stroke="#d9481f" stroke-width="2" stroke-dasharray="6 5" />
    <line x1="284" y1="164" x2="872" y2="164" stroke="#d9481f" stroke-width="2" stroke-dasharray="6 5" />
    <line x1="872" y1="164" x2="872" y2="142" stroke="#d9481f" stroke-width="2" stroke-dasharray="6 5" />
    <polygon points="872,132 867,142 877,142" fill="#d9481f" />
    <text x="578" y="152" font-family="'Roboto Mono', Consolas, monospace" font-size="12" font-weight="400" fill="#d9481f" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">se REQ-014 mudar, a cadeia mostra o que revisar</text>
  </svg>
  <div class="caption">A cadeia responde por que o requisito existe, onde foi implementado e como será verificado.</div>
</div>

<div class="notice closer">
  <span class="notice-title">PARA ANOTAR</span>
  Rastreabilidade não é tabela burocrática: é a possibilidade de avaliar impacto antes de implementar a mudança.
</div>

---

<div class="eyebrow">MATRIZ</div>

# O que a matriz de rastreabilidade responde

<div class="two-col">
  <div class="col">
    <span class="label">Perguntas que ela responde</span>
    <ul class="list dash">
      <li>por que este requisito existe?</li>
      <li>onde foi implementado?</li>
      <li>como será verificado?</li>
      <li>o que pode ser afetado se ele mudar?</li>
      <li>qual requisito está sem teste ou sem implementação?</li>
    </ul>
  </div>
  <div class="col">
    <span class="label">Como manter sem sofrer</span>
    <p>Linhas para requisitos, colunas para casos de uso, componentes e testes; relações atualizadas na mudança, e não no fim do projeto.</p>
    <ul class="list tight">
      <li>começar pequena: uma entrega, um requisito, um teste;</li>
      <li>ligar só o que serve para decidir;</li>
      <li>desatualizada, a matriz vira ficção com cara de controle.</li>
    </ul>
  </div>
</div>

<span class="label">A mesma matriz, em uma linha</span>
<ul class="list arrow">
  <li>REQ-014 liga UC-03, o serviço de matrícula e CT-021 em uma linha só;</li>
  <li>REQ-021 termina em coluna vazia: requisito sem teste aparece, e a lacuna fica visível.</li>
</ul>

<div class="panel c-teal closer">
  <span class="label">O QUE ELA TORNA EXPLÍCITO</span>
  <p>Requisito sem teste e teste sem requisito aparecem nela; a decisão de cobrir a lacuna deixa de ser achismo e passa a ser registro.</p>
</div>

---

<!-- _class: section-divider -->

<div class="part">PARTE 03 / 04</div>

# Versões, baselines e mudanças

<div class="topic-list cols-3">
  <div class="topic"><span class="n">01</span><span>Versão</span></div>
  <div class="topic"><span class="n">02</span><span>Baseline</span></div>
  <div class="topic"><span class="n">03</span><span>Configuração e mudança</span></div>
</div>

---

<div class="eyebrow">CONTROLE</div>

# Versão, baseline e configuração controlam a evolução

<div class="cards cols-3">
  <div class="card">
    <span class="n">01</span>
    <h3>Versionamento</h3>
    <p>Histórico, autoria, comparação e recuperação de conteúdo ao longo do tempo.</p>
    <p>Não é renomear arquivos como <span class="mono">final_v3_agora_vai</span>.</p>
  </div>
  <div class="card">
    <span class="n">02</span>
    <h3>Baseline</h3>
    <p>Versão formalmente acordada que serve de referência para controle de uma entrega.</p>
    <p>Mudanças posteriores são avaliadas em relação a ela.</p>
  </div>
  <div class="card">
    <span class="n">03</span>
    <h3>Configuração</h3>
    <p>Identifica e controla itens do produto e do processo: requisitos, modelos, código, scripts, testes.</p>
    <p>Uma entrega depende de versões coerentes entre eles.</p>
  </div>
</div>

<span class="label">A pergunta que cada um responde</span>
<ul class="list dash">
  <li>versionamento: qual conteúdo estava vigente em determinado momento?</li>
  <li>baseline: em relação a que referência aprovada a mudança será avaliada?</li>
  <li>configuração: quais itens, em quais versões, compõem esta entrega?</li>
</ul>

<div class="notice closer">
  <span class="notice-title">CUIDADO</span>
  Baseline não significa imutável: significa que toda mudança seguinte passa a ser identificada e avaliada contra a referência aprovada.
</div>

---

<div class="eyebrow">MUDANÇAS</div>

# Mudança proporcional ao risco, decisão com registro

<p class="subtitle">O caminho de uma solicitação de mudança, do pedido à verificação.</p>

<div class="flow outline">
  <div class="node">
    <h3>Registrar</h3>
    <p>a solicitação, com origem e motivação.</p>
  </div>
  <div class="node">
    <h3>Analisar</h3>
    <p>impacto, custo, risco e dependências.</p>
  </div>
  <div class="node">
    <h3>Negociar</h3>
    <p>prioridade e prazo com quem decide.</p>
  </div>
  <div class="node">
    <h3>Decidir</h3>
    <p>aprovar, rejeitar ou adiar, com registro.</p>
  </div>
  <div class="node">
    <h3>Atualizar</h3>
    <p>requisitos e artefatos relacionados; comunicar.</p>
  </div>
  <div class="node">
    <h3>Verificar</h3>
    <p>implementação e testes contra a referência.</p>
  </div>
</div>

<span class="label">Pergunta comum</span>
<p class="muted">Git resolve gerenciamento de requisitos? Apoia versionamento de arquivos; análise de impacto, aprovação e rastreabilidade são processo, e não comando.</p>

<div class="notice closer">
  <span class="notice-title">NEM TUDO, NEM NADA</span>
  Aceitar toda mudança engorda o escopo; rejeitar por princípio esconde aprendizado. O processo decide, com tamanho proporcional ao risco e à governança.
</div>

---

<!-- _class: section-divider -->

<div class="part">PARTE 04 / 04</div>

# Impacto e fechamento

<div class="topic-list cols-3">
  <div class="topic"><span class="n">01</span><span>O alcance de uma regra</span></div>
  <div class="topic"><span class="n">02</span><span>Oficina de impacto</span></div>
  <div class="topic"><span class="n">03</span><span>O que leva para a Unidade II</span></div>
</div>

---

<div class="eyebrow">ANÁLISE DE IMPACTO</div>

# Uma regra alcança telas, dados, relatórios e testes

<p class="subtitle">A mudança em “prazo de matrícula” atravessa o sistema.</p>

<div class="cards cols-4">
  <div class="card">
    <span class="n">01</span>
    <h3>Regra de negócio</h3>
    <p>A condição que define o prazo.</p>
  </div>
  <div class="card">
    <span class="n">02</span>
    <h3>Interface</h3>
    <p>Telas que exibem e coletam o prazo.</p>
  </div>
  <div class="card">
    <span class="n">03</span>
    <h3>Validação</h3>
    <p>Checagens que repetem a condição.</p>
  </div>
  <div class="card">
    <span class="n">04</span>
    <h3>Banco de dados</h3>
    <p>Campos e consultas que guardam datas.</p>
  </div>
  <div class="card">
    <span class="n">05</span>
    <h3>Notificações</h3>
    <p>Avisos que citam o prazo.</p>
  </div>
  <div class="card">
    <span class="n">06</span>
    <h3>Relatórios</h3>
    <p>Listagens que ordenam por data.</p>
  </div>
  <div class="card">
    <span class="n">07</span>
    <h3>Documentação</h3>
    <p>Especificações que descrevem a regra.</p>
  </div>
  <div class="card">
    <span class="n">08</span>
    <h3>Testes</h3>
    <p>Casos que precisam de revisão.</p>
  </div>
</div>

<div class="panel c-orange closer">
  <span class="label">POR QUE ANALISAR ANTES</span>
  <p>A análise de impacto identifica essas relações antes da implementação: o custo da descoberta tardia cresce com o tempo, e alguém sempre paga por ele.</p>
</div>

---

<div class="eyebrow">EXERCÍCIO · ANÁLISE DE IMPACTO</div>

# Analisar o impacto de uma mudança

<div class="two-col">
  <div class="col">
    <span class="label">O cenário e a mudança</span>
    <p><strong>Requisito atual:</strong> o estudante pode cancelar a solicitação de matrícula enquanto estiver com status “Pendente”.</p>
    <p><strong>Mudança proposta:</strong> permitir o cancelamento também após a aprovação, desde que o período de ajuste esteja aberto.</p>
    <p class="muted">O que motivou o pedido ainda não foi dito: perguntar faz parte da análise.</p>
  </div>
  <div class="col">
    <span class="label">O que produzir</span>
    <ol class="list ordered">
      <li>motivação da mudança e dúvidas a esclarecer;</li>
      <li>stakeholders afetados;</li>
      <li>requisitos e artefatos potencialmente impactados;</li>
      <li>casos de uso e testes que devem ser revistos;</li>
      <li>decisão preliminar: aprovar, rejeitar ou solicitar informação;</li>
      <li>versão e baseline afetadas.</li>
    </ol>
  </div>
</div>

<div class="notice closer">
  <span class="notice-title">AUTOVERIFICAÇÃO</span>
  Hipóteses estão separadas de fatos? As relações usadas são rastreáveis? A decisão vem com justificativa registrada?
</div>

---

<!-- _class: title -->

<div class="eyebrow">SÍNTESE</div>

# Documentar, rastrear,
# versionar, decidir.

<p class="subtitle">Unidade II, na próxima aula: fundamentos, planejamento e técnicas de testes de software.</p>

<div class="byline">
  <strong>Prof. Victor Brayner</strong>
  <span>engenharia de requisitos, testes e qualidade · unidade I</span>
</div>
