---
marp: true
theme: campus-dev
size: 16:9
paginate: true
html: true
footer: 'ENGENHARIA DE REQUISITOS, TESTES E QUALIDADE · UNIDADES III E IV'
---

<!-- _class: title -->

<div class="eyebrow">ENGENHARIA DE REQUISITOS, TESTES E QUALIDADE · UNIDADES III E IV</div>

# Segurança e garantia
# da qualidade de software

<p class="subtitle">Resistir a ameaças no produto e organizar o processo que produz qualidade: duas frentes da mesma conversa.</p>

<div class="byline">
  <strong>Prof. Victor Brayner</strong>
  <span>ads · 2026.2</span>
</div>

---

<div class="eyebrow">PONTO DE PARTIDA</div>

# Rápido, estável e ainda assim inseguro

<div class="stack">
  <div class="two-col">
    <div class="col">
      <span class="label">O que a avaliação cobriu</span>
      <p>Um portal acadêmico funciona sem travar, responde rápido e tem uma interface que agrada. Desempenho e usabilidade estavam resolvidos, e a entrega passaria por aí.</p>
    </div>
    <div class="col">
      <span class="label">O que um estudante encontrou</span>
      <p>Ele trocou o número do identificador na URL e o portal devolveu o histórico de outro estudante.</p>
      <ul class="list tight">
        <li>A sessão dele estava válida: a autenticação funcionou.</li>
        <li>O servidor não conferiu se aquele histórico lhe pertencia.</li>
        <li>A interface permaneceu rápida e agradável o tempo todo.</li>
      </ul>
    </div>
  </div>
  <div class="panel c-orange">
    <span class="label">AS PERGUNTAS QUE FALTARAM</span>
    <p>Quem consegue ver os dados de quem? Quem consegue alterá-los? A avaliação seguiu sem fazer nenhuma das duas perguntas.</p>
  </div>
</div>

<div class="callout">
  <span class="tag">PERGUNTA</span>
  Dá para chamar de qualidade um sistema que entrega os dados de um estudante para outro?
</div>

---

<!-- _class: section-divider -->

<div class="part">PARTE 01 / 03</div>

# Ameaças, ativos e acesso

<div class="topic-list cols-3">
  <div class="topic"><span class="n">01</span><span>Objetivos de proteção</span></div>
  <div class="topic"><span class="n">02</span><span>Do ativo ao risco</span></div>
  <div class="topic"><span class="n">03</span><span>Autenticação e autorização</span></div>
</div>

---

<div class="eyebrow">CONCEITO</div>

# Três objetivos organizam a proteção

<p class="subtitle">A tríade CIA é a porta de entrada; autenticidade, rastreabilidade e privacidade também podem importar.</p>

<div class="media">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 300" role="img" aria-label="Confidencialidade, integridade e disponibilidade como vértices ligados em torno da proteção dos ativos, com um exemplo do portal acadêmico em cada vértice."><title>Tríade CIA</title><desc>Confidencialidade, integridade e disponibilidade como vértices ligados em torno da proteção dos ativos, com um exemplo do portal acadêmico em cada vértice.</desc><line x1="480" y1="86" x2="345" y2="250" stroke="#101f38" stroke-width="2"  /><line x1="480" y1="86" x2="615" y2="250" stroke="#101f38" stroke-width="2"  /><line x1="345" y1="250" x2="615" y2="250" stroke="#101f38" stroke-width="2"  /><rect x="340" y="14" width="280" height="72" rx="6" fill="#f4f5f7" stroke="#1e88e5" stroke-width="2" /><text x="480" y="42" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Confidencialidade</text><text x="480" y="66" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">estudante consulta só os próprios dados</text><rect x="55" y="214" width="290" height="72" rx="6" fill="#f4f5f7" stroke="#7c3aed" stroke-width="2" /><text x="200" y="242" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Integridade</text><text x="200" y="266" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">só perfis autorizados alteram notas</text><rect x="615" y="214" width="290" height="72" rx="6" fill="#f4f5f7" stroke="#0e9f6e" stroke-width="2" /><text x="760" y="242" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Disponibilidade</text><text x="760" y="266" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">portal no ar durante a matrícula</text><text x="480" y="185" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="14" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">proteção dos ativos</text></svg>
  <div class="caption">Um vértice cumprido não cobre os outros: um portal disponível e rápido ainda pode expor dados.</div>
