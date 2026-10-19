const pages = {
  home: {
    title: 'Kysana — histórias novas para quando e onde quiser',
    description: 'A Kysana cria experiências de leitura mais acessíveis, humanas e possíveis.',
    html: `
      <section class="hero">
        <div class="shell hero-grid">
          <div>
            <p class="eyebrow">Uma nova forma de encontrar histórias</p>
            <h1>Histórias novas para quando e onde quiser.</h1>
            <p class="lede">A Kysana aproxima pessoas de conteúdos que fazem sentido para elas — com cuidado, clareza e acessibilidade desde o começo.</p>
            <div class="actions">
              <a class="button" href="/produtos" data-route>Conheça os produtos <span aria-hidden="true">↗</span></a>
              <a class="button secondary" href="/fale-conosco" data-route>Vamos conversar</a>
            </div>
          </div>
          <div class="hero-art" aria-label="Ilustração da marca Kysana">
            <div class="art-card"><img src="/assets/kysana-logo.png" alt="Logo oficial da Kysana sobre fundo azul quadriculado" /><div class="art-note"><strong>Voz Kysana</strong>Direta, humana e feita para incluir.</div></div>
          </div>
        </div>
      </section>
      <section class="section" aria-labelledby="home-proposta">
        <div class="shell">
          <div class="section-head"><div><p class="eyebrow">Por onde começar</p><h2 id="home-proposta">Acessibilidade que cabe na vida real.</h2></div><p>Não é sobre oferecer menos. É sobre criar caminhos para que mais pessoas possam escolher, acessar e aproveitar.</p></div>
          <div class="cards">
            <article class="card"><div class="card-icon" aria-hidden="true">✦</div><h3>Descobrir</h3><p>Encontre novas histórias com uma experiência simples, leve e feita para acompanhar o seu ritmo.</p><a class="card-link" href="/produtos" data-route>Ver produtos <span aria-hidden="true">→</span></a></article>
            <article class="card"><div class="card-icon" aria-hidden="true">◌</div><h3>Acessar</h3><p>Conteúdos pensados para diferentes formas de ler, ouvir, navegar e se relacionar com uma história.</p><a class="card-link" href="/identidade-visual" data-route>Conhecer a identidade <span aria-hidden="true">→</span></a></article>
            <article class="card"><div class="card-icon" aria-hidden="true">↗</div><h3>Compartilhar</h3><p>Porque uma boa história fica ainda melhor quando pode circular entre pessoas e perspectivas.</p><a class="card-link" href="/fale-conosco" data-route>Fale com a gente <span aria-hidden="true">→</span></a></article>
          </div>
        </div>
      </section>
      <section class="section tinted" aria-labelledby="home-manifesto">
        <div class="shell split"><div><p class="eyebrow">Nosso ponto de partida</p><h2 id="home-manifesto">Acessibilidade é um direito. A experiência pode ser boa também.</h2></div><div class="quote"><p>“Queremos que cada pessoa encontre uma história que faça sentido para ela — quando e onde quiser.”</p><cite>— Manifesto Kysana</cite></div></div>
      </section>
    `
  },
  produtos: {
    title: 'Produtos — Kysana',
    description: 'Conheça as experiências Kysana para encontrar e viver histórias.',
    html: `
      <section class="page-hero"><div class="shell"><p class="eyebrow">Experiências Kysana</p><h1>Produtos que abrem espaço para mais histórias.</h1><p class="lede">Soluções desenhadas com as pessoas, para que cada uma possa acessar conteúdos do seu jeito.</p></div></section>
      <section class="page-content"><div class="shell"><div class="product-list">
        <article class="product"><span class="product-index">01</span><div><h3>Descoberta de histórias</h3><p>Uma experiência para encontrar livros, narrativas e conteúdos com menos ruído e mais contexto. O importante é chegar ao que interessa.</p></div><span class="product-tag">Explorar</span></article>
        <article class="product"><span class="product-index">02</span><div><h3>Leitura no seu ritmo</h3><p>Recursos e escolhas que respeitam diferentes formas de ler, ouvir e acompanhar uma história — sem transformar acesso em obstáculo.</p></div><span class="product-tag">Acessar</span></article>
        <article class="product"><span class="product-index">03</span><div><h3>Espaços para compartilhar</h3><p>Experiências que aproximam pessoas e ampliam conversas em torno das histórias que a gente escolhe levar adiante.</p></div><span class="product-tag">Conectar</span></article>
      </div></div></section>
      <section class="section tinted"><div class="shell split"><div><p class="eyebrow">Para quem cria</p><h2>Também queremos ouvir quem faz.</h2></div><div><p>Se você publica, pesquisa, produz ou desenvolve experiências de leitura, a Kysana quer construir junto. Acessibilidade fica mais forte quando faz parte da conversa desde o início.</p><a class="button" href="/fale-conosco" data-route>Fale sobre uma parceria <span aria-hidden="true">↗</span></a></div></div></section>
    `
  },
  identidade: {
    title: 'Identidade visual — Kysana',
    description: 'A identidade visual da Kysana: azul, acolhimento, leveza e acesso.',
    html: `
      <section class="page-hero"><div class="shell"><p class="eyebrow">Identidade visual</p><h1>Uma marca que deixa a história respirar.</h1><p class="lede">A identidade da Kysana parte de um livro aberto e se expande em formas leves, azuis e acolhedoras.</p></div></section>
      <section class="page-content"><div class="shell"><div class="brand-board"><div class="logo-board"><img src="/assets/kysana-logo.png" alt="Logo oficial da Kysana: livro aberto azul sobre fundo quadriculado" /></div><div class="swatches"><div class="swatch blue"><strong>Azul Kysana</strong>#159ED1</div><div class="swatch ink"><strong>Azul profundo</strong>#17324D</div><div class="swatch coral"><strong>Coral humano</strong>#EF816D</div><div class="swatch paper"><strong>Respiro</strong>#F3FBFD</div></div></div></div></section>
      <section class="section tinted"><div class="shell"><div class="section-head"><div><p class="eyebrow">Como a marca fala</p><h2>Clareza também é cuidado.</h2></div><p>A linguagem visual e verbal trabalha junto para acolher sem infantilizar e informar sem complicar.</p></div><div class="voice-grid"><article class="voice-box"><h3>Preferimos</h3><ul><li>Frases curtas e diretas.</li><li>Convites em vez de ordens.</li><li>“Histórias novas para quando e onde quiser.”</li><li>Contraste, espaço e caminhos claros.</li></ul></article><article class="voice-box"><h3>Deixamos de lado</h3><ul><li>Tons de caridade ou favor.</li><li>Termos que definem pessoas por uma limitação.</li><li>Textos densos e difíceis de percorrer.</li><li>Excesso de informação na mesma tela.</li></ul></article></div></div></section>
    `
  },
  quem: {
    title: 'Quem somos — Kysana',
    description: 'Conheça a Kysana, seu propósito e seus princípios.',
    html: `
      <section class="page-hero"><div class="shell"><p class="eyebrow">Quem somos</p><h1>Uma marca feita para aproximar pessoas de histórias.</h1><p class="lede">A Kysana acredita que acesso, autonomia e encantamento podem estar na mesma experiência.</p></div></section>
      <section class="page-content"><div class="shell about-grid"><div><p class="eyebrow">Nosso propósito</p><h2>Mais caminhos para encontrar o que toca a gente.</h2></div><div><p>A Kysana nasceu para criar experiências mais acessíveis ao redor da leitura e das histórias. Isso começa por escutar pessoas diferentes, reconhecer barreiras e construir soluções que façam sentido na vida real.</p><p>Não partimos da ideia de adaptar o mundo para alguém. Partimos do compromisso de fazer melhor desde o começo, com respeito, autonomia e espaço para cada pessoa.</p></div></div></section>
      <section class="section tinted"><div class="shell split"><div><p class="eyebrow">O que nos guia</p><h2>Princípios para continuar aprendendo.</h2></div><div class="principles"><article class="principle"><div class="principle-number">01</div><div><h3>Escutar antes de criar</h3><p>As pessoas que vivem uma experiência também ajudam a desenhá-la.</p></div></article><article class="principle"><div class="principle-number">02</div><div><h3>Respeitar autonomia</h3><p>Acesso não é favor. É direito, escolha e participação.</p></div></article><article class="principle"><div class="principle-number">03</div><div><h3>Fazer caber mais gente</h3><p>Menos barreiras, mais possibilidades de encontrar uma história.</p></div></article></div></div></section>
    `
  },
  contato: {
    title: 'Fale conosco — Kysana',
    description: 'Entre em contato com a Kysana por email ou WhatsApp.',
    html: `
      <section class="page-hero"><div class="shell"><p class="eyebrow">Fale conosco</p><h1>Tem uma história para contar?</h1><p class="lede">A gente quer ouvir. Escreva por email ou chame no WhatsApp — sem formulário complicado.</p></div></section>
      <section class="page-content"><div class="shell contact-grid"><div><p class="eyebrow">Por onde preferir</p><h2>Vamos conversar com calma.</h2><div class="contact-details"><a class="contact-card" href="mailto:contato@kysana.com.br"><span class="mini-icon" aria-hidden="true">@</span><span><small>Email</small><strong>contato@kysana.com.br</strong></span></a><a class="contact-card" href="https://wa.me/?text=Ol%C3%A1%2C%20Kysana!" target="_blank" rel="noreferrer"><span class="mini-icon" aria-hidden="true">◌</span><span><small>WhatsApp</small><strong>Chamar no WhatsApp <span aria-hidden="true">↗</span></strong></span></a></div></div><form class="form-card" id="contact-form"><div class="form-row"><div class="field"><label for="name">Seu nome</label><input id="name" name="name" type="text" autocomplete="name" placeholder="Como podemos chamar você?" required /></div><div class="field"><label for="email">Seu email</label><input id="email" name="email" type="email" autocomplete="email" placeholder="voce@exemplo.com" required /></div></div><div class="field"><label for="subject">Assunto</label><input id="subject" name="subject" type="text" placeholder="Sobre o que você quer conversar?" required /></div><div class="field"><label for="message">Mensagem</label><textarea id="message" name="message" placeholder="Escreva do seu jeito. A gente lê com atenção." required></textarea></div><p class="form-hint">Ao enviar, seu aplicativo de email será aberto com a mensagem pronta para revisão.</p><button class="button" type="submit">Preparar email <span aria-hidden="true">↗</span></button><p class="success-message" id="form-success" role="status">Tudo pronto. Revise a mensagem no seu aplicativo de email e envie quando quiser.</p></form></div></section>
    `
  }
};

