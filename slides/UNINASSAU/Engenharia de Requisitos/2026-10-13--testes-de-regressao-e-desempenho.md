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

# Testes de regressão
# e desempenho

<p class="subtitle">Duas perguntas para toda versão: o que a mudança afetou e quanto uso o sistema suporta.</p>

<div class="byline">
  <strong>Prof. Victor Brayner</strong>
  <span>ads · 2026.2</span>
</div>

---

<div class="eyebrow">PONTO DE PARTIDA</div>

# Uma regra nova, dois sintomas no portal

<div class="two-col">
  <div class="col">
    <span class="label">REVISÃO</span>
    <p>Até aqui, testar era verificar se uma funcionalidade atende ao comportamento esperado em uma condição isolada. Casos, cenários, cobertura e níveis de teste organizavam essa verificação na Unidade II.</p>
    <p>O software, porém, não fica parado depois de entregue: recebe correções, novas funcionalidades e mudanças de infraestrutura.</p>
    <p class="muted">E o número de usuários varia: o portal pode responder bem para dez estudantes e ficar lento para centenas.</p>
  </div>
  <div class="col">
    <span class="label">O CENÁRIO DE HOJE</span>
    <p>O portal acadêmico recebe uma atualização antes do período de matrícula: matrículas em disciplinas com horários conflitantes passam a ser bloqueadas.</p>
    <ul class="list tight">
      <li>depois da publicação, estudantes deixam de concluir matrículas que antes eram válidas;</li>
      <li>no primeiro dia, com muitos acessos ao mesmo tempo, o portal fica lento.</li>
    </ul>
  </div>
</div>

<div class="notice closer">
  <span class="notice-title">PERGUNTAS GUIA</span>
  Como descobrir se a mudança prejudicou o que já funcionava? O sistema suporta o volume de uso esperado? Que evidências sustentam a liberação da versão?
</div>

---

<!-- _class: section-divider -->

<div class="part">PARTE 01 / 03</div>

# Proteger o que já funcionava

<div class="topic-list cols-3">
  <div class="topic"><span class="n">01</span><span>O alcance de uma mudança</span></div>
  <div class="topic"><span class="n">02</span><span>Reteste e regressão</span></div>
  <div class="topic"><span class="n">03</span><span>Seleção por impacto e risco</span></div>
</div>

---

<!-- _class: accent-orange -->

<div class="eyebrow">ANÁLISE DE IMPACTO</div>

# Uma mudança local alcança comportamentos distantes

<div class="stack">
  <div class="media">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 320" role="img" aria-label="Uma alteração que bloqueia conflito de horário entra pela regra de matrícula e alcança matrícula, consulta de vagas, cancelamento, comprovante e histórico."><title>Alcance de uma mudança no portal acadêmico</title><desc>Uma alteração que bloqueia conflito de horário entra pela regra de matrícula e alcança matrícula, consulta de vagas, cancelamento, comprovante e histórico.</desc><rect x="20" y="95" width="220" height="70" rx="6" fill="#f4f5f7" stroke="#d9481f" stroke-width="2" /><text x="130" y="122" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Alteração</text><text x="130" y="146" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">bloquear conflito de horário</text><line x1="242" y1="130" x2="367" y2="130" stroke="#101f38" stroke-width="2"  /><polygon points="376,130 367,134.95 367,125.05" fill="#101f38" /><rect x="380" y="95" width="220" height="70" rx="6" fill="#f4f5f7" stroke="#101f38" stroke-width="2" /><text x="490" y="122" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Regra de matrícula</text><text x="490" y="146" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">o ponto da mudança</text><rect x="720" y="18" width="220" height="42" rx="6" fill="#f4f5f7" stroke="#1e88e5" stroke-width="2" /><text x="830" y="39" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Matrícula</text><rect x="720" y="78" width="220" height="42" rx="6" fill="#f4f5f7" stroke="#1e88e5" stroke-width="2" /><text x="830" y="99" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Consulta de vagas</text><rect x="720" y="138" width="220" height="42" rx="6" fill="#f4f5f7" stroke="#1e88e5" stroke-width="2" /><text x="830" y="159" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Cancelamento</text><rect x="720" y="198" width="220" height="42" rx="6" fill="#f4f5f7" stroke="#1e88e5" stroke-width="2" /><text x="830" y="219" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Comprovante</text><rect x="720" y="258" width="220" height="42" rx="6" fill="#f4f5f7" stroke="#1e88e5" stroke-width="2" /><text x="830" y="279" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Histórico</text><line x1="602" y1="130" x2="708.9661652011017" y2="44.61472777806792" stroke="#1e88e5" stroke-width="2"  /><polygon points="716,39 712.054265479039,48.483336917461976 705.8780649231644,40.74611863867387" fill="#1e88e5" /><line x1="602" y1="130" x2="707.3153699793436" y2="101.3616099178978" stroke="#1e88e5" stroke-width="2"  /><polygon points="716,99 708.6142554341874,106.13815642925883 706.0164845244998,96.58506340653676" fill="#1e88e5" /><line x1="602" y1="130" x2="707.2777929810874" y2="156.78119295132925" stroke="#1e88e5" stroke-width="2"  /><polygon points="716,159 706.0574491043185,161.5784068117312 708.4981368578563,151.98397909092728" fill="#1e88e5" /><line x1="602" y1="130" x2="708.9058941769321" y2="213.46161913813123" stroke="#1e88e5" stroke-width="2"  /><polygon points="716,219 705.8597847029042,217.36337734081857 711.9520036509599,209.55986093544388" fill="#1e88e5" /><line x1="602" y1="130" x2="710.5311685737191" y2="271.85214138143994" stroke="#1e88e5" stroke-width="2"  /><polygon points="716,279 706.5998463335111,274.8599986658944 714.4624908139272,268.84428409698546" fill="#1e88e5" /></svg>
    <div class="caption">Cada seta parte da validação nova e chega a um comportamento que compartilha dados ou regras com ela; a existência da relação é hipótese a verificar.</div>
  </div>
  <div class="flow outline">
    <div class="node"><h3>Análise de impacto</h3></div>
    <div class="node"><h3>Seleção de testes</h3></div>
    <div class="node"><h3>Execução</h3></div>
    <div class="node"><h3>Evidências</h3></div>
  </div>