</div>

<div class="notice closer">
  <span class="notice-title">PERGUNTA</span>
  Um estudante altera uma nota sem autorização: qual vértice foi comprometido?
</div>

---

<div class="eyebrow">VOCABULÁRIO DO RISCO</div>

# Seis palavras que não são sinônimos

<p class="subtitle">Sem esse vocabulário, a análise de risco vira conversa imprecisa.</p>

<div class="two-col">
  <div class="col">
    <span class="label">Os termos</span>
    <ul class="list tight">
      <li><strong>Ativo:</strong> o que tem valor e merece proteção, como dados, notas e credenciais.</li>
      <li><strong>Ameaça:</strong> agente ou evento capaz de causar dano a esse ativo.</li>
      <li><strong>Vulnerabilidade:</strong> a fraqueza que a ameaça pode explorar.</li>
      <li><strong>Ataque:</strong> a tentativa de explorar essa fraqueza.</li>
      <li><strong>Impacto:</strong> a consequência quando o evento acontece.</li>
      <li><strong>Risco:</strong> a combinação de possibilidade e gravidade, no contexto.</li>
    </ul>
  </div>
  <div class="col">
    <span class="label">A mesma história, passo a passo</span>
    <ul class="list arrow">
      <li><strong>Ativo:</strong> o histórico acadêmico.</li>
      <li><strong>Ameaça:</strong> alguém quer ler o que não lhe pertence.</li>
      <li><strong>Vulnerabilidade:</strong> a consulta não verifica permissão.</li>
      <li><strong>Ataque:</strong> o identificador é trocado na requisição.</li>
      <li><strong>Impacto:</strong> dados pessoais e acadêmicos expostos.</li>
      <li><strong>Risco:</strong> a chance de ocorrer, ponderada pela gravidade.</li>
    </ul>
  </div>
</div>

<div class="callout">
  <span class="tag">PERGUNTA</span>
  Uma senha fraca é ameaça ou vulnerabilidade?
</div>

---

<!-- _class: accent-orange -->

<div class="eyebrow">O CAMINHO DO RISCO</div>

# Uma fraqueza só vira dano quando alguém age

<p class="subtitle">Sequência simplificada para estudo; avaliações reais têm relações mais complexas.</p>

<div class="media">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 260" role="img" aria-label="Ativo, ameaça, vulnerabilidade, ataque ou evento e impacto em sequência; probabilidade e impacto combinam na prioridade do risco."><title>Cadeia do risco</title><desc>Ativo, ameaça, vulnerabilidade, ataque ou evento e impacto em sequência; probabilidade e impacto combinam na prioridade do risco.</desc><rect x="15" y="18" width="160" height="74" rx="6" fill="#f4f5f7" stroke="#101f38" stroke-width="2" /><text x="95" y="47" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Ativo</text><text x="95" y="71" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">o que tem valor</text><rect x="215" y="18" width="160" height="74" rx="6" fill="#f4f5f7" stroke="#101f38" stroke-width="2" /><text x="295" y="47" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Ameaça</text><text x="295" y="71" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">quem causa dano</text><rect x="415" y="18" width="160" height="74" rx="6" fill="#f4f5f7" stroke="#101f38" stroke-width="2" /><text x="495" y="47" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Vulnerabilidade</text><text x="495" y="71" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">a fraqueza</text><rect x="615" y="18" width="160" height="74" rx="6" fill="#f4f5f7" stroke="#101f38" stroke-width="2" /><text x="695" y="47" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Ataque ou evento</text><text x="695" y="71" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">a exploração</text><rect x="815" y="18" width="160" height="74" rx="6" fill="#f4f5f7" stroke="#101f38" stroke-width="2" /><text x="895" y="47" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Impacto</text><text x="895" y="71" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">a consequência</text><line x1="177" y1="55" x2="202" y2="55" stroke="#1e88e5" stroke-width="2"  /><polygon points="211,55 202,59.95 202,50.05" fill="#1e88e5" /><line x1="377" y1="55" x2="402" y2="55" stroke="#1e88e5" stroke-width="2"  /><polygon points="411,55 402,59.95 402,50.05" fill="#1e88e5" /><line x1="577" y1="55" x2="602" y2="55" stroke="#1e88e5" stroke-width="2"  /><polygon points="611,55 602,59.95 602,50.05" fill="#1e88e5" /><line x1="777" y1="55" x2="802" y2="55" stroke="#1e88e5" stroke-width="2"  /><polygon points="811,55 802,59.95 802,50.05" fill="#1e88e5" /><text x="15" y="150" font-family="'Roboto Mono', Consolas, monospace" font-size="13" font-weight="700" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0.6">PARA PRIORIZAR, AVALIE</text><rect x="15" y="172" width="250" height="74" rx="6" fill="#f4f5f7" stroke="#1e88e5" stroke-width="2" /><text x="140" y="201" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Probabilidade</text><text x="140" y="225" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">a chance de acontecer</text><text x="285" y="209" font-family="'Roboto Mono', Consolas, monospace" font-size="22" font-weight="700" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">+</text><rect x="305" y="172" width="250" height="74" rx="6" fill="#f4f5f7" stroke="#1e88e5" stroke-width="2" /><text x="430" y="201" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Impacto</text><text x="430" y="225" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">a gravidade da consequência</text><line x1="557" y1="209" x2="587" y2="209" stroke="#101f38" stroke-width="2"  /><polygon points="596,209 587,213.95 587,204.05" fill="#101f38" /><rect x="600" y="172" width="345" height="74" rx="6" fill="#f4f5f7" stroke="#d9481f" stroke-width="2" /><text x="772.5" y="201" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Prioridade do risco</text><text x="772.5" y="225" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">para onde a atenção vai primeiro</text></svg>
  <div class="caption">Cada termo ocupa um passo; a avaliação do risco olha para a cadeia inteira e estima chance e gravidade.</div>
