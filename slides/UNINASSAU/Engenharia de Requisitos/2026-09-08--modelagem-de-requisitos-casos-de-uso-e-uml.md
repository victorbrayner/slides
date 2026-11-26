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

# Modelagem de requisitos:
# casos de uso e UML

<p class="subtitle">Modelar é construir uma representação simplificada e intencional, para tornar relações e comportamentos compreensíveis.</p>

<div class="byline">
  <strong>Prof. Victor Brayner</strong>
  <span>ads · 2026.2</span>
</div>

---

<div class="eyebrow">PONTO DE PARTIDA</div>

# A lista de histórias mostra todas as relações?

<div class="stack">
<div class="two-col">
  <div class="col">
    <span class="label">O que a lista mostra</span>
    <p>Cada história nomeia um usuário, uma capacidade e um valor: as necessidades na ordem em que foram conversadas.</p>
    <ul class="list tight">
      <li>quem usa, no papel descrito no cartão;</li>
      <li>o que cada um quer alcançar;</li>
      <li>o valor esperado de cada capacidade.</li>
    </ul>
  </div>
  <div class="col">
    <span class="label">O que continua invisível</span>
    <ul class="list tight">
      <li>a fronteira: o que está dentro do sistema e o que está fora;</li>
      <li>papéis que não aparecem em cartão, como serviços externos;</li>
      <li>comportamentos compartilhados e exceções comuns;</li>
      <li>quem interage com quem, e em que ordem.</li>
    </ul>
  </div>
</div>

<div class="panel c-orange">
  <span class="label">O que falta para enxergar o todo</span>
  <p>Outras representações completam o quadro: escopo, atores, interações e exceções em uma leitura só, com a fronteira desenhada.</p>
</div>
</div>

<div class="callout">
  <span class="tag">PERGUNTAS GUIA</span>
  O que muda quando o mesmo comportamento é visto por quem o opera e por quem recebe o resultado?
</div>

---

<div class="eyebrow">TESE</div>

# Representação simplificada, com intenção

<div class="two-col">
  <div class="col">
    <span class="label">Por que modelar</span>
    <ul class="list tight">
      <li>visualizar atores e objetivos;</li>
      <li>delimitar escopo;</li>
      <li>explicitar relações;</li>
      <li>identificar fluxos e exceções;</li>
      <li>encontrar omissos que a conversa deixou;</li>
      <li>preparar especificação e testes.</li>
    </ul>
  </div>
  <div class="col">
    <span class="label">Todo modelo escolhe</span>
    <p>Representar é selecionar: alguns aspectos entram, outros ficam de fora. A pergunta que se quer responder guia a escolha da representação.</p>
    <p class="muted">O modelo é instrumento de raciocínio e comunicação: um meio de conversar sobre o sistema, e não o sistema.</p>
  </div>
</div>

<div class="quote closer">
  <div class="text">“O modelo não é o sistema: é uma representação simplificada e intencional dele, feita para responder a uma pergunta.”</div>
  <div class="author">TESE DA AULA</div>
</div>

---

<!-- _class: section-divider -->

<div class="part">PARTE 01 / 04</div>

# Atores e fronteiras

<div class="topic-list cols-3">
  <div class="topic"><span class="n">01</span><span>Papéis externos</span></div>
  <div class="topic"><span class="n">02</span><span>Quem não é ator</span></div>
  <div class="topic"><span class="n">03</span><span>A biblioteca em cena</span></div>
</div>

---

<div class="eyebrow">ATORES</div>

# Ator é papel externo, e não componente interno

<p class="subtitle">No sistema de biblioteca, papéis que atravessam a fronteira para interagir com o sistema:</p>