function getPageKey() {
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  if (path === '/') return 'home';
  if (path === '/produtos') return 'produtos';
  if (path === '/identidade-visual') return 'identidade';
  if (path === '/quem-somos') return 'quem';
  if (path === '/fale-conosco') return 'contato';
  return 'home';
}

function render() {
  const key = getPageKey();
  const page = pages[key];
  const main = document.querySelector('#conteudo');
  main.innerHTML = `<div class="page">${page.html}</div>`;
  document.title = page.title;
  document.querySelector('meta[name="description"]').setAttribute('content', page.description);
  document.querySelectorAll('[data-nav]').forEach((link) => {
    link.removeAttribute('aria-current');
    if (link.dataset.nav === key) link.setAttribute('aria-current', 'page');
  });
  document.querySelector('.primary-nav')?.classList.remove('open');
  document.querySelector('.menu-toggle')?.setAttribute('aria-expanded', 'false');
  document.querySelector('#current-year').textContent = new Date().getFullYear();
  bindContactForm();
}

function bindContactForm() {
  const form = document.querySelector('#contact-form');
  if (!form) return;
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent(`[Kysana] ${data.get('subject')}`);
    const body = encodeURIComponent(`Olá, Kysana!\n\nNome: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`);
    window.location.href = `mailto:contato@kysana.com.br?subject=${subject}&body=${body}`;
    document.querySelector('#form-success')?.classList.add('visible');
  });
}

document.addEventListener('click', (event) => {
  const routeLink = event.target.closest('[data-route]');
  if (!routeLink) return;
  const href = routeLink.getAttribute('href');
  if (!href || !href.startsWith('/')) return;
  event.preventDefault();
  window.history.pushState({}, '', href);
  render();
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
});

document.querySelector('.menu-toggle')?.addEventListener('click', () => {
  const nav = document.querySelector('.primary-nav');
  const button = document.querySelector('.menu-toggle');
  const open = nav.classList.toggle('open');
  button.setAttribute('aria-expanded', String(open));
});
window.addEventListener('popstate', render);
render();