</div>

<div class="panel c-orange closer">
  <span class="label">RISCO NÃO É CERTEZA</span>
  <p>Ele expressa incerteza com consequência associada, e por isso se estima, se justifica e se prioriza no contexto.</p>
</div>

---

<!-- _class: accent-teal -->

<div class="eyebrow">DISTINÇÃO</div>

# Autenticar diz quem; autorizar diz o quê

<div class="two-col">
  <div class="col">
    <span class="label">Autenticação</span>
    <p>Verificar a identidade declarada por um usuário, serviço ou componente. A pergunta respondida: <strong>quem é você?</strong></p>
    <ul class="list tight">
      <li>Senha.</li>
      <li>Chave de acesso ou certificado.</li>
      <li>Token de sessão.</li>
      <li>Fator adicional em operações sensíveis.</li>
    </ul>
    <p class="muted">Falhas conhecidas: credenciais fracas, sessões que não expiram, tokens mal guardados.</p>
  </div>
  <div class="col">
    <span class="label">Autorização</span>
    <p>Decidir quais ações e recursos essa identidade pode usar. A pergunta respondida: <strong>o que você pode fazer?</strong></p>
    <ul class="list tight">
      <li>Estudante: consulta as próprias notas e dados.</li>
      <li>Professor: registra avaliações nas turmas que leciona.</li>
      <li>Secretaria: executa operações administrativas autorizadas.</li>
    </ul>
  </div>
</div>

<div class="panel c-teal closer">
  <span class="label">MENOR PRIVILÉGIO</span>
  <p>Cada identidade recebe só as permissões que o papel exige, pelo tempo e no escopo necessários. Duas abordagens comuns: RBAC, permissões por papel; ABAC, decisões por atributos como vínculo, departamento e contexto.</p>
</div>

---

<div class="eyebrow">O FLUXO DE AUTORIZAÇÃO</div>

# A sessão válida não encerra a decisão

<p class="subtitle">Do pedido à evidência, a decisão de acesso percorre cinco passos.</p>