<div class="cards cols-4">
  <div class="card">
    <span class="n">01</span>
    <h3>Leitor</h3>
    <p>Consulta o catálogo e solicita empréstimos para si.</p>
  </div>
  <div class="card">
    <span class="n">02</span>
    <h3>Bibliotecário</h3>
    <p>Registra empréstimos e devoluções no balcão.</p>
  </div>
  <div class="card">
    <span class="n">03</span>
    <h3>Serviço de notificação</h3>
    <p>Envia avisos por conta do sistema, através da fronteira.</p>
  </div>
  <div class="card">
    <span class="n">04</span>
    <h3>Administrador</h3>
    <p>Gerencia parâmetros e permissões do sistema.</p>
  </div>
</div>

<div class="notice closer">
  <span class="notice-title">PARA ANOTAR</span>
  Ator é papel, e não pessoa nem cargo: pode ser desempenhado por uma pessoa, uma organização ou um sistema externo. O banco de dados não é ator; é componente interno.
</div>

---

<!-- _class: section-divider -->

<div class="part">PARTE 02 / 04</div>

# Casos de uso

<div class="topic-list cols-3">
  <div class="topic"><span class="n">01</span><span>Comportamento com valor</span></div>
  <div class="topic"><span class="n">02</span><span>A especificação textual</span></div>
  <div class="topic"><span class="n">03</span><span>Fluxo principal e exceções</span></div>
</div>

---

<div class="eyebrow">CONCEITO</div>

# Comportamento que entrega resultado a um ator

<div class="two-col">
  <div class="col">
    <span class="label">Nomear com verbo e objeto</span>
    <p>“Consultar catálogo”, “Registrar empréstimo”, “Renovar empréstimo”: o nome diz o objetivo, e não a tela que o realiza.</p>
    <ul class="list tight">
      <li>nome curto, orientado a objetivo;</li>
      <li>uma unidade de comportamento completa;</li>
      <li>resultado observável para pelo menos um ator.</li>
    </ul>
  </div>
  <div class="col">
    <span class="label">O que a especificação textual contém</span>
    <ul class="list dash">
      <li>nome e objetivo;</li>
      <li>ator primário e atores de apoio;</li>
      <li>pré-condições;</li>
      <li>gatilho que inicia o fluxo;</li>
      <li>fluxo principal;</li>
      <li>fluxos alternativos e exceções;</li>
      <li>pós-condições.</li>
    </ul>
  </div>
</div>

<div class="notice closer">
  <span class="notice-title">CUIDADO</span>
  Caso de uso não é tela: descreve o comportamento que entrega valor ao ator, em quantas telas forem necessárias, ou em nenhuma.
</div>

---

<div class="eyebrow">EXEMPLO</div>

# O fluxo principal nunca conta a história toda

<p class="subtitle">“Registrar empréstimo”, especificado do início ao fim.</p>

<div class="steps cols-5">
  <div class="step">
    <span class="n">01</span>
    <h3>Pré-condições</h3>
    <p>Bibliotecário autenticado; exemplar identificado.</p>
  </div>
  <div class="step">
    <span class="n">02</span>
    <h3>Selecionar</h3>
    <p>O bibliotecário escolhe o leitor e o exemplar.</p>
  </div>
  <div class="step">
    <span class="n">03</span>
    <h3>Validar</h3>
    <p>O sistema confere elegibilidade e disponibilidade.</p>
  </div>
  <div class="step">
    <span class="n">04</span>
    <h3>Registrar</h3>
    <p>Condições satisfeitas, o empréstimo é gravado.</p>
  </div>
  <div class="step">
    <span class="n">05</span>
    <h3>Atualizar</h3>
    <p>A situação do exemplar passa a emprestado.</p>
  </div>
</div>

<span class="label">As exceções que o fluxo principal esconde</span>
<ul class="list dash">
  <li>leitor bloqueado para novos empréstimos;</li>
  <li>exemplar indisponível no momento do registro;</li>
  <li>falha no serviço externo no meio da operação.</li>
</ul>

