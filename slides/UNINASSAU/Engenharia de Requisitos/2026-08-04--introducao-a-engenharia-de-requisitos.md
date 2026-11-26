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

# Introdução à Engenharia
# de Requisitos

<p class="subtitle">Entre a necessidade de alguém e a solução implementada existe um espaço de investigação, negociação e validação.</p>

<div class="byline">
  <strong>Prof. Victor Brayner</strong>
  <span>ads · 2026.2</span>
</div>

---

<div class="eyebrow">PONTO DE PARTIDA</div>

# O sistema funciona. O cliente não está satisfeito.

<div class="stack">
<div class="two-col">
  <div class="col">
    <span class="label">O que foi entregue</span>
    <p>O software executa exatamente o que foi programado: as telas testadas não falham, as respostas chegam rápidas, a operação é estável.</p>
    <ul class="list tight">
      <li>o comportamento implementado é cumprido sem desvios;</li>
      <li>nenhum cenário previsto provoca erro;</li>
      <li>as verificações técnicas passam.</li>
    </ul>
  </div>
  <div class="col">
    <span class="label">O que o cliente percebe</span>
    <p>O sistema resolve o problema errado: o comportamento correto não corresponde à necessidade de quem usa o produto no dia a dia.</p>
    <ul class="list tight">
      <li>o processo real de trabalho ficou de fora;</li>
      <li>ninguém confirmou a necessidade antes de construir;</li>
      <li>correção técnica não virou adequação ao problema.</li>
    </ul>
  </div>
</div>

<div class="panel c-orange">
  <span class="label">O que os dois quadros revelam</span>
  <p>Um sistema pode estar correto em relação ao que foi construído e inadequado em relação ao problema que motivou a construção. São avaliações diferentes, feitas com critérios diferentes.</p>
</div>
</div>

<div class="callout">
  <span class="tag">PERGUNTAS GUIA</span>
  Um sistema sem defeitos é necessariamente um bom sistema? E quem define se o software resolveu o problema?
</div>

---

<div class="eyebrow">TESE</div>

# Um sistema correto pode resolver o problema errado

<div class="two-col">
  <div class="col">
    <span class="label">O espaço entre problema e solução</span>
    <p>Entre a necessidade de alguém e a solução implementada existe investigação, interpretação e negociação. Pular esse espaço é tratar a primeira solução sugerida como se fosse a necessidade.</p>
    <p class="muted">Nenhuma técnica elimina a incerteza do caminho; o que existe são meios disciplinados para descobri-la, explicitá-la e administrá-la.</p>
  </div>
  <div class="col">
    <span class="label">O que a disciplina faz nesse espaço</span>
    <ul class="list tight">
      <li>descobre necessidades, restrições e regras com quem vive o processo;</li>
      <li>explicita incertezas em vez de assumi-las;</li>
      <li>valida com os interessados o que será construído;</li>
      <li>administra as mudanças que aparecem no caminho.</li>
    </ul>
  </div>
</div>

<div class="quote closer">
  <div class="text">“A Engenharia de Requisitos reduz a distância entre o problema real e a solução construída.”</div>
  <div class="author">TESE DA AULA</div>
</div>

---

<!-- _class: section-divider -->

<div class="part">PARTE 01 / 04</div>

# Do problema à solução

<div class="topic-list cols-3">
  <div class="topic"><span class="n">01</span><span>Os quatro termos</span></div>
  <div class="topic"><span class="n">02</span><span>O caminho da loja</span></div>
  <div class="topic"><span class="n">03</span><span>Classificar declarações</span></div>
</div>

---

<div class="eyebrow">CONCEITO</div>

# Problema, necessidade, requisito e solução

<div class="cards cols-4">
  <div class="card">
    <span class="n">01</span>
    <h3>Problema</h3>
    <p>Situação indesejada, dificuldade ou oportunidade que motiva uma mudança.</p>
    <p>Na loja: vendas perdidas porque ninguém sabe se há produto disponível.</p>
  </div>
  <div class="card">
    <span class="n">02</span>
    <h3>Necessidade</h3>
    <p>Capacidade ou resultado que alguém precisa alcançar para lidar com o problema.</p>
    <p>Consultar a disponibilidade atual antes de confirmar uma venda.</p>
  </div>
  <div class="card">
    <span class="n">03</span>
    <h3>Requisito</h3>
    <p>Declaração verificável de uma capacidade, condição ou restrição que a solução deve atender.</p>
    <p>O comportamento esperado, dito de forma que possa ser conferido.</p>
  </div>
  <div class="card">
    <span class="n">04</span>
    <h3>Solução</h3>
    <p>Produto, serviço, processo ou sistema concebido para atender às necessidades.</p>
    <p>O sistema de controle de estoque é consequência, não ponto de partida.</p>
  </div>