</div>

---

<div class="eyebrow">CONCEITO</div>

# Regressão protege o comportamento que já existia

<div class="two-col">
  <div class="col">
    <span class="label">O QUE É</span>
    <p><strong>Teste de regressão</strong> é executar testes escolhidos para verificar se uma modificação introduziu defeitos em comportamentos que antes estavam corretos.</p>
    <p>A regressão é uma finalidade de teste, não um nível: ela se aplica ao conjunto escolhido em cada entrega, em qualquer nível.</p>
    <p>Uma versão anterior aprovada não garante que a nova preserve os mesmos comportamentos. A confiança precisa ser renovada a cada entrega, com evidência.</p>
    <p class="muted">O defeito pode ficar longe do trecho editado, porque componentes compartilham dados, regras, serviços e dependências; o usuário sente o efeito em outra tela.</p>
  </div>
  <div class="col">
    <span class="label">O QUE CONTA COMO MUDANÇA</span>
    <ul class="list tight">
      <li>correção de defeito ou inclusão de funcionalidade nova no fluxo de matrícula;</li>
      <li>alteração de regra de negócio, como a validação de conflito de horário;</li>
      <li>atualização de biblioteca, framework, banco de dados ou infraestrutura;</li>
      <li>refatoração interna ou mudança de configuração do ambiente;</li>
      <li>ajuste em integração com serviço externo, como o financeiro.</li>
    </ul>
  </div>
</div>

<div class="callout">
  <span class="tag">PERGUNTA</span>
  A equipe corrigiu o cálculo de vagas e reexecutou apenas o caso que falhava. Isso é regressão?
</div>

---

<div class="eyebrow">DISTINÇÃO</div>

# Reteste confirma a correção; regressão procura o resto

