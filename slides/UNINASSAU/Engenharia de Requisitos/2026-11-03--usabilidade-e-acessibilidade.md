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

# Usabilidade e
# acessibilidade

<p class="subtitle">O que os testes funcionais não dizem sobre quem consegue usar o sistema.</p>

<div class="byline">
  <strong>Prof. Victor Brayner</strong>
  <span>ads · 2026.2</span>
</div>

---

<div class="eyebrow">PONTO DE PARTIDA</div>

# Os testes passaram. O portal está pronto?

<div class="stack">
  <div class="two-col">
    <div class="col">
      <span class="label">REVISÃO</span>
      <p>O portal acadêmico deixa o estudante consultar disciplinas, ver pré-requisitos, escolher horários e confirmar matrícula. Os testes funcionais indicam que cada operação produz o resultado previsto.</p>
      <p class="muted">Funcionalidade disponível não é o mesmo que interação bem-sucedida.</p>
    </div>
    <div class="col">
      <span class="label">PERGUNTAS GUIA</span>
      <ul class="list tight">
        <li>E se a função existe, mas ninguém a encontra?</li>
        <li>E se a tela é confusa na primeira visita?</li>
        <li>E se o texto fica pequeno demais no celular?</li>
        <li>E se o fluxo não explica o próprio erro?</li>
        <li>E se o botão só responde ao mouse?</li>
      </ul>
    </div>
  </div>
  <div class="panel c-teal">
    <span class="label">A ponte com a unidade</span>
    <p>O teste funcional confirma que a operação gera o resultado esperado. Não mostra se o caminho até o resultado é compreensível, eficiente ou alcançável para quem interage de outros jeitos: sem mouse, sem visão total, na tela pequena do celular.</p>
  </div>
</div>

<div class="notice closer">
  <span class="notice-title">Fio da aula</span>
  A pergunta muda de “o sistema faz o que deveria?” para “quem consegue usar isso, em que contexto e com quais obstáculos?”.
</div>

---

<!-- _class: section-divider -->

<div class="part">PARTE 01 / 04</div>

# Experiência e usabilidade

<div class="topic-list cols-3">
  <div class="topic"><span class="n">01</span><span>UX e usabilidade</span></div>
  <div class="topic"><span class="n">02</span><span>Eficácia, eficiência e satisfação</span></div>
  <div class="topic"><span class="n">03</span><span>Contexto de uso</span></div>
</div>

---

<div class="eyebrow">CONCEITO</div>

# UX é o conjunto; usabilidade é uma dimensão

<div class="stack">
  <div class="two-col">
    <div class="col">
      <span class="label">Experiência do usuário (UX)</span>
      <p>As percepções e respostas que o uso, ou a simples expectativa de uso, provoca em uma pessoa: descoberta, compreensão, confiança, emoção e o que sobra depois da interação.</p>
      <p class="muted">No portal, a experiência começa antes do clique em “Matrícula”: entender o período, achar as disciplinas, perceber o conflito de horário, confiar na confirmação.</p>
    </div>
    <div class="col">
      <span class="label">Usabilidade</span>
      <p>A capacidade de usuários específicos alcançarem objetivos específicos com <strong>eficácia, eficiência e satisfação</strong>, em um contexto de uso declarado (ISO 9241-11).</p>
      <p class="muted">Um sistema fácil em uma tarefa isolada ainda pode produzir experiência ruim: informação pouco confiável, mensagens contraditórias, estado da solicitação opaco.</p>
    </div>
  </div>
  <div class="panel c-teal">
    <span class="label">Públicos diferentes, leituras diferentes</span>
    <p>O fluxo de matrícula pode ser tranquilo para quem usa o portal todo semestre e opaco para quem o abre pela primeira vez. A resposta muda com o público, o dispositivo e a experiência prévia.</p>
  </div>
</div>

<div class="callout">
  <span class="tag">PERGUNTA</span>
  Uma interface bonita comprova boa usabilidade?
</div>

---

<div class="eyebrow">O ESQUEMA</div>

# Três nomes que não são sinônimos