</div>

<div class="notice closer">
  <span class="notice-title">PARA ANOTAR</span>
  Trocar os termos de lugar muda a análise: chamar de requisito o que é solução disfarça a investigação que ainda não foi feita.
</div>

---

<div class="eyebrow">PERCURSO</div>

# “Criar um aplicativo” já é uma proposta de solução

<p class="subtitle">O pedido do gerente nomeia uma solução; a investigação começa antes dele, no problema que motivou o pedido.</p>

<div class="flow">
  <div class="node">
    <h3>Problema</h3>
    <p>vendas perdidas por falta de visibilidade sobre o estoque</p>
  </div>
  <div class="node">
    <h3>Necessidade</h3>
    <p>consultar a disponibilidade antes de confirmar uma venda</p>
  </div>
  <div class="node">
    <h3>Requisito</h3>
    <p>declaração verificável do comportamento e das condições esperadas</p>
  </div>
  <div class="node">
    <h3>Solução</h3>
    <p>o sistema de controle, se a investigação confirmar esse caminho</p>
  </div>
</div>

<span class="label">Perguntas que abrem a investigação</span>
<ul class="list dash">
  <li>qual problema motivou o pedido de um aplicativo?</li>
  <li>que informação o vendedor precisa antes de confirmar uma venda?</li>
  <li>que parte do problema mudaria com uma mudança no processo, sem sistema novo?</li>
</ul>

<div class="panel c-teal closer">
  <span class="label">A ORDEM DO PERCURSO IMPORTA</span>
  <p>Quando a solução chega antes da investigação, ela define o problema em vez de respondê-lo: o aplicativo é hipótese até o percurso ser percorrido.</p>
</div>

---

<div class="eyebrow">EXERCÍCIO · CLASSIFICAÇÃO DE DECLARAÇÕES</div>

# Nem todo pedido é um requisito

<div class="two-col">
  <div class="col">
    <span class="label">Declarações para classificar</span>
    <ol class="list ordered">
      <li>“Quero um aplicativo moderno.”</li>
      <li>“O usuário deve conseguir consultar o saldo.”</li>
      <li>“A empresa precisa reduzir o tempo de atendimento.”</li>
      <li>“O sistema será feito em React.”</li>
      <li>“O operador deve registrar a entrada de um veículo.”</li>
    </ol>
  </div>
  <div class="col">
    <span class="label">As categorias em disputa</span>
    <ul class="list dash">
      <li>problema: o que está errado hoje;</li>
      <li>necessidade: a capacidade que falta;</li>
      <li>requisito: a condição verificável a atender;</li>
      <li>solução: o produto, serviço ou processo a construir;</li>
      <li>decisão técnica: o caminho escolhido para construir.</li>
    </ul>
    <p class="muted">Uma declaração pode exigir esclarecimento antes de receber classe: pedir o contexto faz parte do exercício.</p>
  </div>
</div>

<div class="notice closer">
  <span class="notice-title">AUTOVERIFICAÇÃO</span>
  A classificação cita o que a frase descreve, e não apenas o rótulo escolhido? Que pergunta esclareceria a declaração antes de classificá-la?
</div>

---

<!-- _class: section-divider -->

<div class="part">PARTE 02 / 04</div>

# A disciplina e os interessados

<div class="topic-list cols-3">
  <div class="topic"><span class="n">01</span><span>O que a área faz</span></div>
  <div class="topic"><span class="n">02</span><span>Quem influencia o sistema</span></div>
  <div class="topic"><span class="n">03</span><span>Interesses em conflito</span></div>
</div>

---

<div class="eyebrow">DEFINIÇÃO</div>

# Descobrir, analisar, documentar, validar e gerenciar