<div class="notice closer">
  <span class="notice-title">PARA ANOTAR</span>
  Exceção não desaparece da modelagem: cada uma vira fluxo alternativo na especificação, e não surpresa em produção.
</div>

---

<!-- _class: section-divider -->

<div class="part">PARTE 03 / 04</div>

# Diagramas UML e relações

<div class="topic-list cols-3">
  <div class="topic"><span class="n">01</span><span>Fronteira e atores</span></div>
  <div class="topic"><span class="n">02</span><span>include</span></div>
  <div class="topic"><span class="n">03</span><span>extend</span></div>
</div>

---

<div class="eyebrow">DIAGRAMA DE CASOS DE USO</div>

# A fronteira separa quem usa do que existe dentro

<div class="media">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 310" role="img" aria-label="Fronteira do Portal Acadêmico com o ator Estudante associado a três casos de uso, e os atores Secretaria e Serviço de Notificação associados a um caso de uso cada, fora da fronteira.">
    <title>Casos de uso do portal acadêmico</title>
    <desc>Atores fora da fronteira do sistema, casos de uso dentro dela, e associações ligando cada ator ao comportamento que lhe entrega valor.</desc>
    <rect x="240" y="20" width="480" height="254" rx="4" fill="#ffffff" stroke="#101f38" stroke-width="2" />
    <text x="480" y="38" font-family="'Roboto Mono', Consolas, monospace" font-size="12.5" font-weight="700" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0.6">PORTAL ACADÊMICO</text>
    <ellipse cx="350" cy="96" rx="92" ry="26" fill="#f4f5f7" stroke="#1e88e5" stroke-width="2" />
    <text x="350" y="96" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="13" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Consultar solicitações</text>
    <ellipse cx="350" cy="156" rx="92" ry="26" fill="#f4f5f7" stroke="#1e88e5" stroke-width="2" />
    <text x="350" y="156" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="13" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Solicitar declaração</text>
    <ellipse cx="350" cy="226" rx="92" ry="26" fill="#f4f5f7" stroke="#1e88e5" stroke-width="2" />
    <text x="350" y="226" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="13" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Acompanhar solicitação</text>
    <ellipse cx="585" cy="226" rx="92" ry="26" fill="#f4f5f7" stroke="#0e9f6e" stroke-width="2" />
    <text x="585" y="226" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="13" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Enviar notificação</text>
    <circle cx="120" cy="130" r="11" fill="#ffffff" stroke="#101f38" stroke-width="2" />
    <line x1="120" y1="141" x2="120" y2="174" stroke="#101f38" stroke-width="2"  />
    <line x1="102" y1="158" x2="138" y2="158" stroke="#101f38" stroke-width="2"  />
    <line x1="120" y1="174" x2="107" y2="198" stroke="#101f38" stroke-width="2"  />
    <line x1="120" y1="174" x2="133" y2="198" stroke="#101f38" stroke-width="2"  />
    <text x="120" y="218" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="13.5" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Estudante</text>
    <line x1="138" y1="150" x2="254" y2="100" stroke="#5b6472" stroke-width="2"  />
    <line x1="138" y1="154" x2="254" y2="152" stroke="#5b6472" stroke-width="2"  />
    <line x1="138" y1="158" x2="254" y2="218" stroke="#5b6472" stroke-width="2"  />
    <circle cx="840" cy="110" r="11" fill="#ffffff" stroke="#101f38" stroke-width="2" />
    <line x1="840" y1="121" x2="840" y2="154" stroke="#101f38" stroke-width="2"  />
    <line x1="822" y1="134" x2="858" y2="134" stroke="#101f38" stroke-width="2"  />
    <line x1="840" y1="154" x2="827" y2="178" stroke="#101f38" stroke-width="2"  />
    <line x1="840" y1="154" x2="853" y2="178" stroke="#101f38" stroke-width="2"  />
    <text x="840" y="198" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="13.5" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Secretaria</text>
    <line x1="820" y1="140" x2="446" y2="152" stroke="#5b6472" stroke-width="2"  />
    <circle cx="840" cy="225" r="11" fill="#ffffff" stroke="#101f38" stroke-width="2" />
    <line x1="840" y1="236" x2="840" y2="269" stroke="#101f38" stroke-width="2"  />
    <line x1="822" y1="250" x2="858" y2="250" stroke="#101f38" stroke-width="2"  />
    <line x1="840" y1="269" x2="827" y2="290" stroke="#101f38" stroke-width="2"  />
    <line x1="840" y1="269" x2="853" y2="290" stroke="#101f38" stroke-width="2"  />
    <text x="840" y="302" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="13.5" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Serviço de notificação</text>
    <line x1="820" y1="248" x2="681" y2="232" stroke="#5b6472" stroke-width="2"  />
  </svg>
  <div class="caption">Cada associação parte de um ator e chega a um comportamento que lhe entrega valor; relações entre casos de uso exigem justificativa no fluxo.</div>
