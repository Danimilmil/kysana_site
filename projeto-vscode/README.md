# Kysana

Site institucional da Kysana, criado a partir do PDF de definição de voz e da logo oficial enviada.

## O que foi entregue

O projeto inclui um preview responsivo com Home, Produtos, Identidade visual, Fale conosco e Quem somos. A experiência usa linguagem empática, humana, direta, funcional, inclusiva e anticapacitista; inclui skip link, foco visível, navegação por teclado, alt text e layout adaptado para celular.

Também existe um tema WordPress instalável em `kysana-theme.zip` e em `wordpress-theme/kysana/`. O formulário do tema usa `wp_mail()` e envia mensagens para o email administrativo configurado no WordPress.

## Preview local

```bash
npm start
```

O servidor escuta na porta 3000.

## Instalação no WordPress

No painel WordPress, abra **Aparência → Temas → Adicionar novo → Enviar tema** e escolha `kysana-theme.zip`. Depois crie as páginas `Produtos`, `Identidade visual`, `Fale conosco` e `Quem somos`, associe os templates nomeados quando necessário e configure o menu principal. Antes de publicar, troque `contato@kysana.com.br` e o link do WhatsApp pelos canais oficiais da marca.