<div class="two-col">
  <div class="col">
    <span class="label">A área de conhecimento</span>
    <p>A Engenharia de Requisitos descobre, analisa, documenta, valida e gerencia requisitos de sistemas e software. O material do trabalho é variado:</p>
    <ul class="list tight">
      <li>pessoas que executam, decidem e são afetadas;</li>
      <li>regras, restrições e normas do contexto;</li>
      <li>objetivos de negócio que justificam a mudança;</li>
      <li>decisões técnicas e suas consequências.</li>
    </ul>
  </div>
  <div class="col">
    <span class="label">O documento não é o trabalho</span>
    <p>Um documento registra uma decisão. Não substitui a investigação que levou até ela, a negociação entre interessados nem a validação de que a descrição corresponde a uma necessidade real.</p>
    <p class="muted">A decisão nasce na conversa, na comparação e na negociação; o texto chega depois.</p>
  </div>
</div>

<div class="panel c-orange closer">
  <span class="label">ONDE O TEMPO É GASTO</span>
  <p>Entrevistar quem executa, comparar versões da verdade, negociar conflitos, confirmar entendimento: o texto final é a parte visível de um trabalho que acontece antes dele.</p>
</div>

---

<div class="eyebrow">STAKEHOLDERS</div>

# Cada interessado enxerga um risco diferente

<p class="subtitle">Sistema de estacionamento: quem usa é só uma das perspectivas. Proprietário, manutenção e financeiro também têm interesse legítimo no resultado.</p>

<div class="cards cols-4">
  <div class="card">
    <span class="n">01</span>
    <h3>Motorista</h3>
    <p>Entra, paga e sai. Quer rapidez e o menor número possível de passos.</p>
  </div>
  <div class="card">
    <span class="n">02</span>
    <h3>Operador</h3>
    <p>Registra entradas e exceções do dia a dia. Quer um fluxo previsível.</p>
  </div>
  <div class="card">
    <span class="n">03</span>
    <h3>Administração</h3>
    <p>Acompanha o dinheiro do local. Quer controle financeiro e prestação de contas.</p>
  </div>
  <div class="card">
    <span class="n">04</span>
    <h3>Segurança</h3>
    <p>Reconstrói o que aconteceu. Quer trilha de auditoria para cada evento.</p>
  </div>
</div>

<div class="panel c-orange closer">
  <span class="label">QUANDO OS INTERESSES DIVERGEM</span>
  <p>Rapidez contra registro completo, controle contra agilidade: o mesmo sistema recebe requisitos que competem entre si. Tornar o conflito explícito e negociado é parte do trabalho, e não um acidente de percurso.</p>
</div>

---

<!-- _class: section-divider -->

<div class="part">PARTE 03 / 04</div>

# O ciclo de vida dos requisitos

<div class="topic-list cols-3">
  <div class="topic"><span class="n">01</span><span>As atividades do ciclo</span></div>
  <div class="topic"><span class="n">02</span><span>Gerenciamento contínuo</span></div>
  <div class="topic"><span class="n">03</span><span>Mudança sem culpa</span></div>
</div>

---

<div class="eyebrow">CICLO DE VIDA</div>

# Atividades recorrentes, não uma esteira

