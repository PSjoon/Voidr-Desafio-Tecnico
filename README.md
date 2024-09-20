# Automação de Testes com Playwright para Voidr

<div align="center">
<img width="300" height="300" src="
https://media.licdn.com/dms/image/v2/D4D0BAQGiciw4-Dx41g/company-logo_200_200/company-logo_200_200/0/1713842173880/voidrco_logo?e=1735171200&v=beta&t=gUgIRku9YoEP0K1UgpRenSyPgFHahfbpnEJpjh47wBg"></img>
</div>

## Descrição

- Este projeto foi desenvolvido como parte de um desafio técnico para a vaga de Test Automation Engineer na Voidr. Utilizando Playwright, foram automatizados testes para a aplicação web Sauce Demo. O objetivo é avaliar habilidades em automação de testes, organização de código e boas práticas de desenvolvimento. Foram realizadas os seguintes testes:

  - Login sem credenciais
  - Adicionar item ao carrinho
  - Persistência de carrinho
  - Sistema de checkout
  - Sistema de checkout vazio (erro encontrado no sistema Sauce Demo)\*
  - Login válido
  - Login inválido
  - Logout
  - Analise de glitch de performance
  - Ordenação de produtos por preço
  - Remover item do carrinho

\*: No sistema utilizado como base, foi encontrado um erro de limitação de acesso, permitindo a compra dos itens com o carrinho vazio.

## Instalação e Acesso

Para instalar e executar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:
   ```bash
   git clone https://github.com/PSjoon/Voidr-Desafio-Tecnico.git
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```

## Uso

Para iniciar o projeto, execute o comando:

```bash
npx playwright test
```

ou

```bash
npx playwright test --ui
```

Iniciando a interface gráfica.