<div class="media">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 212" role="img" aria-label="A solicitação passa pela verificação de identidade e pela verificação de permissão antes de ser permitida ou negada, com registro de evidência ao final."><title>Fluxo de autorização</title><desc>A solicitação passa pela verificação de identidade e pela verificação de permissão antes de ser permitida ou negada, com registro de evidência ao final.</desc><text x="2" y="28" font-family="'Roboto Mono', Consolas, monospace" font-size="12" font-weight="700" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0.6">01</text><text x="202" y="28" font-family="'Roboto Mono', Consolas, monospace" font-size="12" font-weight="700" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0.6">02</text><text x="402" y="28" font-family="'Roboto Mono', Consolas, monospace" font-size="12" font-weight="700" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0.6">03</text><text x="602" y="28" font-family="'Roboto Mono', Consolas, monospace" font-size="12" font-weight="700" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0.6">04</text><text x="802" y="28" font-family="'Roboto Mono', Consolas, monospace" font-size="12" font-weight="700" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0.6">05</text><rect x="2" y="40" width="176" height="104" rx="6" fill="#f4f5f7" stroke="#101f38" stroke-width="2" /><text x="90" y="84" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Solicitação</text><text x="90" y="108" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">uma ação sobre um recurso</text><rect x="202" y="40" width="176" height="104" rx="6" fill="#f4f5f7" stroke="#1e88e5" stroke-width="2" /><text x="290" y="84" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Autenticado?</text><text x="290" y="108" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">identidade confirmada</text><rect x="402" y="40" width="176" height="104" rx="6" fill="#f4f5f7" stroke="#d9481f" stroke-width="2" /><text x="490" y="84" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Verificar permissão</text><text x="490" y="108" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">ação e recurso no contexto</text><rect x="602" y="40" width="176" height="104" rx="6" fill="#f4f5f7" stroke="#101f38" stroke-width="2" /><text x="690" y="84" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Permitir ou negar</text><text x="690" y="108" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">na camada confiável</text><rect x="802" y="40" width="176" height="104" rx="6" fill="#f4f5f7" stroke="#0e9f6e" stroke-width="2" /><text x="890" y="84" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Registrar evidência</text><text x="890" y="108" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">quando aplicável</text><line x1="180" y1="92" x2="189" y2="92" stroke="#1e88e5" stroke-width="2"  /><polygon points="198,92 189,96.95 189,87.05" fill="#1e88e5" /><line x1="380" y1="92" x2="389" y2="92" stroke="#1e88e5" stroke-width="2"  /><polygon points="398,92 389,96.95 389,87.05" fill="#1e88e5" /><line x1="580" y1="92" x2="589" y2="92" stroke="#1e88e5" stroke-width="2"  /><polygon points="598,92 589,96.95 589,87.05" fill="#1e88e5" /><line x1="780" y1="92" x2="789" y2="92" stroke="#1e88e5" stroke-width="2"  /><polygon points="798,92 789,96.95 789,87.05" fill="#1e88e5" /><line x1="290" y1="146" x2="290" y2="167" stroke="#5b6472" stroke-width="2" stroke-dasharray="6 5" /><polygon points="290,176 285.05,167 294.95,167" fill="#5b6472" /><text x="290" y="194" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">sem identidade confirmada, a solicitação para aqui</text></svg>
  <div class="caption">O passo 03 considera a ação, o recurso e o contexto, e não apenas a existência de uma sessão válida.</div>
</div>

<div class="notice closer">
  <span class="notice-title">ERRO COMUM</span>
  Esconder o botão de editar não é controle de acesso: a interface orienta, mas quem decide é o servidor.
</div>

---

<!-- _class: section-divider -->

<div class="part">PARTE 02 / 03</div>

# Da fraqueza à evidência

<div class="topic-list">
  <div class="topic"><span class="n">01</span><span>Fraquezas comuns</span></div>
  <div class="topic"><span class="n">02</span><span>O que um teste avalia</span></div>
  <div class="topic"><span class="n">03</span><span>Caso de teste e evidência</span></div>
  <div class="topic"><span class="n">04</span><span>Matriz de risco e prioridade</span></div>
</div>

---

<div class="eyebrow">FRAQUEZAS COMUNS</div>

# Cada fraqueza tem uma pergunta que a expõe

<p class="subtitle">Perguntas de verificação para levar à revisão e ao teste.</p>

| Fraqueza | Pergunta de verificação | Controle de referência |
|---|---|---|
| Acesso inadequado | O usuário pode acessar este recurso específico? | Autorização verificada no servidor |
| Injeção | Dados digitados podem virar instrução executável? | Consultas parametrizadas |
| Autenticação e sessão | A identidade e a sessão estão protegidas? | Gestão segura de credenciais e sessão |
| Exposição de dados | A resposta traz só o que a tela precisa? | Minimização e proteção de dados |
| Configuração insegura | O ambiente expõe o que não precisa? | Configuração revisada e sem excessos |
| Dependência vulnerável | Há componente com falha conhecida? | Inventário e atualização de dependências |

