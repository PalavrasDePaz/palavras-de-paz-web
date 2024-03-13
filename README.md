<p align="center">
<img src="https://user-images.githubusercontent.com/88943961/205815029-dfbeaf17-d12c-485b-b6c2-4ea75011ba52.png"/>
<br/>
<img src="https://user-images.githubusercontent.com/88943961/205815975-0d06d1b3-56aa-4702-95ba-3668faf10376.png"/>
</p>

<h2 align="center"><a href="https://tprf.org/">The Prem Rawat Foundation</a> | <a href="https://github.com/alchemist-developer/deploy-palavrasdepaz-ong"> ONG Palavras de Paz</a></h2><br/>

![image](https://user-images.githubusercontent.com/88943961/205814572-ec36b186-6733-4af5-b770-3f8524591ad0.png)

<p align="end">Finalização/Lançamento: 15/12/2022</p>

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Informações Gerais
  * **Nome:** Palavras de Paz - Web
  * **Versão:** 0.1.0
  * **Privado:** Sim
    
## Instalação e Configuração

Clone o repositório do projeto:
```bash
git clone https://github.com/palavrasdepaz/web.git
```

Acesse a pasta do projeto:
```bash
cd palavrasdepaz-web
```

Instale as dependências do projeto:
```bash
npm install
# or
yarn install
```

Inicie o servidor de desenvolvimento:
```bash
npm run dev
# or
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) em seu navegador para ver o resultado.

## Scripts
O projeto utiliza diversos scripts para automatizar tarefas de desenvolvimento e construção.

* ```dev``` Inicia o servidor de desenvolvimento do Next.js.
* ```build``` Gera a compilação otimizada da aplicação para produção.
* ```start``` Inicia a aplicação em produção.
* ```lint``` Executa o ESLint para verificar problemas de código e aplicar correções automáticas (fix).
* ```prepare``` Instala os hooks do Husky para automatizar tarefas no git.

## Husky
Husky é uma ferramenta que permite executar scripts automatizados em eventos do git, como *pre-commit*.

* ```pre-commit```: Executa o lint-staged antes de realizar um commit.

### lint-staged
* ```src//*.{js,jsx,ts,tsx,json,css}**:``` Define os arquivos nos quais serão aplicados os formatadores e ESLint.
* ```prettier --write```: Formata o código automaticamente.
* ```eslint --fix```: Executa o ESLint para verificar problemas de código e aplicar correções automáticas.