</div>

<div class="notice closer">
  <span class="notice-title">O QUE O DESENHO RESPONDE</span>
  Onde termina o sistema, quem interage com ele e o que cada papel consegue fazer: escopo em uma leitura, sem uma linha de código.
</div>

---

<div class="eyebrow">RELAÇÕES ENTRE CASOS DE USO</div>

# include e extend codificam dependências reais

<div class="cards cols-2">
  <div class="card tint c-blue">
    <span class="n">01</span>
    <h3>include</h3>
    <p>Comportamento incluído obrigatoriamente como parte de outro caso de uso, quando a decomposição faz sentido.</p>
    <p>“Registrar empréstimo” inclui “Validar elegibilidade”: a validação sempre integra o fluxo.</p>
  </div>
  <div class="card tint c-purple">
    <span class="n">02</span>
    <h3>extend</h3>
    <p>Comportamento adicional e condicionado, que estende o caso base em pontos definidos.</p>
    <p>“Aplicar multa” estende “Registrar devolução” quando há atraso, com a regra e o ponto de extensão explícitos.</p>
  </div>
</div>

<span class="label">O que separa os dois</span>
<ul class="list dash">
  <li>include: o caso base não acontece sem o comportamento incluído;</li>
  <li>extend: o adicional pode não acontecer nunca;</li>
  <li>as duas relações existem para dependência real, e não para organizar o desenho.</li>
</ul>

<div class="notice closer">
  <span class="notice-title">CUIDADO</span>
  include não é “passo opcional”, e extend não é enfeite do diagrama: a relação precisa existir no comportamento, e não na estética da figura.
</div>

---

<!-- _class: section-divider -->

<div class="part">PARTE 04 / 04</div>

# Protótipos e oficina

<div class="topic-list cols-3">
  <div class="topic"><span class="n">01</span><span>Fidelidades</span></div>
  <div class="topic"><span class="n">02</span><span>O que o desenho não diz</span></div>
  <div class="topic"><span class="n">03</span><span>Revisão crítica</span></div>
</div>

---

<div class="eyebrow">PROTÓTIPOS</div>

# Protótipo valida conversa, não especificação

<div class="cards cols-3">
  <div class="card">
    <span class="n">01</span>
    <h3>Baixa fidelidade</h3>
    <p>Esboços e wireframes: rápidos de fazer, baratos de descartar.</p>
  </div>
  <div class="card">
    <span class="n">02</span>
    <h3>Média fidelidade</h3>
    <p>Estrutura e navegação mais definidas, sem aparência final.</p>
  </div>
  <div class="card">
    <span class="n">03</span>
    <h3>Alta fidelidade</h3>
    <p>Aparência e interação próximas do produto pretendido.</p>
  </div>
</div>

<span class="label">O que o desenho não define</span>
<ul class="list dash">
  <li>regras de autorização: quem pode fazer o quê;</li>
  <li>persistência: onde o dado fica, e por quanto tempo;</li>
  <li>desempenho e tratamento de erros.</li>