<p class="muted small">Lista didática para reconhecer padrões; cada contexto guarda fraquezas próprias.</p>

---

<!-- _class: accent-purple -->

<div class="eyebrow">O QUE TESTAR</div>

# Nenhum teste prova segurança total

<p class="subtitle">Seis categorias introdutórias, do documento ao sistema em execução.</p>

<div class="cards cols-3">
  <div class="card">
    <span class="n">01</span>
    <h3>Requisitos e regras de acesso</h3>
    <p>Verificar se os requisitos declaram quem pode realizar cada ação.</p>
  </div>
  <div class="card">
    <span class="n">02</span>
    <h3>Código e configuração</h3>
    <p>Procurar padrões inseguros, segredos expostos e permissões excessivas.</p>
  </div>
  <div class="card">
    <span class="n">03</span>
    <h3>Dependências</h3>
    <p>Identificar componentes desatualizados ou com falhas já conhecidas.</p>
  </div>
  <div class="card">
    <span class="n">04</span>
    <h3>Autenticação e autorização</h3>
    <p>Verificar tentativas permitidas e negadas em cada perfil.</p>
  </div>
  <div class="card">
    <span class="n">05</span>
    <h3>Entrada e tratamento de dados</h3>
    <p>Conferir se entradas inesperadas não geram execução indevida ou exposição.</p>
  </div>
  <div class="card">
    <span class="n">06</span>
    <h3>Testes dinâmicos</h3>
    <p>Observar a aplicação em execução, em ambiente e escopo autorizados.</p>
  </div>
</div>

<div class="callout">
  <span class="tag">PARA ANOTAR</span>
  Um teste aprovado demonstra resultado dentro do escopo testado; o que ficou de fora segue em aberto.
</div>

---

<div class="eyebrow">MATRIZ DE AUTORIZAÇÃO</div>

# Negado também precisa de evidência

<p class="subtitle">Cada linha da matriz do portal vira um caso de teste, com resultado esperado declarado.</p>

| Perfil | Ação | Recurso | Resultado esperado |
|---|---|---|---|
| Estudante A | Consultar | Próprio histórico | Permitido |
| Estudante A | Consultar | Histórico do estudante B | Negado |
| Estudante A | Alterar | Própria nota | Negado |
| Professor da turma | Consultar | Notas da turma vinculada | Permitido |
| Professor sem vínculo | Consultar | Notas de outra turma | Negado |
| Secretaria autorizada | Corrigir cadastro, conforme a regra | Cadastro do estudante | Permitido e auditável |

<p class="muted small">As linhas negadas viram casos de teste, como no exemplo a seguir.</p>

---

<div class="eyebrow">CASO DE TESTE</div>

# A evidência se planeja antes de executar

<div class="two-col">
  <div class="col">
    <span class="label">SEG-AUT-002 · identificação</span>
    <p><strong>Objetivo:</strong> impedir que um estudante consulte o histórico de outro.</p>
    <p><strong>Pré-condições:</strong> estudante A autenticado; registros de A e de B existentes; ambiente de teste autorizado.</p>
    <p><strong>Resultado esperado:</strong> a operação é negada e a resposta não revela dados de B.</p>
    <p><strong>Critério de aprovação:</strong> nenhuma informação protegida de B chega ao estudante A.</p>
  </div>
  <div class="col">
    <span class="label">Passos</span>
    <ol class="list ordered tight">
      <li>Acessar o próprio histórico e confirmar que a consulta funciona.</li>
      <li>Capturar a requisição legítima de consulta.</li>
      <li>Substituir o identificador do recurso pelo do estudante B.</li>
      <li>Enviar a requisição no ambiente de teste.</li>
      <li>Verificar resposta, conteúdo e registro de auditoria, quando houver.</li>
    </ol>
    <p class="muted">Evidência: registro da execução, resposta observada e confirmação da ausência dos dados de B.</p>
  </div>
</div>

<div class="notice closer">
  <span class="notice-title">ONDE EXECUTAR</span>
  Ambiente de teste autorizado e dados fictícios. Testes de segurança não rodam contra sistemas reais sem autorização e escopo definidos.
</div>

---