<div class="media">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 290" role="img" aria-label="Reteste: do defeito conhecido, pela correção e reexecução do caso que falhou, até a confirmação. Regressão: da mudança, pela análise de impacto e testes relacionados, até a detecção de efeitos colaterais."><title>Reteste e regressão, dois percursos</title><desc>Reteste: do defeito conhecido, pela correção e reexecução do caso que falhou, até a confirmação. Regressão: da mudança, pela análise de impacto e testes relacionados, até a detecção de efeitos colaterais.</desc><text x="46" y="28" font-family="'Roboto Mono', Consolas, monospace" font-size="13" font-weight="700" fill="#0e9f6e" text-anchor="start" dominant-baseline="middle" letter-spacing="0.6">RETESTE · CONFIRMAÇÃO DA CORREÇÃO</text><rect x="46" y="48" width="190" height="68" rx="6" fill="#f4f5f7" stroke="#0e9f6e" stroke-width="2" /><text x="141" y="74" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Defeito conhecido</text><text x="141" y="98" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">o caso que falhou</text><line x1="238" y1="82" x2="259" y2="82" stroke="#0e9f6e" stroke-width="2"  /><polygon points="268,82 259,86.95 259,77.05" fill="#0e9f6e" /><rect x="272" y="48" width="190" height="68" rx="6" fill="#f4f5f7" stroke="#0e9f6e" stroke-width="2" /><text x="367" y="74" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Correção</text><text x="367" y="98" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">do defeito original</text><line x1="464" y1="82" x2="485" y2="82" stroke="#0e9f6e" stroke-width="2"  /><polygon points="494,82 485,86.95 485,77.05" fill="#0e9f6e" /><rect x="498" y="48" width="190" height="68" rx="6" fill="#f4f5f7" stroke="#0e9f6e" stroke-width="2" /><text x="593" y="74" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Reexecução</text><text x="593" y="98" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">do mesmo caso</text><line x1="690" y1="82" x2="711" y2="82" stroke="#0e9f6e" stroke-width="2"  /><polygon points="720,82 711,86.95 711,77.05" fill="#0e9f6e" /><rect x="724" y="48" width="190" height="68" rx="6" fill="#f4f5f7" stroke="#0e9f6e" stroke-width="2" /><text x="819" y="74" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Confirmação</text><text x="819" y="98" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">a falha não ocorre mais</text><text x="46" y="172" font-family="'Roboto Mono', Consolas, monospace" font-size="13" font-weight="700" fill="#d9481f" text-anchor="start" dominant-baseline="middle" letter-spacing="0.6">REGRESSÃO · PROTEÇÃO DO QUE FUNCIONAVA</text><rect x="46" y="192" width="190" height="68" rx="6" fill="#f4f5f7" stroke="#d9481f" stroke-width="2" /><text x="141" y="218" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Mudança</text><text x="141" y="242" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">o que foi alterado</text><line x1="238" y1="226" x2="259" y2="226" stroke="#d9481f" stroke-width="2"  /><polygon points="268,226 259,230.95 259,221.05" fill="#d9481f" /><rect x="272" y="192" width="190" height="68" rx="6" fill="#f4f5f7" stroke="#d9481f" stroke-width="2" /><text x="367" y="218" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Análise de impacto</text><text x="367" y="242" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">quem depende disso</text><line x1="464" y1="226" x2="485" y2="226" stroke="#d9481f" stroke-width="2"  /><polygon points="494,226 485,230.95 485,221.05" fill="#d9481f" /><rect x="498" y="192" width="190" height="68" rx="6" fill="#f4f5f7" stroke="#d9481f" stroke-width="2" /><text x="593" y="218" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Testes relacionados</text><text x="593" y="242" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">comportamentos ligados</text><line x1="690" y1="226" x2="711" y2="226" stroke="#d9481f" stroke-width="2"  /><polygon points="720,226 711,230.95 711,221.05" fill="#d9481f" /><rect x="724" y="192" width="190" height="68" rx="6" fill="#f4f5f7" stroke="#d9481f" stroke-width="2" /><text x="819" y="218" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Efeitos colaterais</text><text x="819" y="242" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">algo parou de funcionar?</text></svg>
  <div class="caption">As duas sequências cabem na mesma entrega: confirmar que a falha foi corrigida e só depois procurar o que a mudança afetou.</div>
</div>

---

<!-- _class: accent-purple -->

<div class="eyebrow">SELEÇÃO DE TESTES</div>

# Escolher o que reexecutar é decisão de risco

<div class="two-col">
  <div class="col">
    <span class="label">CRITÉRIOS DE SELEÇÃO</span>
    <ul class="list tight">
      <li>impacto direto: os componentes e as regras modificados pela entrega;</li>
      <li>dependências: quem consome os dados ou os serviços que a área alterada fornece;</li>
      <li>risco de negócio: fluxos acadêmicos e financeiros, onde uma falha custa mais;</li>
      <li>histórico e frequência: áreas que já falharam antes e jornadas mais usadas;</li>
      <li>custo de execução: tempo e recursos disponíveis, sem abrir mão do crítico.</li>
    </ul>
  </div>
  <div class="col">
    <span class="label">CAMADAS DA SUÍTE</span>
    <ul class="list tight">
      <li>essencial: conjunto pequeno, focado no alto risco, executado a cada mudança relevante;</li>
      <li>ampliada: conjunto maior, antes de releases ou depois de mudanças de impacto amplo;</li>
      <li>completa: suíte inteira, quando a criticidade ou o processo do produto justificam.</li>
    </ul>
    <p class="muted">A organização em camadas é uma estratégia possível, não uma norma de mercado.</p>
  </div>
</div>