<div class="media">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 312" role="img" aria-label="Cinco atividades do ciclo de vida dos requisitos encadeadas da descoberta à implementação, com retorno da validação para a descoberta e faixa de gerenciamento contínuo sob o ciclo.">
    <title>Ciclo de vida dos requisitos</title>
    <desc>Descoberta, análise, especificação, validação e implementação em sequência; a validação devolve perguntas à descoberta; o gerenciamento acompanha o ciclo inteiro.</desc>
    <rect x="8" y="44" width="160" height="96" rx="6" fill="#f4f5f7" stroke="#1e88e5" stroke-width="2" />
    <text x="88" y="72" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Descoberta</text>
    <text x="88" y="98" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">contexto, objetivos</text>
    <text x="88" y="118" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">e interessados</text>
    <line x1="172" y1="92" x2="196" y2="92" stroke="#1e88e5" stroke-width="2"  />
    <polygon points="204,92 195,96.95 195,87.05" fill="#1e88e5" />
    <rect x="204" y="44" width="160" height="96" rx="6" fill="#f4f5f7" stroke="#1e88e5" stroke-width="2" />
    <text x="284" y="72" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Análise</text>
    <text x="284" y="98" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">ambiguidades, conflitos</text>
    <text x="284" y="118" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">e viabilidade</text>
    <line x1="364" y1="92" x2="388" y2="92" stroke="#1e88e5" stroke-width="2"  />
    <polygon points="396,92 387,96.95 387,87.05" fill="#1e88e5" />
    <rect x="400" y="44" width="160" height="96" rx="6" fill="#f4f5f7" stroke="#1e88e5" stroke-width="2" />
    <text x="480" y="72" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Especificação</text>
    <text x="480" y="98" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">registro compreensível</text>
    <text x="480" y="118" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">e verificável</text>
    <line x1="560" y1="92" x2="584" y2="92" stroke="#1e88e5" stroke-width="2"  />
    <polygon points="592,92 583,96.95 583,87.05" fill="#1e88e5" />
    <rect x="596" y="44" width="160" height="96" rx="6" fill="#f4f5f7" stroke="#1e88e5" stroke-width="2" />
    <text x="676" y="72" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Validação</text>
    <text x="676" y="98" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">confirmação com quem</text>
    <text x="676" y="118" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">decide e usa</text>
    <line x1="756" y1="92" x2="780" y2="92" stroke="#1e88e5" stroke-width="2"  />
    <polygon points="788,92 779,96.95 779,87.05" fill="#1e88e5" />
    <rect x="792" y="44" width="160" height="96" rx="6" fill="#f4f5f7" stroke="#1e88e5" stroke-width="2" />
    <text x="872" y="72" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Implementação</text>
    <text x="872" y="98" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">construir e verificar</text>
    <text x="872" y="118" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">contra os requisitos</text>
    <line x1="676" y1="140" x2="676" y2="184" stroke="#d9481f" stroke-width="2"  />
    <line x1="676" y1="184" x2="88" y2="184" stroke="#d9481f" stroke-width="2"  />
    <line x1="88" y1="184" x2="88" y2="150" stroke="#d9481f" stroke-width="2"  />
    <polygon points="88,140 83,150 93,150" fill="#d9481f" />
    <text x="382" y="172" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#d9481f" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">a validação devolve perguntas à descoberta e à análise</text>
    <rect x="8" y="224" width="944" height="64" rx="6" fill="#ffffff" stroke="#5b6472" stroke-width="2" stroke-dasharray="6 5" />
    <text x="30" y="250" font-family="'Roboto Mono', Consolas, monospace" font-size="13" font-weight="700" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0.6">GERENCIAMENTO CONTÍNUO</text>
    <text x="30" y="276" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0">acompanhar mudanças, versões, relações e decisões ao longo de todo o ciclo</text>
  </svg>
  <div class="caption">As atividades se repetem: a validação devolve perguntas à descoberta, e o gerenciamento acompanha o ciclo inteiro, sem hora marcada.</div>
</div>

<div class="notice closer">
  <span class="notice-title">PARA ANOTAR</span>
  O ciclo não é uma esteira de mão única: uma descoberta nova reinicia a análise, e qualquer atividade pode visitar as anteriores.
</div>

---

<div class="eyebrow">RETROALIMENTAÇÃO</div>

# Requisitos mudam; nem sempre por erro

<div class="two-col">
  <div class="col">
    <span class="label">Por que requisitos mudam</span>
    <ul class="list tight">
      <li>o negócio muda de objetivo ou de prioridade;</li>
      <li>legislação e normas mudam;</li>
      <li>os usuários aprendem e passam a usar diferente;</li>
      <li>um teste revela que um requisito estava incompleto;</li>
      <li>a validação traz à tona necessidade que ninguém tinha dito.</li>
    </ul>
  </div>
  <div class="col">
    <span class="label">O que a volta do ciclo produz</span>
    <ul class="list arrow">
      <li>a validação traz dúvida nova → a descoberta repete;</li>
      <li>o negócio muda de objetivo → a análise repete;</li>
      <li>o teste revela lacuna → a especificação repete.</li>
    </ul>
    <p class="muted">Cada volta ao ciclo deixa a próxima versão do requisito mais informada que a anterior.</p>
  </div>
</div>

<span class="label">O ciclo em ação, na loja</span>
<ul class="list dash">
  <li>a descoberta ouve vendedores, gerente e compras;</li>
  <li>a validação traz à tona reservas e devoluções esquecidas;</li>
  <li>a descoberta repete com perguntas novas, e a análise ganha material.</li>
</ul>

<div class="notice closer">
  <span class="notice-title">EQUÍVOCO COMUM</span>
  Mudança pode significar aprendizado e evolução do contexto, e não falha do planejamento original.
</div>

---

<!-- _class: section-divider -->

<div class="part">PARTE 04 / 04</div>

# Requisitos, qualidade e prática

<div class="topic-list cols-3">
  <div class="topic"><span class="n">01</span><span>Requisitos e qualidade</span></div>
  <div class="topic"><span class="n">02</span><span>Estudo de caso: o estoque</span></div>
  <div class="topic"><span class="n">03</span><span>Diagnóstico de uma necessidade</span></div>