</ul>
<p class="muted">Requisitos visuais cobrem hierarquia, estados, feedback, acessibilidade e comportamento responsivo.</p>

<div class="notice closer">
  <span class="notice-title">PARA ANOTAR</span>
  O botão desenhado não é o botão implementado: o protótipo explora e valida ideias de interface, com o escopo declarado.
</div>

---

<div class="eyebrow">WIREFRAME</div>

# O que um wireframe pode e não pode decidir

<div class="split-60-40">
  <div class="col">
    <span class="label">O que o desenho decide</span>
    <ul class="list dash tight">
      <li>ordem e agrupamento dos campos;</li>
      <li>o que aparece no resumo antes de enviar;</li>
      <li>onde o feedback de sucesso e de erro aparece.</li>
    </ul>
    <span class="label">O que exige outra especificação</span>
    <ul class="list dash tight">
      <li>quem pode solicitar cada tipo de declaração;</li>
      <li>onde a solicitação fica registrada;</li>
      <li>o que acontece quando o serviço falha no meio do caminho.</li>
    </ul>
  </div>
  <div class="media">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 260" role="img" aria-label="Wireframe da tela de solicitação de declaração com campos, resumo, botão de envio e barras de feedback de sucesso e erro.">
      <title>Wireframe de solicitação de declaração</title>
      <desc>Tela com campos de tipo e finalidade, resumo da solicitação, botão de envio e dois estados de feedback: registro confirmado e campo obrigatório em falta.</desc>
      <rect x="20" y="16" width="480" height="228" rx="6" fill="#ffffff" stroke="#101f38" stroke-width="2" />
      <rect x="20" y="16" width="480" height="36" rx="6" fill="#f4f5f7" stroke="#101f38" stroke-width="2" />
      <text x="40" y="34" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="15" font-weight="700" fill="#101f38" text-anchor="start" dominant-baseline="middle" letter-spacing="0">Solicitar declaração</text>
      <text x="40" y="70" font-family="'Roboto Mono', Consolas, monospace" font-size="12" font-weight="700" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0.4">TIPO DE DECLARAÇÃO</text>
      <rect x="40" y="78" width="240" height="24" rx="4" fill="#ffffff" stroke="#5b6472" stroke-width="1.5" />
      <text x="320" y="70" font-family="'Roboto Mono', Consolas, monospace" font-size="12" font-weight="700" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0.4">FINALIDADE</text>
      <rect x="320" y="78" width="140" height="24" rx="4" fill="#ffffff" stroke="#5b6472" stroke-width="1.5" />
      <text x="40" y="122" font-family="'Roboto Mono', Consolas, monospace" font-size="12" font-weight="700" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0.4">RESUMO DA SOLICITAÇÃO</text>
      <rect x="40" y="130" width="420" height="40" rx="4" fill="#f4f5f7" stroke="#5b6472" stroke-width="1.5" />
      <rect x="300" y="188" width="160" height="32" rx="4" fill="#1e88e5" stroke="#1e88e5" stroke-width="2" />
      <text x="380" y="204" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="13" font-weight="700" fill="#ffffff" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Enviar solicitação</text>
      <rect x="40" y="230" width="190" height="22" rx="4" fill="#ffffff" stroke="#0e9f6e" stroke-width="1.5" stroke-dasharray="5 4" />
      <text x="50" y="241" font-family="'Roboto Mono', Consolas, monospace" font-size="12" font-weight="400" fill="#0e9f6e" text-anchor="start" dominant-baseline="middle" letter-spacing="0">registro confirmado</text>
      <rect x="250" y="230" width="190" height="22" rx="4" fill="#ffffff" stroke="#d9481f" stroke-width="1.5" stroke-dasharray="5 4" />
      <text x="260" y="241" font-family="'Roboto Mono', Consolas, monospace" font-size="12" font-weight="400" fill="#d9481f" text-anchor="start" dominant-baseline="middle" letter-spacing="0">campo obrigatório</text>
    </svg>
    <div class="caption">Estados de sucesso e erro fazem parte da conversa; autorização e persistência ficam fora do desenho.</div>
  </div>