<div class="notice">
  <span class="notice-title">AUTOMAÇÃO</span>
  A repetição constante faz da regressão candidata natural à automação, na integração contínua ou antes da publicação. Um teste automatizado pode estar incorreto ou desatualizado, e testes frágeis falham por mudanças irrelevantes: a suíte automatizada pede manutenção como qualquer código.
</div>

<div class="callout">
  <span class="tag">NA PRÁTICA</span>
  A seleção começa pela análise de impacto; reexecutar tudo é uma escolha possível, não o ponto de partida.
</div>

---

<div class="eyebrow">MATRIZ DE IMPACTO</div>

# A matriz de impacto registra a hipótese de risco

| Mudança no portal | Áreas potencialmente afetadas | Testes a considerar |
|---|---|---|
| Validação de conflito de horário | Matrícula, consulta de horários, cancelamento | Matricular em horários distintos; bloquear o conflito; cancelar e matricular novamente |
| Alteração no cálculo de vagas | Matrícula, lista de espera, painel administrativo | Última vaga; tentativas simultâneas; cancelamento que libera vaga |
| Integração financeira atualizada | Confirmação, situação financeira, comprovante | Matrícula aprovada; falha na integração; consistência do status |
| Formato do histórico alterado | Consulta de histórico, pré-requisitos, relatórios | Histórico antigo e novo; validar pré-requisitos; exportar relatório |

<div class="notice closer">
  <span class="notice-title">RESSALVA</span>
  A matriz organiza hipóteses; não substitui a análise técnica nem garante que toda dependência foi encontrada.
</div>

---

<!-- _class: section-divider -->

<div class="part">PARTE 02 / 03</div>

# O sistema sob a demanda esperada

<div class="topic-list cols-3">
  <div class="topic"><span class="n">01</span><span>Desempenho com contexto</span></div>
  <div class="topic"><span class="n">02</span><span>Métricas e percentis</span></div>
  <div class="topic"><span class="n">03</span><span>Leitura contra critérios</span></div>
</div>

---

<div class="eyebrow">DESEMPENHO</div>

# Desempenho é propriedade observada em um contexto

<div class="stack">
  <div class="two-col">
    <div class="col">
      <span class="label">O QUE FALTA NA FRASE</span>
      <p>Dizer que o portal está rápido não sustenta uma decisão: o adjetivo descreve uma impressão, e impressão não se compara entre versões.</p>
      <p>Desempenho é propriedade observada em um contexto. O número vale para o cenário em que foi medido, com aqueles dados e aquele ambiente.</p>
      <p class="muted">O mesmo portal pode ser rápido na consulta de disciplinas e lento na confirmação de matrícula.</p>
    </div>
    <div class="col">
      <span class="label">DO ADJETIVO AO CRITÉRIO</span>
      <p><strong>Vago:</strong> "o sistema deve ser rápido no período de matrícula".</p>
      <p><strong>Verificável:</strong> "com até 250 sessões simultâneas e dados representativos, 95% das consultas de disciplinas respondem em até 2 segundos, com erro abaixo de 1%".</p>
      <p class="muted">Números hipotéticos para a leitura; critérios reais são negociados com o produto.</p>
    </div>
  </div>
  <div class="flow outline">
    <div class="node"><h3>Operação</h3><p>qual ação é medida</p></div>
    <div class="node"><h3>Carga</h3><p>quantos ativos ao mesmo tempo</p></div>
    <div class="node"><h3>Duração</h3><p>janela de observação</p></div>
    <div class="node"><h3>Ambiente</h3><p>onde o teste roda</p></div>
    <div class="node"><h3>Critério</h3><p>limite de aceitação</p></div>
  </div>
</div>

<div class="callout">
  <span class="tag">PERGUNTA</span>
  "O sistema deve suportar muitos usuários" é um requisito testável?
</div>

---

<!-- _class: accent-teal -->

<div class="eyebrow">MÉTRICAS</div>

# Cinco medidas para começar a conversa

<div class="cards cols-3">
  <div class="card">
    <h3>Tempo de resposta</h3>
    <p>Do envio da solicitação à resposta observável pelo cliente. Defina onde a medição começa e termina.</p>
  </div>
  <div class="card">
    <h3>Throughput</h3>
    <p>Trabalho concluído por unidade de tempo, em requisições por segundo (RPS) ou transações por segundo (TPS).</p>
  </div>
  <div class="card">
    <h3>Concorrência</h3>
    <p>Usuários, sessões ou operações ativas ao mesmo tempo. Base cadastrada não é simultaneidade.</p>
  </div>
  <div class="card">
    <h3>Taxa de erro</h3>
    <p>Operações que falharam sobre o total executado. O que conta como erro precisa estar definido antes.</p>
  </div>
  <div class="card">
    <h3>Uso de recursos</h3>
    <p>CPU, memória, disco, rede e conexões ajudam a localizar gargalos.</p>
  </div>
  <div class="card">
    <h3>Latência</h3>
    <p>Tempo de comunicação ou processamento, conforme o ponto de medição. Nesta altura do curso, anda próxima do tempo de resposta.</p>
  </div>