<div class="media">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 300" role="img" aria-label="A experiência do usuário (UX) engloba a usabilidade, formada por eficácia, eficiência e satisfação em um contexto de uso; ao lado, a acessibilidade influencia perceber, compreender, navegar e interagir; as três dimensões sustentam a qualidade percebida."><title>UX engloba usabilidade; acessibilidade atravessa as duas</title><desc>A experiência do usuário (UX) engloba a usabilidade, formada por eficácia, eficiência e satisfação em um contexto de uso; ao lado, a acessibilidade influencia perceber, compreender, navegar e interagir; as três dimensões sustentam a qualidade percebida.</desc><rect x="50" y="20" width="520" height="210" rx="6" fill="#f4f5f7" stroke="#101f38" stroke-width="2" /><text x="70" y="44" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="15" font-weight="700" fill="#101f38" text-anchor="start" dominant-baseline="middle" letter-spacing="0">Experiência do usuário (UX)</text><text x="70" y="66" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12" font-weight="400" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0">começa antes do clique e continua depois dele</text><rect x="90" y="84" width="440" height="124" rx="6" fill="#ffffff" stroke="#1e88e5" stroke-width="2" /><text x="310" y="106" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="15" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Usabilidade</text><rect x="105" y="130" width="130" height="40" rx="4" fill="#f4f5f7" stroke="#1e88e5" stroke-width="1.5" /><text x="170" y="150" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="13" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Eficácia</text><rect x="245" y="130" width="130" height="40" rx="4" fill="#f4f5f7" stroke="#1e88e5" stroke-width="1.5" /><text x="310" y="150" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="13" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Eficiência</text><rect x="385" y="130" width="130" height="40" rx="4" fill="#f4f5f7" stroke="#1e88e5" stroke-width="1.5" /><text x="450" y="150" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="13" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Satisfação</text><text x="310" y="190" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">em um contexto de uso</text><rect x="660" y="20" width="250" height="210" rx="6" fill="#f4f5f7" stroke="#0e9f6e" stroke-width="2" /><text x="785" y="44" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="15" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Acessibilidade</text><text x="785" y="78" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">perceber</text><text x="785" y="100" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">compreender</text><text x="785" y="122" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">navegar</text><text x="785" y="144" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">interagir</text><text x="785" y="180" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">transversal às demais dimensões</text><line x1="578" y1="118" x2="645" y2="118" stroke="#1e88e5" stroke-width="2"  /><polygon points="654,118 645,122.95 645,113.05" fill="#1e88e5" /><line x1="654" y1="152" x2="587" y2="152" stroke="#0e9f6e" stroke-width="2"  /><polygon points="578,152 587,147.05 587,156.95" fill="#0e9f6e" /><text x="616" y="135" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">se influenciam</text><rect x="50" y="258" width="860" height="42" rx="4" fill="#101f38" stroke="none" stroke-width="2" /><text x="480" y="279" font-family="'Roboto Mono', Consolas, monospace" font-size="12" font-weight="700" fill="#ffffff" text-anchor="middle" dominant-baseline="middle" letter-spacing="0.5">QUALIDADE PERCEBIDA</text><line x1="310" y1="232" x2="310" y2="245" stroke="#101f38" stroke-width="2"  /><polygon points="310,254 305.05,245 314.95,245" fill="#101f38" /><line x1="785" y1="232" x2="785" y2="245" stroke="#101f38" stroke-width="2"  /><polygon points="785,254 780.05,245 789.95,245" fill="#101f38" /></svg>
  <div class="caption">A usabilidade mora dentro da experiência; a acessibilidade atravessa as duas, sem pertencer a nenhuma. As três sustentam a qualidade percebida.</div>
</div>

<div class="notice closer">
  <span class="notice-title">PARA ANOTAR</span>
  Usabilidade pergunta se os objetivos foram alcançados. Acessibilidade pergunta quem ainda está impedido de chegar até eles.
</div>

---

<div class="eyebrow">CRITÉRIOS</div>

# Três perguntas transformam opinião em observação

