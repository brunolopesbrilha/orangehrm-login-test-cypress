# 🚀Estudo de Automação com Cypress

Este repositório contém a automação de um fluxo básico no site de demonstração **OrangeHRM** utilizando o framework **Cypress**.

> 🔗 Acesse o site: [OrangeHRM Demo](https://opensource-demo.orangehrmlive.com/web/index.php/auth/login)

---

## 📝 Plano de Teste

Acesse o plano completo no Notion:  
👉 [Plano de Teste (Test Plan) - Orange HRM Demo v1.0](https://tricky-play-179.notion.site/Plano-de-Teste-Test-Plan-Orange-HRM-Demo-v1-0-1cfa99a0b6848056a359feed5200977c?pvs=74)

## 🎯 Objetivo

Realizar uma validação completa e estruturada das funcionalidades **frontend web (desktop)** do sistema **OrangeHRM**, assegurando que os principais fluxos de trabalho funcionem conforme o esperado.

O foco está em garantir:

- Estabilidade visual  
- Usabilidade
- Navegabilidade  
- Comportamento adequado da interface  

A abordagem será **modular e iterativa**, testando cada módulo de forma **isolada** e posteriormente validando a **navegabilidade entre módulos**. **Não estão inclusas integrações com backend, API's ou banco de dados**.

---

## 🧰 Ferramentas e Recursos

- **Navegador**: Google Chrome  
- **Automação**: Cypress  
- **Gerenciamento de Casos**: Google Sheets  
- **Gerenciamento de Defeitos**: Jira  
- **Evidências**: Captura de tela (Windows)  
- **Editor**: Visual Studio Code  
- **Repositório**: GitHub  

---

## 🌐 Navegadores Utilizados

- Google Chrome (última versão estável)  
- Microsoft Edge (base Chromium)  

---

## 🧩 Módulos a Serem Testados

1. Login  
2. Admin  
3. PIM  
4. Leave  
5. Time  
6. Recruitment  
7. My Info  
8. Performance  
9. Dashboard  
10. Directory  
11. Maintenance  
12. Claim  
13. Buzz  

---

## 🔐 Credenciais de Acesso

Utilizamos as credenciais padrão fornecidas pelo site demo:

- **Usuário**: `Admin`
- **Senha**: `admin123`

---

## 📁 Estrutura do Teste

O teste está contido nos arquivos:

```bash
cypress/e2e/login.cy.js
cypress/e2e/myinfo-page.cy.js
cypress/e2e/requestPassword.cy.js