</div>

<div class="notice closer">
  <span class="notice-title">PARA ANOTAR</span>
  Throughput alto não é velocidade percebida: leia sempre junto com tempo de resposta, erros e recursos.
</div>

---

<!-- _class: accent-orange -->

<div class="eyebrow">DISTRIBUIÇÃO</div>

# A média esconde a parte lenta das respostas

<div class="two-col">
  <div class="col">
    <span class="label">COMO LER UM PERCENTIL</span>
    <ul class="list tight">
      <li>p50, a mediana: metade das respostas terminou em até esse tempo, metade levou mais;</li>
      <li>p95: 95% terminaram em até esse tempo; as 5% mais lentas ficaram acima dele;</li>
      <li>p99: 99% em até esse tempo; a última fatia da cauda fica acima do valor.</li>
    </ul>
    <p class="muted">Um p95 de 2 segundos diz que 19 de cada 20 respostas terminaram dentro do limite; a outra é um usuário real, esperando a resposta.</p>
  </div>
  <div class="col">
    <span class="label">POR QUE A MÉDIA NÃO BASTA</span>
    <p>Um conjunto de respostas pode ter média baixa e ainda assim conter uma parcela de usuários esperando muito.</p>
    <p>Em 400 consultas, as 20 mais lentas são o grupo que o p95 deixa de descrever; a média dilui essas pessoas em um número só.</p>
    <p class="muted">O percentil escolhido define quantos usuários a versão aceita deixar na cauda.</p>
  </div>
</div>

<div class="panel c-orange closer">
  <span class="label">LIMITE DA LEITURA</span>
  <p>p95 atendido não significa experiência boa para todos: 5% das observações ficaram acima do valor.</p>
</div>

---

<div class="eyebrow">EXEMPLO</div>

# Os números só respondem contra critérios

<p class="subtitle">Hipótese didática: 60 segundos de execução, 3.000 requisições concluídas, 60 com falha. Valores fictícios, para exercitar a leitura.</p>

<div class="stack">
  <div class="stats">
    <div class="stat">
      <span class="value">50</span>
      <span class="caption">requisições por segundo (3.000 ÷ 60)</span>
    </div>
    <div class="stat">
      <span class="value">2%</span>
      <span class="caption">taxa de erro (60 de 3.000 falharam)</span>
    </div>
    <div class="stat">
      <span class="value">2,3</span>
      <span class="caption">segundos no p95 observado</span>
    </div>
  </div>
  <div class="two-col">
    <div class="col">
      <span class="label">CONTRA OS CRITÉRIOS ILUSTRATIVOS</span>
      <table>
        <thead>
          <tr><th>Critério</th><th>Observado</th></tr>
        </thead>
        <tbody>
          <tr><td>p95 até 2 s</td><td>2,3 s</td></tr>
          <tr><td>erro abaixo de 1%</td><td>2%</td></tr>
        </tbody>
      </table>
      <p class="muted">Os dois limites foram ultrapassados; a versão não está pronta sem investigação e nova avaliação.</p>
    </div>
    <div class="col">
      <span class="label">O QUE PERGUNTAR A SEGUIR</span>
      <ul class="list tight">
        <li>Qual era o perfil da carga e quantas sessões estavam ativas?</li>
        <li>O ambiente representa a produção?</li>
        <li>Quais operações compõem as 3.000 requisições?</li>
      </ul>
    </div>
  </div>
</div>

---

<!-- _class: section-divider -->

<div class="part">PARTE 03 / 03</div>

# Carga, estresse e escalabilidade

<div class="topic-list cols-3">
  <div class="topic"><span class="n">01</span><span>Carga: a demanda prevista</span></div>
  <div class="topic"><span class="n">02</span><span>Estresse: os limites</span></div>
  <div class="topic"><span class="n">03</span><span>Escalabilidade: o crescimento</span></div>
</div>

---

<div class="eyebrow">COMPARAÇÃO</div>

# Três perguntas diferentes para métricas parecidas

| Tipo | Condição investigada | A pergunta principal |
|---|---|---|
| Carga | Demanda esperada ou planejada | O sistema suporta o uso previsto? |
| Estresse | Demanda acima da condição normal | Onde e como o sistema começa a degradar ou falhar? |
| Escalabilidade | Crescimento da demanda e/ou dos recursos | A capacidade cresce de forma adequada? |