<div class="stack">
  <div class="cards cols-3">
    <div class="card">
      <span class="n">01</span>
      <h3>Eficácia</h3>
      <p>A tarefa termina com o resultado esperado, correto e completo?</p>
    </div>
    <div class="card">
      <span class="n">02</span>
      <h3>Eficiência</h3>
      <p>Quanto tempo, quantas ações e quantos erros o caminho custou?</p>
    </div>
    <div class="card">
      <span class="n">03</span>
      <h3>Satisfação</h3>
      <p>Como a própria pessoa percebe o processo: compreensível, confortável, adequado?</p>
    </div>
  </div>
  <div class="panel c-teal">
    <span class="label">Exemplo didático</span>
    <p>Dois estudantes emitem o mesmo comprovante. Um conclui em 30 segundos, sem ajuda. O outro leva quatro minutos, erra duas vezes e pede orientação. Eficácia parecida; eficiência e experiência, diferentes.</p>
  </div>
</div>

<div class="panel c-orange closer">
  <span class="label">Cuidado</span>
  <p>Uma tela com poucos elementos pode esconder funções em menus pouco previsíveis; uma tela cheia pode ser eficiente para quem já conhece e sobrecarregar quem chega pela primeira vez. Contar botões não é avaliar.</p>
</div>

---

<div class="eyebrow">CONTEXTO DE USO</div>

# Quem, onde e com quê definem a avaliação

<div class="stack">
  <div class="steps cols-5">
    <div class="step">
      <span class="n">01</span>
      <h3>Usuários</h3>
      <p>Quem realiza a tarefa, com quais conhecimentos e necessidades.</p>
    </div>
    <div class="step">
      <span class="n">02</span>
      <h3>Objetivos</h3>
      <p>O que a pessoa pretende alcançar.</p>
    </div>
    <div class="step">
      <span class="n">03</span>
      <h3>Tarefas</h3>
      <p>Quais ações compõem o caminho até o objetivo.</p>
    </div>
    <div class="step">
      <span class="n">04</span>
      <h3>Ambiente</h3>
      <p>Dispositivo, local, conectividade e situação de uso.</p>
    </div>
    <div class="step">
      <span class="n">05</span>
      <h3>Tecnologia</h3>
      <p>Navegador, sistema, método de entrada e tecnologias assistivas.</p>
    </div>
  </div>
  <div class="panel c-purple">
    <span class="label">Exemplo</span>
    <p>Consultar o horário de uma disciplina em um notebook, em casa, com conexão estável, é uma tarefa. Repetir a consulta no celular, em movimento, com tela pequena e conexão instável, é outra.</p>
  </div>
</div>

<div class="notice closer">
  <span class="notice-title">Ressalva</span>
  Dificuldade não é automaticamente culpa de quem usa: o rótulo, a arquitetura da informação, o fluxo ou o contexto podem estar no caminho.
</div>

---

<!-- _class: section-divider -->

<div class="part">PARTE 02 / 04</div>

# Avaliação de usabilidade

<div class="topic-list">
  <div class="topic"><span class="n">01</span><span>Inspeção e uso real</span></div>
  <div class="topic"><span class="n">02</span><span>O ciclo da avaliação</span></div>
  <div class="topic"><span class="n">03</span><span>Cenários de teste</span></div>
  <div class="topic"><span class="n">04</span><span>Indicadores e evidências</span></div>
</div>

---

<!-- _class: accent-teal -->

<div class="eyebrow">DISTINÇÃO</div>

# Inspeção e uso real respondem perguntas diferentes

<div class="two-col">
  <div class="panel c-teal">
    <span class="label">Avaliação por inspeção</span>
    <p>Um avaliador examina a interface com princípios, heurísticas e listas de verificação, sem organizar sessão com usuários.</p>
    <ul class="list tight">
      <li>É rápida e econômica, útil nas fases iniciais;</li>
      <li>encontra inconsistências e barreiras evidentes;</li>
      <li>depende da experiência de quem inspeciona e não vê o uso acontecer.</li>
    </ul>
    <p class="muted">Lentes clássicas (heurísticas de Nielsen): o sistema mostra o que está acontecendo? A linguagem é familiar? O erro é prevenido antes de existir?</p>
  </div>
  <div class="panel c-orange">
    <span class="label">Teste com participantes</span>
    <p>Pessoas representativas do público realizam tarefas definidas enquanto a equipe observa o que acontece.</p>
    <ul class="list tight">
      <li>Revela dificuldades que só aparecem durante o uso;</li>
      <li>o participante testa a interface, não é testado;</li>
      <li>exige planejamento, tarefas bem escritas e consentimento.</li>
    </ul>
    <p class="muted">Evitar frases que induzam a resposta ou façam a pessoa sentir que falhou.</p>
  </div>