<!-- _class: accent-orange -->

<div class="eyebrow">ANÁLISE DE RISCO</div>

# Probabilidade e impacto ordenam a fila

<p class="subtitle">Tempo e recurso são limitados: a matriz didática ajuda a escolher por onde começar.</p>

<div class="two-col">
  <div class="col">
    <span class="label">O caminho, em cinco movimentos</span>
    <ol class="list ordered tight">
      <li>Identificar ativos e ameaças plausíveis.</li>
      <li>Apontar as vulnerabilidades que facilitariam o evento.</li>
      <li>Estimar probabilidade e impacto, em escala de 1 a 3.</li>
      <li>Calcular o índice e definir a prioridade.</li>
      <li>Propor controles e testes; reavaliar o risco que sobra.</li>
    </ol>
  </div>
  <div class="col">
    <span class="label">A régua didática</span>
    <div class="equation">índice = probabilidade × impacto</div>
    <table>
      <thead>
        <tr><th>Índice</th><th>Prioridade didática</th></tr>
      </thead>
      <tbody>
        <tr><td>1 a 2</td><td>Baixa</td></tr>
        <tr><td>3 a 4</td><td>Média</td></tr>
        <tr><td>6 a 9</td><td>Alta</td></tr>
      </tbody>
    </table>
    <p class="muted small">Exemplo com valores hipotéticos: probabilidade 2 e impacto 3 dão índice 6, prioridade alta.</p>
  </div>
</div>

<div class="panel c-orange closer">
  <span class="label">LIMITES DA MATRIZ</span>
  <p>A conta organiza a conversa e não encerra o assunto: índices iguais podem pedir respostas diferentes, e um evento raro com impacto extremo pode virar prioridade. Toda classificação pede justificativa e contexto.</p>
</div>

---

<!-- _class: section-divider -->

<div class="part">PARTE 03 / 03</div>

# Qualidade, QC e QA

<div class="topic-list">
  <div class="topic"><span class="n">01</span><span>O que qualidade significa</span></div>
  <div class="topic"><span class="n">02</span><span>QC e QA, dois olhares</span></div>
  <div class="topic"><span class="n">03</span><span>Práticas que sustentam</span></div>
  <div class="topic"><span class="n">04</span><span>IA e exercício integrado</span></div>
</div>

---

<!-- _class: accent-purple -->

<div class="eyebrow">CONCEITO</div>

# Ausência de bugs não define qualidade

<div class="two-col">
  <div class="col">
    <span class="label">O conceito</span>
    <p>Qualidade é o grau em que o produto e os processos atendem a requisitos, necessidades, critérios e expectativas relevantes no contexto de uso.</p>
    <p>Um software pode executar limpo e ainda:</p>
    <ul class="list tight">
      <li>não atender à necessidade real de quem usa;</li>
      <li>ser inseguro ou inacessível;</li>
      <li>ter desempenho insuficiente;</li>
      <li>ser difícil de manter;</li>
      <li>desrespeitar regra de negócio.</li>
    </ul>
  </div>
  <div class="col">
    <span class="label">Princípios que guiam a prática</span>
    <ul class="list arrow">
      <li>Qualidade começa no requisito e segue até a operação.</li>
      <li>Prevenir barateia a correção; detectar segue preciso.</li>
      <li>Critérios explícitos, observáveis no contexto.</li>
      <li>Responsabilidade de todos os papéis, não de um.</li>
      <li>Evidência ligando requisito, teste e resultado.</li>
      <li>Problema recorrente pede mudança no processo.</li>
      <li>Esforço proporcional à criticidade e ao risco.</li>
    </ul>
  </div>
</div>

<p class="muted small">Os princípios reaparecem no exercício final, na hora de propor QC e QA para o portal.</p>

---

<!-- _class: accent-teal -->

<div class="eyebrow">DISTINÇÃO</div>

# QC avalia o produto; QA organiza o processo