<ul class="list arrow">
  <li>Carga: o pico previsto de matrícula, com até 250 sessões simultâneas.</li>
  <li>Estresse: o comportamento do portal acima desse pico.</li>
  <li>Escalabilidade: mais instâncias para atender volume maior mantendo os critérios.</li>
</ul>

<div class="panel c-teal closer">
  <span class="label">LEITURA</span>
  <p>Os três testes podem compartilhar cenário e métricas; o que muda é a pergunta e a condição de execução.</p>
</div>

---

<div class="eyebrow">O ESQUEMA</div>

# No eixo da demanda, cada teste mira uma faixa

<div class="media">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 360" role="img" aria-label="Carga avalia a faixa de uso previsto, estresse avalia além do previsto e escalabilidade compara configurações de recursos com o mesmo perfil de uso."><title>Carga, estresse e escalabilidade</title><desc>Carga avalia a faixa de uso previsto, estresse avalia além do previsto e escalabilidade compara configurações de recursos com o mesmo perfil de uso.</desc><line x1="80" y1="320" x2="80" y2="53" stroke="#5b6472" stroke-width="2"  /><polygon points="80,44 84.95,53 75.05,53" fill="#5b6472" /><line x1="80" y1="320" x2="547" y2="320" stroke="#5b6472" stroke-width="2"  /><polygon points="556,320 547,324.95 547,315.05" fill="#5b6472" /><text x="60" y="24" font-family="'Roboto Mono', Consolas, monospace" font-size="12" font-weight="700" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0.6">RESPOSTA DO SISTEMA</text><text x="320" y="348" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">demanda (volume de trabalho)</text><rect x="110" y="50" width="160" height="270" rx="4" fill="#f4f5f7" stroke="#1e88e5" stroke-width="2" /><text x="190" y="74" font-family="'Roboto Mono', Consolas, monospace" font-size="13" font-weight="700" fill="#1e88e5" text-anchor="middle" dominant-baseline="middle" letter-spacing="0.6">CARGA</text><text x="190" y="94" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">uso previsto</text><text x="190" y="302" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">atende aos critérios?</text><rect x="310" y="50" width="250" height="270" rx="4" fill="#f4f5f7" stroke="#d9481f" stroke-width="2" /><text x="435" y="74" font-family="'Roboto Mono', Consolas, monospace" font-size="13" font-weight="700" fill="#d9481f" text-anchor="middle" dominant-baseline="middle" letter-spacing="0.6">ESTRESSE</text><text x="435" y="94" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">além do previsto</text><text x="435" y="302" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">onde degrada e falha?</text><line x1="290" y1="50" x2="290" y2="320" stroke="#5b6472" stroke-width="1.5" stroke-dasharray="6 5" /><text x="290" y="40" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">limite previsto</text><rect x="620" y="50" width="330" height="270" rx="8" fill="#ffffff" stroke="#e3e6eb" stroke-width="2" /><text x="650" y="78" font-family="'Roboto Mono', Consolas, monospace" font-size="13" font-weight="700" fill="#7c3aed" text-anchor="start" dominant-baseline="middle" letter-spacing="0.6">ESCALABILIDADE</text><rect x="650" y="106" width="270" height="56" rx="6" fill="#f4f5f7" stroke="#7c3aed" stroke-width="2" /><text x="785" y="126" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Configuração A</text><text x="785" y="150" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">uma instância de aplicação</text><rect x="650" y="182" width="270" height="56" rx="6" fill="#f4f5f7" stroke="#7c3aed" stroke-width="2" /><text x="785" y="202" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Configuração B</text><text x="785" y="226" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">duas instâncias + balanceador</text><text x="785" y="266" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">a capacidade acompanha o crescimento?</text><text x="785" y="286" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">o experimento declara o que cresceu:</text><text x="785" y="304" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">demanda, recursos ou os dois</text></svg>
  <div class="caption">Representação conceitual: a curva real depende da arquitetura e do experimento. Sem declarar o que foi ampliado, a comparação fica ambígua.</div>
</div>

---

<!-- _class: accent-purple -->

<div class="eyebrow">REGRESSÃO E DESEMPENHO</div>

# A regra funciona e, ainda assim, a versão piora