</div>

<div class="notice closer">
  <span class="notice-title">Regra</span>
  Heurísticas organizam a inspeção e levantam suspeitas; a observação de uso mostra se elas se confirmam.
</div>

---

<div class="eyebrow">O CICLO</div>

# A avaliação começa na pergunta, não na ferramenta

<div class="media">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 270" role="img" aria-label="Ciclo de avaliação de usabilidade em oito etapas: objetivo, perfil e contexto, tarefa e cenário, observação, evidências, achados, recomendações e nova avaliação, que retorna ao objetivo com outra pergunta."><title>Ciclo de avaliação de usabilidade</title><desc>Ciclo de avaliação de usabilidade em oito etapas: objetivo, perfil e contexto, tarefa e cenário, observação, evidências, achados, recomendações e nova avaliação, que retorna ao objetivo com outra pergunta.</desc><rect x="45" y="40" width="190" height="60" rx="6" fill="#f4f5f7" stroke="#1e88e5" stroke-width="2" /><text x="45" y="28" font-family="'Roboto Mono', Consolas, monospace" font-size="12" font-weight="700" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0.6">01</text><text x="140" y="70" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="15" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Objetivo</text><rect x="280" y="40" width="190" height="60" rx="6" fill="#f4f5f7" stroke="#1e88e5" stroke-width="2" /><text x="280" y="28" font-family="'Roboto Mono', Consolas, monospace" font-size="12" font-weight="700" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0.6">02</text><text x="375" y="70" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="15" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Perfil e contexto</text><rect x="515" y="40" width="190" height="60" rx="6" fill="#f4f5f7" stroke="#1e88e5" stroke-width="2" /><text x="515" y="28" font-family="'Roboto Mono', Consolas, monospace" font-size="12" font-weight="700" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0.6">03</text><text x="610" y="70" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="15" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Tarefa e cenário</text><rect x="750" y="40" width="190" height="60" rx="6" fill="#f4f5f7" stroke="#1e88e5" stroke-width="2" /><text x="750" y="28" font-family="'Roboto Mono', Consolas, monospace" font-size="12" font-weight="700" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0.6">04</text><text x="845" y="70" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="15" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Observação</text><line x1="237" y1="70" x2="265" y2="70" stroke="#1e88e5" stroke-width="2"  /><polygon points="274,70 265,74.95 265,65.05" fill="#1e88e5" /><line x1="472" y1="70" x2="500" y2="70" stroke="#1e88e5" stroke-width="2"  /><polygon points="509,70 500,74.95 500,65.05" fill="#1e88e5" /><line x1="707" y1="70" x2="735" y2="70" stroke="#1e88e5" stroke-width="2"  /><polygon points="744,70 735,74.95 735,65.05" fill="#1e88e5" /><line x1="845" y1="102" x2="845" y2="167" stroke="#1e88e5" stroke-width="2"  /><polygon points="845,176 840.05,167 849.95,167" fill="#1e88e5" /><rect x="45" y="180" width="190" height="60" rx="6" fill="#f4f5f7" stroke="#1e88e5" stroke-width="2" /><text x="45" y="168" font-family="'Roboto Mono', Consolas, monospace" font-size="12" font-weight="700" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0.6">08</text><text x="140" y="210" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="15" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Nova avaliação</text><rect x="280" y="180" width="190" height="60" rx="6" fill="#f4f5f7" stroke="#1e88e5" stroke-width="2" /><text x="280" y="168" font-family="'Roboto Mono', Consolas, monospace" font-size="12" font-weight="700" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0.6">07</text><text x="375" y="210" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="15" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Recomendações</text><rect x="515" y="180" width="190" height="60" rx="6" fill="#f4f5f7" stroke="#1e88e5" stroke-width="2" /><text x="515" y="168" font-family="'Roboto Mono', Consolas, monospace" font-size="12" font-weight="700" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0.6">06</text><text x="610" y="210" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="15" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Achados</text><rect x="750" y="180" width="190" height="60" rx="6" fill="#f4f5f7" stroke="#1e88e5" stroke-width="2" /><text x="750" y="168" font-family="'Roboto Mono', Consolas, monospace" font-size="12" font-weight="700" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0.6">05</text><text x="845" y="210" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="15" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Evidências</text><line x1="748" y1="210" x2="720" y2="210" stroke="#1e88e5" stroke-width="2"  /><polygon points="711,210 720,205.05 720,214.95" fill="#1e88e5" /><line x1="513" y1="210" x2="485" y2="210" stroke="#1e88e5" stroke-width="2"  /><polygon points="476,210 485,205.05 485,214.95" fill="#1e88e5" /><line x1="278" y1="210" x2="250" y2="210" stroke="#1e88e5" stroke-width="2"  /><polygon points="241,210 250,205.05 250,214.95" fill="#1e88e5" /><line x1="140" y1="178" x2="140" y2="113" stroke="#0e9f6e" stroke-width="2" stroke-dasharray="6 5" /><polygon points="140,104 144.95,113 135.05,113" fill="#0e9f6e" /><text x="150" y="141" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12" font-weight="400" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0">recomeça com outra pergunta</text></svg>
  <div class="caption">A ferramenta só entra depois da pergunta: o ciclo parte do objetivo e volta a ele com a próxima pergunta a responder.</div>
