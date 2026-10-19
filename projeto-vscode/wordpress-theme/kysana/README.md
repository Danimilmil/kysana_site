# Tema Kysana para WordPress

Tema institucional responsivo baseado na voz da Kysana: empática, humana, direta, funcional, inclusiva e anticapacitista.

## Instalação

1. Compacte a pasta `kysana` ou use o arquivo `kysana-theme.zip`.
2. No WordPress, acesse **Aparência → Temas → Adicionar novo → Enviar tema**.
3. Ative o tema.
4. Crie as páginas com os slugs `produtos`, `identidade-visual`, `fale-conosco` e `quem-somos`. Se preferir, selecione os templates nomeados pelo editor de páginas.
5. Defina a página inicial como uma página estática e associe o template `front-page.php` automaticamente.
6. Em **Aparência → Menus**, crie o menu principal e associe-o à localização **Navegação principal**.

## Contato

O formulário da página Fale conosco usa `wp_mail()` e envia para o email administrativo configurado em **Configurações → Geral**. O endereço exibido e o link do WhatsApp podem ser alterados nos templates `header.php`, `footer.php` e `page-fale-conosco.php`.
