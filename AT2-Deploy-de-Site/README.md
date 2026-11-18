# AT2 — Site com três páginas e publicação no GitHub Pages

## Objetivo da atividade

Praticar a publicação de um site na internet por meio do GitHub Pages, utilizando o GitHub para armazenar e disponibilizar os arquivos do projeto.

A atividade foi organizada em **três páginas que se conectam entre si**, conforme solicitado:

1. **Página Principal** (`index.html`): apresentação da consultoria e acesso às outras páginas.
2. **Menu** (`menu.html`): organização das informações de formação, experiência e serviços.
3. **Suporte** (`suporte.html`): formulário de contato e informações de atendimento.

## Visualizar o projeto

- [Abrir página principal](./index.html)
- [Abrir Menu](./menu.html)
- [Abrir Suporte](./suporte.html)

Com o GitHub Pages habilitado para a branch `main` e a pasta raiz (`/(root)`), o endereço público fica:

`https://caiquesanches07.github.io/portifolio-caique-sanches-araujo-de-lima/AT2-Deploy-de-Site/`

## Relação com a AT1

O conteúdo do arquivo enviado como referência da AT1 foi utilizado como base para estruturar o site: apresentação profissional, formação acadêmica, experiência, serviços, artigo em destaque e contato. Na AT2, essas informações foram distribuídas em três páginas HTML separadas, com links de navegação compartilhados.

## Tecnologias utilizadas

- **HTML5:** estrutura semântica das três páginas.
- **CSS3:** identidade visual, organização dos elementos e responsividade.
- **JavaScript:** validação do formulário e preparação de mensagem por e-mail.
- **Git e GitHub:** armazenamento e versionamento do projeto.
- **GitHub Pages:** publicação do site estático.

## Estrutura de arquivos

```text
AT2-Deploy-de-Site/
├── index.html
├── menu.html
├── suporte.html
├── style.css
├── script.js
└── README.md
```

## Como publicar pelo GitHub Pages

No repositório, acesse **Settings → Pages**. Em **Build and deployment**, selecione **Deploy from a branch**, escolha a branch `main` e a pasta `/(root)`, depois clique em **Save**. Aguarde a conclusão da publicação e abra o endereço público informado nesta documentação.

## Observação sobre o formulário

O formulário realiza validação no navegador e prepara uma mensagem usando o aplicativo de e-mail padrão do dispositivo (`mailto:`). Como este é um site estático, não existe backend para armazenar ou processar mensagens automaticamente.

## Checklist da atividade

- [x] Três páginas HTML criadas.
- [x] Página Principal, Menu e Suporte.
- [x] Links entre as três páginas.
- [x] Folha de estilos compartilhada.
- [x] Layout adaptável a telas menores.
- [x] Arquivos organizados no GitHub.
- [ ] Habilitar ou confirmar o GitHub Pages em Settings → Pages.
- [ ] Abrir o endereço publicado e conferir as três páginas.

[Voltar ao portfólio principal](../README.md)