</div>

---

<div class="eyebrow">CENÁRIOS DE TESTE</div>

# O cenário dá o objetivo; nunca o caminho

<div class="two-col">
  <div class="col">
    <span class="label">Enunciado que entrega a rota</span>
    <p>“Clique em ‘Matrícula’, depois em ‘Adicionar disciplina’, selecione Banco de Dados e confirme.”</p>
    <p class="muted">Ele já informa o caminho: não dá para saber se a pessoa encontraria a função sozinha, e a descoberta deixa de ser observável. O participante ainda passa a procurar o botão certo, em vez de perseguir o próprio objetivo.</p>
  </div>
  <div class="col">
    <span class="label">Enunciado que preserva a tarefa</span>
    <p>“Você precisa se matricular em Banco de Dados para o próximo período. Encontre a disciplina, verifique se ela pode ser cursada junto às que já selecionou e conclua, caso o sistema permita.”</p>
    <p class="muted">Contexto, motivação e objetivo, sem prescrever os cliques. O enunciado completo traz:</p>
    <ul class="list tight">
      <li>contexto, perfil relevante e ponto de início;</li>
      <li>objetivo, dados disponíveis e resultado esperado;</li>
      <li>critérios observáveis de sucesso;</li>
      <li>limites de segurança e privacidade.</li>
    </ul>
  </div>
</div>

<div class="notice closer">
  <span class="notice-title">Tarefa, cenário, roteiro</span>
  Tarefa é o que fazer; cenário é a situação que dá sentido à tarefa; o roteiro de avaliação, com instruções e critérios, é do avaliador, não do participante.
</div>

---

<div class="eyebrow">INDICADORES</div>

# O número organiza a evidência; não a encerra

| Indicador | O que revela | Limite da leitura |
|---|---|---|
| Taxa de sucesso | Quem concluiu a tarefa corretamente | Em amostra pequena, sinal para investigar, não estatística |
| Tempo de conclusão | A duração até o objetivo | Lê-se com o perfil e a complexidade em mente |
| Erros | Falhas de seleção, preenchimento, navegação e compreensão | Tentativa e erro também leva ao objetivo |
| Pedidos de ajuda | A frequência de orientação pedida | Junto com as hesitações, revela dependência do caminho |
| Desvios | Caminhos alternativos até o objetivo | Indicam dificuldade de descoberta ou ambiguidade |
| Satisfação percebida | A avaliação declarada após a tarefa | É percepção, não medida de eficácia |