<div class="media">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 290" role="img" aria-label="Faixa de QA define e melhora o processo; faixa de QC avalia o que foi produzido; os achados de QC alimentam a melhoria do processo em QA."><title>QA e QC</title><desc>Faixa de QA define e melhora o processo; faixa de QC avalia o que foi produzido; os achados de QC alimentam a melhoria do processo em QA.</desc><rect x="40" y="26" width="880" height="108" rx="6" fill="#f4f5f7" stroke="#0e9f6e" stroke-width="2" /><text x="70" y="56" font-family="'Roboto Mono', Consolas, monospace" font-size="13" font-weight="700" fill="#0e9f6e" text-anchor="start" dominant-baseline="middle" letter-spacing="0.6">QA · GARANTIA DA QUALIDADE</text><text x="70" y="92" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="15" font-weight="700" fill="#101f38" text-anchor="start" dominant-baseline="middle" letter-spacing="0">define e melhora o processo: padrões, critérios de pronto, revisões, prevenção</text><text x="70" y="120" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0">pergunta típica: o processo favorece qualidade consistente?</text><rect x="40" y="168" width="880" height="108" rx="6" fill="#f4f5f7" stroke="#1e88e5" stroke-width="2" /><text x="70" y="198" font-family="'Roboto Mono', Consolas, monospace" font-size="13" font-weight="700" fill="#1e88e5" text-anchor="start" dominant-baseline="middle" letter-spacing="0.6">QC · CONTROLE DA QUALIDADE</text><text x="70" y="234" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="15" font-weight="700" fill="#101f38" text-anchor="start" dominant-baseline="middle" letter-spacing="0">avalia o que foi produzido: testes, inspeções, critérios, registro de defeitos</text><text x="70" y="262" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0">pergunta típica: o resultado atende aos critérios definidos?</text><line x1="620" y1="166" x2="620" y2="147" stroke="#101f38" stroke-width="2"  /><polygon points="620,138 624.95,147 615.05,147" fill="#101f38" /><text x="640" y="152" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12" font-weight="400" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0">achados alimentam a melhoria do processo</text></svg>
  <div class="caption">A seta que sobe fecha o ciclo: sem ela, o defeito registrado hoje reaparece na entrega seguinte.</div>
</div>

<div class="notice closer">
  <span class="notice-title">COMO LER JUNTAS</span>
  O QC registra o problema encontrado; o QA pergunta por que o processo o deixou passar e o que muda para não repetir.
</div>

---

<div class="eyebrow">EXEMPLO</div>

# A mesma regra atravessa a equipe

<div class="two-col">
  <div class="col">
    <span class="label">Regra: sem vaga, sem matrícula</span>
    <p>Um estudante não pode se matricular em turma sem vagas. O que cada parte faz com ela:</p>
    <ul class="list arrow">
      <li>Requisitos: define a regra e as exceções.</li>
      <li>Desenvolvimento: implementa a validação.</li>
      <li>QC: testa com vaga, na última vaga e com turma lotada.</li>
      <li>QA: confere revisão de regras críticas e cobertura antes da entrega.</li>
      <li>Segurança: verifica a autorização da operação.</li>
    </ul>
  </div>
  <div class="col">
    <span class="label">O que sustenta o passo de QA</span>
    <p><strong>Revisão:</strong> pessoas leem o artefato, de requisito a caso de teste, em busca de problemas, ambiguidades e inconsistências.</p>
    <p><strong>Inspeção:</strong> revisão com estrutura, papéis, critérios e registro de achados.</p>
    <p><strong>Padrões e procedimentos:</strong> orientações acordadas que reduzem variação e tornam o trabalho verificável.</p>
    <p class="muted small">Padrão com propósito ajuda; burocracia sem função, não. A próxima aula aprofunda revisões, inspeções, modelos e padrões.</p>
  </div>
</div>

<div class="panel c-teal closer">
  <span class="label">PARA ANOTAR</span>
  <p>A regra só vira qualidade pelo encadeamento das atividades, e não por uma etapa isolada no fim da linha.</p>
</div>

---

<!-- _class: accent-purple -->

<div class="eyebrow">IA NO APOIO</div>

# IA levanta hipóteses; a validação segue humana

<p class="subtitle">No exercício final, uma tarefa pede exatamente isso: validar uma sugestão de IA.</p>