</div>

---

<div class="eyebrow">QUALIDADE</div>

# Requisitos orientam a qualidade; não a garantem

<div class="two-col">
  <div class="col">
    <span class="label">O que requisitos claros apoiam</span>
    <ul class="list tight">
      <li>decisões de desenvolvimento com referência explícita;</li>
      <li>menos retrabalho causado por entendimentos divergentes;</li>
      <li>expectativas acordadas com quem financia e com quem usa;</li>
      <li>critérios para avaliar o produto entregue.</li>
    </ul>
  </div>
  <div class="col">
    <span class="label">O que também decide a qualidade</span>
    <ul class="list tight">
      <li>arquitetura: estrutura, restrições e compromissos técnicos;</li>
      <li>implementação: defeitos introduzidos no caminho;</li>
      <li>testes: evidência sobre o comportamento obtido;</li>
      <li>operação e contexto: uso real e evolução do ambiente.</li>
    </ul>
    <p class="muted">Um sistema estável e rápido que não atende ao processo real continua sendo um problema para quem depende dele.</p>
  </div>
</div>

<div class="panel c-teal closer">
  <span class="label">POR QUE COMEÇAR AQUI</span>
  <p>A qualidade nasce antes do código: no entendimento do problema, na negociação entre interessados e na validação do que será construído.</p>
</div>

---

<div class="eyebrow">ESTUDO DE CASO · CONTROLE DE ESTOQUE</div>

# A loja que perde vendas sem saber o estoque

<div class="split-60-40">
  <div class="col">
    <span class="label">O cenário</span>
    <p>Uma loja registra vendas em planilhas. Vendedores não sabem se há unidades disponíveis; as compras chegam com atraso; divergências aparecem no fechamento do mês.</p>
    <p class="muted">O enunciado descreve sintomas: problema, necessidade e solução ainda não foram ditos.</p>
  </div>
  <div class="col">
    <span class="label">Perguntas para investigar</span>
    <ol class="list ordered">
      <li>qual é o problema, dito de forma verificável?</li>
      <li>quais necessidades aparecem a partir dele?</li>
      <li>quem são os stakeholders e o que cada um precisa?</li>
      <li>que informações ainda precisam ser descobertas?</li>
      <li>que risco existe em começar a programar agora?</li>
    </ol>
  </div>
</div>

<div class="notice closer">
  <span class="notice-title">COMO LER O CASO</span>
  Nenhuma pergunta tem resposta pronta no enunciado: cada uma exige conversa com quem vive o processo antes de virar requisito.
</div>

---

<div class="eyebrow">EXERCÍCIO · DIAGNÓSTICO DE NECESSIDADE</div>

# Diagnosticar uma necessidade

<div class="two-col">
  <div class="col">
    <span class="label">Escolher um cenário</span>
    <p>Biblioteca, estacionamento, cantina, clínica ou loja: qualquer sistema do seu dia a dia serve, desde que o processo possa ser observado de perto.</p>
    <ul class="list tight">
      <li>conversar com quem atende no processo;</li>
      <li>observar uma operação completa, do pedido ao resultado;</li>
      <li>anotar o que dá errado com frequência, sem propor conserto.</li>
    </ul>
  </div>
  <div class="col">
    <span class="label">O que produzir</span>
    <ol class="list ordered">
      <li>um problema observado, em uma frase;</li>
      <li>duas necessidades possíveis ligadas a ele;</li>
      <li>três stakeholders e o interesse de cada um;</li>
      <li>uma pergunta a investigar antes de propor qualquer solução.</li>
    </ol>
  </div>
</div>

<span class="label">Para registrar depois</span>
<p class="muted">Em até cinco linhas: por que começar pelo código antes de compreender o problema aumenta o risco do projeto?</p>

<div class="notice closer">
  <span class="notice-title">AUTOVERIFICAÇÃO</span>
  A necessidade é uma capacidade, e não uma tecnologia? O problema ficou separado da solução? A pergunta pode ser respondida com evidência?
</div>

---

<!-- _class: title -->

<div class="eyebrow">SÍNTESE</div>

# Qualidade começa
# antes do código.

<p class="subtitle">Próxima aula: o que o sistema deve fazer, e com que qualidade deve fazer.</p>

<div class="byline">
  <strong>Prof. Victor Brayner</strong>
  <span>engenharia de requisitos, testes e qualidade · unidade I</span>
</div>