<div class="callout">
  <span class="tag">EXEMPLO DIDÁTICO</span>
  Cinco participantes, quatro concluem a emissão sem ajuda: 80% de sucesso. Com amostra desse tamanho, o número aponta um problema para investigar; não estima a população.
</div>

---

<!-- _class: section-divider -->

<div class="part">PARTE 03 / 04</div>

# Acessibilidade

<div class="topic-list cols-3">
  <div class="topic"><span class="n">01</span><span>Quem a acessibilidade alcança</span></div>
  <div class="topic"><span class="n">02</span><span>Princípios POUR</span></div>
  <div class="topic"><span class="n">03</span><span>Teclado, foco e técnicas combinadas</span></div>
</div>

---

<div class="eyebrow">CONCEITO</div>

# Barreiras afetam mais gente do que se imagina

<div class="stack">
  <div class="two-col">
    <div class="col">
      <span class="label">Quem</span>
      <ul class="list tight">
        <li>Pessoas com limitações visuais, auditivas, motoras, cognitivas e neurológicas;</li>
        <li>condições temporárias: braço imobilizado, ambiente ruidoso, brilho excessivo, conexão limitada;</li>
        <li>idades, experiências e níveis de letramento digital diferentes.</li>
      </ul>
    </div>
    <div class="col">
      <span class="label">Como</span>
      <p>Acessibilidade digital é reduzir barreiras para que pessoas diferentes consigam perceber, compreender, navegar e interagir com conteúdos e funcionalidades.</p>
      <p class="muted">Não existe um modo único de usar tecnologia: necessidades e estratégias variam de pessoa para pessoa, inclusive com a mesma deficiência, e valem para dispositivos, navegadores e tecnologias assistivas variados.</p>
    </div>
  </div>
  <div class="panel c-orange">
    <span class="label">Cuidado com simulações</span>
    <p>Vendar os olhos por alguns minutos não reproduz a experiência de uma pessoa cega: o exercício ilustra uma barreira pontual. Simulação nenhuma substitui conhecimento, tecnologias assistivas ou a participação de pessoas com deficiência.</p>
  </div>
</div>

<div class="panel c-teal closer">
  <span class="label">Escopo</span>
  <p>Acessibilidade não é um recurso extra para poucos: amplia as condições de acesso e beneficia pessoas e contextos diversos, inclusive os temporários.</p>
</div>

---

<div class="eyebrow">PRINCÍPIOS POUR</div>

# Quatro perguntas organizam a checagem inicial

<p class="subtitle">POUR reúne as iniciais de Perceptível, Operável, Compreensível e Robusto, os quatro princípios gerais das WCAG (Web Content Accessibility Guidelines), do W3C.</p>

| Princípio | Pergunta | Verificação inicial |
|---|---|---|
| Perceptível | A informação pode ser percebida? | Contraste, alternativa textual, não depender só de cor |
| Operável | Os controles podem ser operados? | Teclado, foco visível, sem armadilhas, tempo suficiente |
| Compreensível | Dá para entender a informação e o comportamento? | Rótulos, instruções, mensagens de erro que orientam |
| Robusto | A estrutura funciona com agentes e assistivas variados? | HTML semântico, nome e função programaticamente determináveis |

<div class="notice closer">
  <span class="notice-title">Limite</span>
  Os princípios são amplos. Declarar conformidade exige os critérios de sucesso e as técnicas da versão da WCAG adotada; marcar quatro caixas não faz um site acessível.
</div>

---

<div class="eyebrow">EXERCÍCIO · NAVEGAÇÃO POR TECLADO</div>

# Percorrer a tarefa inteira sem tocar no mouse

