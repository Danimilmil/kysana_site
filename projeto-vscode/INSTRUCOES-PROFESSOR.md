# Entrega Kysana — VS Code e WordPress

Este pacote contém o mesmo projeto organizado para funcionar nos dois ambientes.

## 1. Abrir no VS Code

Abra a pasta `projeto-vscode` no Visual Studio Code. No terminal, execute:

```bash
npm start
```

Depois acesse `http://localhost:3000` no navegador.

O projeto possui as páginas Home, Produtos, Identidade visual, Fale conosco e Quem somos.

## 2. Instalar no WordPress

No painel do WordPress, acesse:

**Aparência → Temas → Adicionar novo → Enviar tema**

Selecione o arquivo:

```text
wordpress/kysana-theme.zip
```

Depois de ativar o tema:

1. Crie as páginas Home, Produtos, Identidade visual, Fale conosco e Quem somos.
2. Configure a Home como página inicial estática.
3. Crie o menu principal em **Aparência → Menus**.
4. Associe os templates nomeados às páginas quando necessário.
5. Configure o email administrativo do WordPress para o formulário funcionar.

O tema usa `wp_mail()` para o envio do formulário. O email e o número oficial do WhatsApp podem ser atualizados nos arquivos do tema antes da publicação.