<div class="two-col">
  <div class="col">
    <span class="label">O EXEMPLO</span>
    <p>A confirmação de matrícula passou a consultar pré-requisitos em um serviço separado. A regra nova está correta.</p>
    <p>A consulta extra, porém, pode multiplicar acessos ao banco e elevar o tempo de resposta de toda a jornada.</p>
  </div>
  <div class="col">
    <span class="label">PERGUNTAS GUIA</span>
    <ul class="list tight">
      <li>A nova regra funciona corretamente?</li>
      <li>As regras anteriores continuam funcionando?</li>
      <li>O tempo de resposta segue dentro dos critérios?</li>
      <li>A carga esperada continua suportada?</li>
      <li>O consumo de recursos ou a taxa de erro aumentaram?</li>
    </ul>
  </div>
</div>

<div class="quote closer">
  <div class="text">"Regressão funcional e teste de desempenho respondem a perguntas diferentes sobre a mesma mudança."</div>
  <div class="author">PARA ANOTAR</div>
</div>

---

<div class="eyebrow">DECISÃO</div>

# Liberar é uma decisão contra critérios

<div class="media">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 330" role="img" aria-label="A mudança leva à análise de impacto, à regressão funcional, à avaliação de desempenho e à comparação com critérios; a decisão pode ser liberar, corrigir e testar de novo ou investigar."><title>Da mudança à decisão de liberação</title><desc>A mudança leva à análise de impacto, à regressão funcional, à avaliação de desempenho e à comparação com critérios; a decisão pode ser liberar, corrigir e testar de novo ou investigar.</desc><rect x="125" y="30" width="210" height="64" rx="6" fill="#f4f5f7" stroke="#1e88e5" stroke-width="2" /><text x="230" y="54" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Mudança</text><text x="230" y="78" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">o que entrou na versão</text><line x1="337" y1="62" x2="362" y2="62" stroke="#1e88e5" stroke-width="2"  /><polygon points="371,62 362,66.95 362,57.05" fill="#1e88e5" /><rect x="375" y="30" width="210" height="64" rx="6" fill="#f4f5f7" stroke="#1e88e5" stroke-width="2" /><text x="480" y="54" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Análise de impacto</text><text x="480" y="78" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">áreas ligadas à mudança</text><line x1="587" y1="62" x2="612" y2="62" stroke="#1e88e5" stroke-width="2"  /><polygon points="621,62 612,66.95 612,57.05" fill="#1e88e5" /><rect x="625" y="30" width="210" height="64" rx="6" fill="#f4f5f7" stroke="#1e88e5" stroke-width="2" /><text x="730" y="54" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Regressão funcional</text><text x="730" y="78" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">o que já funcionava</text><line x1="730" y1="94" x2="730" y2="130" stroke="#1e88e5" stroke-width="2"  /><line x1="730" y1="130" x2="230" y2="130" stroke="#1e88e5" stroke-width="2"  /><line x1="230" y1="130" x2="230" y2="157" stroke="#1e88e5" stroke-width="2"  /><polygon points="230,166 225.05,157 234.95,157" fill="#1e88e5" /><rect x="125" y="170" width="210" height="64" rx="6" fill="#f4f5f7" stroke="#1e88e5" stroke-width="2" /><text x="230" y="194" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Desempenho</text><text x="230" y="218" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">sob a carga prevista</text><line x1="337" y1="202" x2="362" y2="202" stroke="#1e88e5" stroke-width="2"  /><polygon points="371,202 362,206.95 362,197.05" fill="#1e88e5" /><rect x="375" y="170" width="210" height="64" rx="6" fill="#f4f5f7" stroke="#1e88e5" stroke-width="2" /><text x="480" y="194" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Critérios</text><text x="480" y="218" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">comparar o observado</text><line x1="587" y1="202" x2="612" y2="202" stroke="#1e88e5" stroke-width="2"  /><polygon points="621,202 612,206.95 612,197.05" fill="#1e88e5" /><rect x="625" y="170" width="210" height="64" rx="6" fill="#f4f5f7" stroke="#7c3aed" stroke-width="2" /><text x="730" y="194" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Decisão</text><text x="730" y="218" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">com evidências</text><line x1="730" y1="234" x2="168.9875604639926" y2="263.5269705018951" stroke="#5b6472" stroke-width="2"  /><polygon points="160,264 168.72739424003493,258.5838122466992 169.24772668795026,268.470128757091" fill="#5b6472" /><line x1="730" y1="234" x2="488.9358915463823" y2="262.9276930144341" stroke="#5b6472" stroke-width="2"  /><polygon points="480,264 488.3461227043211,258.01295266392384 489.52566038844355,267.8424333649444" fill="#5b6472" /><line x1="730" y1="234" x2="791.7276947298375" y2="260.4547263127875" stroke="#5b6472" stroke-width="2"  /><polygon points="800,264 789.7777942018706,265.0044942113769 793.6775952578043,255.90495841419812" fill="#5b6472" /><text x="20" y="252" font-family="'Roboto Mono', Consolas, monospace" font-size="12" font-weight="700" fill="#5b6472" text-anchor="start" dominant-baseline="middle" letter-spacing="0.6">SAÍDAS POSSÍVEIS</text><rect x="20" y="268" width="280" height="48" rx="6" fill="#f4f5f7" stroke="#0e9f6e" stroke-width="2" /><text x="160" y="284" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Liberar</text><text x="160" y="308" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">critérios atendidos</text><rect x="340" y="268" width="280" height="48" rx="6" fill="#f4f5f7" stroke="#d9481f" stroke-width="2" /><text x="480" y="284" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Corrigir e testar de novo</text><text x="480" y="308" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">defeito ou regressão encontrados</text><rect x="660" y="268" width="280" height="48" rx="6" fill="#f4f5f7" stroke="#101f38" stroke-width="2" /><text x="800" y="284" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="17" font-weight="700" fill="#101f38" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">Investigar</text><text x="800" y="308" font-family="'Carlito', 'Calibri', Arial, sans-serif" font-size="12.5" font-weight="400" fill="#5b6472" text-anchor="middle" dominant-baseline="middle" letter-spacing="0">evidência ainda insuficiente</text></svg>
  <div class="caption">Critérios definidos antes da execução e riscos assumidos com clareza: sem isso, a decisão vira opinião.</div>