<div class="two-col">
  <div class="col">
    <span class="label">Onde ajuda</span>
    <ul class="list tight">
      <li>Sugerir cenários negativos e casos de teste de autorização.</li>
      <li>Classificar riscos a partir do contexto fornecido.</li>
      <li>Explicar código e apontar padrões potencialmente inseguros.</li>
      <li>Gerar checklists iniciais de revisão.</li>
      <li>Agrupar relatos de defeitos recorrentes e resumir evidências.</li>
    </ul>
  </div>
  <div class="col">
    <span class="label">Onde exige cautela</span>
    <ul class="list tight">
      <li>Deixar passar vulnerabilidades ou apontar falsos positivos.</li>
      <li>Sugerir controles inadequados ao contexto.</li>
      <li>Gerar testes que repetem a leitura equivocada da implementação.</li>
      <li>Desconhecer políticas internas e obrigações legais.</li>
    </ul>
    <p class="muted small">No prompt, pedir fatos, hipóteses e pontos que exigem validação; vulnerabilidade sem evidência não se afirma.</p>
  </div>
</div>

<div class="notice warning closer">
  <span class="notice-title">SEM EXCEÇÃO</span>
  Segredos, credenciais, dados pessoais e código confidencial não entram em ferramentas de IA sem autorização e proteção.
</div>

---

<!-- _class: accent-orange -->

<div class="eyebrow">EXERCÍCIO · PORTAL ACADÊMICO</div>

# Analisar segurança e qualidade no mesmo portal

<div class="two-col">
  <div class="col">
    <span class="label">O cenário</span>
    <p>Três perfis: estudante consulta dados, notas e histórico e pede matrícula; professor consulta as próprias turmas e registra notas dos vinculados; secretaria corrige cadastros conforme autorização.</p>
    <p>Relatos de uma avaliação preliminar:</p>
    <ul class="list tight">
      <li>estudante acessou o histórico de outro ao trocar um identificador;</li>
      <li>professor visualizou turma em que não leciona;</li>
      <li>resposta da API traz dados pessoais que a tela não usa;</li>
      <li>credenciais de teste achadas em configuração enviada ao repositório.</li>
    </ul>
  </div>
  <div class="col">
    <span class="label">Tarefas</span>
    <ol class="list ordered tight">
      <li>Para dois relatos, identificar ativo, vulnerabilidade, ameaça e impacto.</li>
      <li>Atribuir probabilidade e impacto de 1 a 3 e calcular o índice.</li>
      <li>Escolher o risco prioritário e justificar a escolha.</li>
      <li>Escrever dois casos de teste, com pré-condições, passos e resultado esperado; ao menos um deve verificar uma operação negada.</li>
      <li>Propor uma atividade de QC e uma de QA para evitar recorrência.</li>
      <li>Indicar uma sugestão a pedir a uma IA e como validá-la.</li>
    </ol>
  </div>
</div>

<div class="callout">
  <span class="tag">NA PRÁTICA</span>
  Proposta genérica não resolve: em cada resposta, apontar o controle verificável e a evidência que o comprova.
</div>

---

<div class="eyebrow">AUTOVERIFICAÇÃO</div>

# Quatro perguntas antes de encerrar

<p class="subtitle">Respondê-las com as próprias palavras mostra o que ficou.</p>

<div class="cards cols-2">
  <div class="card">
    <span class="n">01</span>
    <h3>Quem e o quê</h3>
    <p>Explicar a diferença entre autenticação e autorização usando um exemplo do portal acadêmico.</p>
  </div>
  <div class="card">
    <span class="n">02</span>
    <h3>Fraqueza e evidência</h3>
    <p>Descrever uma vulnerabilidade vista na aula e o teste que produziria evidência de que o controle a cobre.</p>
  </div>
  <div class="card">
    <span class="n">03</span>
    <h3>QC ou QA</h3>
    <p>Classificar e justificar: executar teste de acesso indevido; definir processo obrigatório de revisão de permissões.</p>
  </div>
  <div class="card">
    <span class="n">04</span>
    <h3>A evidência de uma regra</h3>
    <p>Indicar a evidência necessária para afirmar que uma regra de acesso está funcionando em produção.</p>
  </div>
</div>

---

<!-- _class: title -->

<div class="eyebrow">SÍNTESE</div>

# Segurança se decide no projeto.
# Qualidade se garante no processo.

<p class="subtitle">Testes dão evidência; o processo dá consistência. Próxima aula: revisões, inspeções, modelos e padrões, métricas e melhoria contínua.</p>

<div class="byline">
  <strong>Prof. Victor Brayner</strong>
  <span>engenharia de requisitos, testes e qualidade · unidades III e IV</span>
</div>