</div>

<div class="notice closer">
  <span class="notice-title">PERGUNTA GUIA</span>
  Olhando este wireframe: quais decisões ele já tomou por você, e quais ele finge que já foram tomadas?
</div>

---

<div class="eyebrow">IA NA MODELAGEM</div>

# Rascunho automático, semântica sob revisão

<div class="two-col">
  <div class="col">
    <span class="label">O que a IA gera</span>
    <p>Rascunhos de diagramas, fluxos e protótipos a partir de descrições em texto, em minutos.</p>
    <ul class="list tight">
      <li>atores e casos de uso dispostos no diagrama;</li>
      <li>fluxos principais rascunhados;</li>
      <li>wireframes a partir da descrição da tela.</li>
    </ul>
  </div>
  <div class="col">
    <span class="label">Erros com cara de acerto</span>
    <ul class="list dash">
      <li>ator interno desenhado como externo;</li>
      <li>include e extend trocados;</li>
      <li>fluxo alternativo omitido;</li>
      <li>requisito que ninguém pediu, inventado no caminho;</li>
      <li>fronteira do sistema inconsistente entre figuras.</li>
    </ul>
  </div>
</div>

<span class="label">Comparação de estudo</span>
<ul class="list dash">
  <li>gerar um diagrama a partir da descrição do cenário de declarações;</li>
  <li>procurar os erros de semântica, escopo, atores e fluxos antes de conferir com alguém;</li>
  <li>listar o que precisaria mudar para o modelo representar o fluxo real.</li>
</ul>

<div class="panel c-orange closer">
  <span class="label">SINTAXE NÃO É SEMÂNTICA</span>
  <p>O diagrama gerado pode estar válido na forma e errado no significado: validar cada elemento com os requisitos e os stakeholders é parte do trabalho, e não burocracia.</p>
</div>

---

<div class="eyebrow">EXERCÍCIO · MODELAGEM NO PORTAL</div>

# Modelar a solicitação de declaração

<div class="two-col">
  <div class="col">
    <span class="label">O cenário</span>
    <p>Um estudante solicita uma declaração acadêmica em um portal. A secretaria acompanha e atende as solicitações; um serviço externo envia as notificações.</p>
    <p class="muted">O diagrama da parte 03 serve de referência de fronteira: as relações do seu desenho precisam de justificativa própria no fluxo.</p>
  </div>
  <div class="col">
    <span class="label">O que produzir</span>
    <ol class="list ordered">
      <li>os atores, com papéis externos corretos;</li>
      <li>três casos de uso nomeados com verbo e objeto;</li>
      <li>um caso especificado: pré-condição, fluxo principal e duas exceções;</li>
      <li>o diagrama de casos de uso, com fronteira coerente;</li>
      <li>um wireframe simples de uma tela relevante;</li>
      <li>duas perguntas a validar com o stakeholder.</li>
    </ol>
  </div>
</div>

<div class="notice closer">
  <span class="notice-title">AUTOVERIFICAÇÃO</span>
  Os atores são papéis externos? As relações têm justificativa no fluxo? As exceções aparecem na especificação, e não só no desenho?
</div>

---

<!-- _class: title -->

<div class="eyebrow">SÍNTESE</div>

# O modelo torna o
# entendimento visível.

<p class="subtitle">Próxima aula: documentação, rastreabilidade, controle de versões e gerenciamento de mudanças.</p>

<div class="byline">
  <strong>Prof. Victor Brayner</strong>
  <span>engenharia de requisitos, testes e qualidade · unidade I</span>
</div>