<div class="stack">
  <div class="two-col">
    <div class="col">
      <span class="label">Procedimento</span>
      <ol class="list ordered tight">
        <li>Abrir o formulário do portal e posicionar o foco no início da página;</li>
        <li>avançar com Tab e voltar com Shift+Tab, observando a ordem dos controles;</li>
        <li>conferir se o elemento focado tem destaque perceptível;</li>
        <li>acionar botões, links, campos e diálogos só com o teclado;</li>
        <li>registrar controles ignorados, foco invisível e pontos em que o foco fica preso.</li>
      </ol>
    </div>
    <div class="col">
      <span class="label">Combinar com</span>
      <ul class="list tight">
        <li>Inspeção manual: estrutura, rótulos, mensagens e fluxos;</li>
        <li>ferramenta automatizada: parte dos problemas, só os detectáveis por regras;</li>
        <li>tecnologia assistiva: leitor de tela, em ambiente e configuração conhecidos;</li>
        <li>participação de pessoas com deficiência, remunerada e respeitosa, em pesquisa estruturada.</li>
      </ul>
    </div>
  </div>
  <div class="panel c-teal">
    <span class="label">Foco e ordem</span>
    <p>O foco indica qual elemento recebe a próxima interação. Ordem incoerente confunde a navegação; foco invisível deixa a pessoa sem saber onde está. Em diálogos, o foco deve ser conduzido e devolvido com coerência.</p>
  </div>
</div>

<div class="callout">
  <span class="tag">PERGUNTA</span>
  A ferramenta automática não apontou nenhum erro. A interface está acessível?
</div>

---

<!-- _class: section-divider -->

<div class="part">PARTE 04 / 04</div>

# Prática: avaliar o portal

<div class="topic-list">
  <div class="topic"><span class="n">01</span><span>Cenário e relatos</span></div>
  <div class="topic"><span class="n">02</span><span>Registro de achados</span></div>
  <div class="topic"><span class="n">03</span><span>IA como apoio</span></div>
  <div class="topic"><span class="n">04</span><span>Autoverificação</span></div>
</div>

---

<div class="eyebrow">EXERCÍCIO · O PORTAL ACADÊMICO</div>

# Cinco relatos, uma avaliação para planejar

<div class="stack">
  <div>
    <span class="label">Relatos da avaliação preliminar</span>
    <ul class="list tight">
      <li>Alguns estudantes não identificam onde consultar pré-requisitos;</li>
      <li>a mensagem de erro informa apenas “Operação inválida”;</li>
      <li>a disciplina selecionada fica marcada só pela cor verde;</li>
      <li>na navegação por teclado, um botão importante não recebe foco visível;</li>
      <li>a busca traz apenas o texto de exemplo, que desaparece ao digitar.</li>
    </ul>
  </div>
  <div class="steps cols-3">
    <div class="step">
      <span class="n">01</span>
      <h3>Definir tarefas</h3>
      <p>duas, com objetivos claros.</p>
    </div>
    <div class="step">
      <span class="n">02</span>
      <h3>Escrever cenários</h3>
      <p>dois, sem indicar a sequência de cliques.</p>
    </div>
    <div class="step">
      <span class="n">03</span>
      <h3>Escolher indicadores</h3>
      <p>um conjunto por tarefa.</p>
    </div>
    <div class="step">
      <span class="n">04</span>
      <h3>Propor verificações</h3>
      <p>três, cada uma ligada a um princípio POUR.</p>
    </div>
    <div class="step">
      <span class="n">05</span>
      <h3>Registrar achados</h3>
      <p>dois, com evidência, impacto e recomendação.</p>
    </div>
    <div class="step">
      <span class="n">06</span>
      <h3>Declarar limites</h3>
      <p>o que falta testar e como a IA pode apoiar, com validação humana.</p>
    </div>
  </div>
</div>

<div class="panel c-orange closer">
  <span class="label">Escopo do exercício</span>
  <p>O portal é fictício e não guarda dados reais. Os achados valem como hipóteses de barreira para investigar, não como auditoria de conformidade.</p>
</div>

---

<div class="eyebrow">PARA ANOTAR</div>

# O achado que outra pessoa reproduz

