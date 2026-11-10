# 🗃️ Sistema de Gestão Operacional e Vendas — Trimix Sorveteria

## 📝 Descrição do Projeto

Projeto acadêmico de banco de dados desenvolvido para a **Trimix Sorveteria**, uma rede com quatro unidades físicas e atendimento presencial no balcão. A especificação propõe substituir controles informais de vendas, caixa e estoque por uma base de dados relacional centralizada.

A documentação utilizada como referência é a **Especificação de Requisitos e Regras de Negócio — versão 1.1**, revisada em 03/11/2026. O documento descreve o escopo, os requisitos funcionais e não funcionais, as regras de negócio, as políticas e restrições, as entidades e a matriz de rastreabilidade.

## 🚀 Tecnologias e Recursos Previstos

- **SGBD:** MySQL Server 8.0 ou superior.
- **Engine:** InnoDB.
- **Ferramenta de modelagem/consulta:** MySQL Workbench.
- **Linguagem:** SQL.
- **Recursos previstos na especificação:** chaves primárias e estrangeiras, constraints, transações, triggers, procedimentos armazenados, índices e controle de acesso por perfil (RBAC).

## ⚙️ Escopo Funcional Documentado

A especificação contempla:

- Cadastro e gestão de lojas, endereços, categorias, produtos e funcionários.
- Cadastro de disponibilidade e preço de produtos por loja.
- Registro de vendas de balcão, itens vendidos e formas de pagamento.
- Abertura e fechamento de caixa por loja e turno.
- Transferência de estoque entre lojas.
- Baixa de estoque por caixa consumida e estorno de baixa.
- Consulta de vendas por produto e por loja.
- Solicitação e registro de estorno de venda.
- Autenticação, troca de senha, controle de acesso e auditoria.
- Procedimentos relacionados à proteção de dados pessoais (LGPD).

A versão 1.0 descrita no documento não contempla delivery, vendas on-line, emissão de NF-e/NFC-e, integração automática com adquirentes ou API bancária de Pix, entre outros itens explicitados na especificação.

## 📊 Resultados e Aprendizados

A versão 1.1 organiza **14 requisitos funcionais (RF01 a RF14)**, além de requisitos não funcionais, regras de negócio e políticas/restrições. O documento também estabelece diretrizes para modelagem relacional normalizada até a 3ª Forma Normal (3FN), com verificação de aderência à BCNF, e relaciona requisitos, regras e entidades por meio de uma matriz de rastreabilidade.

O projeto permite praticar levantamento e documentação de requisitos, identificação de entidades, integridade referencial, normalização, transações e planejamento de mecanismos de segurança e auditoria em banco de dados.

## 🧠 Declaração de Uso Ético da IA

O ChatGPT foi utilizado como apoio na organização e redação deste README, utilizando como base a especificação versão 1.1 fornecida para o projeto. Esta declaração se refere à documentação do portfólio; qualquer uso de IA na elaboração dos requisitos, DER, scripts SQL ou implementação do banco deve ser informado pelo grupo conforme as ferramentas e finalidades efetivamente utilizadas.

## 💻 Acesso ao Projeto

Este projeto é acadêmico e não possui deploy de aplicação web. Os documentos complementares — como DER, modelo lógico, dicionário de dados e scripts SQL — devem ser adicionados a esta pasta quando estiverem prontos para publicação.

---

[Voltar ao portfólio principal](../README.md)