</div>

---

<div class="eyebrow">EXERCÍCIO · ESTRATÉGIA DA VERSÃO</div>

# Planejar a avaliação da próxima versão

<p class="subtitle">O portal receberá duas mudanças antes da matrícula; os valores do cenário são fictícios.</p>

<div class="two-col">
  <div class="col">
    <span class="label">O CENÁRIO</span>
    <ul class="list tight">
      <li>nova regra: matrículas com conflito de horário são bloqueadas;</li>
      <li>consulta de pré-requisitos passa a usar um serviço separado;</li>
      <li>pico previsto: até 250 sessões simultâneas;</li>
      <li>teste preliminar: 3.000 requisições em 60 s, 60 falhas, p95 de 2,3 s;</li>
      <li>critérios ilustrativos: p95 até 2 s e erro abaixo de 1%.</li>
    </ul>
  </div>
  <div class="col">
    <span class="label">SUA TAREFA</span>
    <ol class="list ordered">
      <li>identificar quatro funcionalidades para a análise de impacto das duas mudanças;</li>
      <li>propor três casos de teste de regressão, com resultado esperado;</li>
      <li>calcular throughput e taxa de erro do teste preliminar;</li>
      <li>classificar a execução como carga, estresse ou escalabilidade, dizendo o que falta saber;</li>
      <li>propor uma pergunta adicional antes de liberar a versão.</li>
    </ol>
  </div>
</div>

<div class="notice closer">
  <span class="notice-title">COMECE POR</span>
  Listar o que muda e quem depende disso; a classificação do teste vem depois da finalidade da execução.
</div>

---

<!-- _class: accent-purple -->

<div class="eyebrow">AUTOVERIFICAÇÃO</div>

# O que você explica sem consultar as anotações

<div class="cards cols-3">
  <div class="card">
    <span class="n">01</span>
    <h3>Reteste ou regressão</h3>
    <p>Uma equipe corrigiu a regra de cancelamento e reexecutou o caso que falhava. O que falta fazer para chamar de regressão?</p>
  </div>
  <div class="card">
    <span class="n">02</span>
    <h3>A pergunta da carga</h3>
    <p>A instituição espera 250 sessões simultâneas no pico. Que pergunta o teste de carga responde nesse cenário?</p>
  </div>
  <div class="card">
    <span class="n">03</span>
    <h3>Duas métricas juntas</h3>
    <p>Por que throughput e tempo de resposta precisam ser lidos um com o outro?</p>
  </div>
</div>

<div class="panel c-purple closer">
  <span class="label">COMO USAR</span>
  <p>Responder por escrito, sem consultar o material; o que não sair marca o tópico para revisar.</p>
</div>

---

<!-- _class: title -->

<div class="eyebrow">SÍNTESE</div>

# Proteger o que funcionava,
# medir sob a demanda esperada.

<p class="subtitle">A regressão preserva comportamentos durante a evolução; o desempenho se avalia em condições definidas, com métricas e critérios.</p>

<div class="byline">
  <strong>Prof. Victor Brayner</strong>
  <span>engenharia de requisitos, testes e qualidade · unidade III</span>
</div>