<div class="stack">
  <div class="equation">achado = evidência + impacto + recomendação</div>
  <div class="two-col">
    <div class="col">
      <span class="label">Campos da ficha</span>
      <ul class="list tight">
        <li>Título objetivo, tela ou componente e tarefa em que ocorreu;</li>
        <li>passos para reproduzir e comportamento observado;</li>
        <li>comportamento esperado;</li>
        <li>evidência: captura, registro ou anotação de sessão;</li>
        <li>impacto para quem usa e severidade sugerida;</li>
        <li>recomendação de correção e limitações, preservando dados pessoais.</li>
      </ul>
    </div>
    <div class="col">
      <span class="label">Como priorizar</span>
      <p>Gravidade, frequência, alcance e efeito sobre a conclusão da tarefa. Um bloqueio que impede a matrícula pesa mais que uma inconsistência visual pequena, embora o contexto sempre importe.</p>
      <p class="muted">A ficha existe para que alguém que não estava na sessão entenda, reproduza e corrija o problema.</p>
    </div>
  </div>
</div>

<div class="callout">
  <span class="tag">REGRA</span>
  Severidade se justifica pelo impacto observado ou plausível, não por gosto pessoal.
</div>

---

<!-- _class: accent-purple -->

<div class="eyebrow">IA COMO APOIO</div>

# A IA ajuda a preparar; a equipe valida

<div class="two-col">
  <div class="col">
    <span class="label">O que pedir à IA</span>
    <ul class="list tight">
      <li>Sugerir tarefas e variações de cenário a partir dos requisitos;</li>
      <li>revisar a clareza de rótulos, mensagens e instruções;</li>
      <li>organizar observações de sessão em categorias;</li>
      <li>levantar hipóteses de barreira para verificar;</li>
      <li>auxiliar na redação de relatórios e recomendações.</li>
    </ul>
  </div>
  <div class="col">
    <span class="label">O que não delegar</span>
    <ul class="list tight">
      <li>Observar participantes e interpretar o uso real;</li>
      <li>representar a diversidade de quem usa o sistema;</li>
      <li>descrever imagens sem conferência: a alternativa pode estar errada ou incompleta;</li>
      <li>declarar conformidade sem evidência suficiente;</li>
      <li>tratar dados de participantes e informações sensíveis sem autorização e avaliação de privacidade.</li>
    </ul>
  </div>
</div>

<div class="panel c-purple closer">
  <span class="label">Divisão de trabalho</span>
  <p>A IA formula perguntas e organiza evidências; observar, interpretar, validar e decidir continuam com a equipe.</p>
</div>

---

<div class="eyebrow">AUTOVERIFICAÇÃO</div>

# O que deveria sair sem consultar o material

<div class="cards cols-2">
  <div class="card">
    <span class="n">01</span>
    <h3>Conceitos</h3>
    <p>UX e usabilidade são a mesma coisa? Interface bonita é interface fácil de usar?</p>
  </div>
  <div class="card">
    <span class="n">02</span>
    <h3>Avaliação</h3>
    <p>Inspeção heurística substitui teste com participantes? Por que o enunciado não diz onde clicar?</p>
  </div>
  <div class="card">
    <span class="n">03</span>
    <h3>Acessibilidade</h3>
    <p>Interessa só a pessoas com deficiência? Por que testar teclado se o mouse funciona?</p>
  </div>
  <div class="card">
    <span class="n">04</span>
    <h3>Conclusões</h3>
    <p>Ferramenta sem erros comprova acessibilidade? Página acessível é automaticamente fácil de usar?</p>
  </div>
</div>

<div class="notice closer">
  <span class="notice-title">Como usar</span>
  Responder sozinho, em uma frase por pergunta. O que não sair marca exatamente o que revisitar no material da unidade.
</div>

---

<!-- _class: title -->

<div class="eyebrow">SÍNTESE</div>

# Funcionalidade existe
# quando alguém consegue usá-la.

<p class="subtitle">Encontrar a função, compreender o caminho, concluir a tarefa e ter condições de chegar até ela.</p>

<div class="byline">
  <strong>Prof. Victor Brayner</strong>
  <span>engenharia de requisitos, testes e qualidade · unidade III</span>
</div>
