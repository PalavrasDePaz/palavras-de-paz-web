<p align="center">
<img src="https://user-images.githubusercontent.com/88943961/205815029-dfbeaf17-d12c-485b-b6c2-4ea75011ba52.png"/>
<br/>
<img src="https://user-images.githubusercontent.com/88943961/205815975-0d06d1b3-56aa-4702-95ba-3668faf10376.png"/>
</p>

<h2 align="center"><a href="https://tprf.org/">The Prem Rawat Foundation</a> | <a href="https://github.com/PalavrasDePaz"> ONG Palavras de Paz</a></h2><br/>

![image](https://user-images.githubusercontent.com/88943961/205814572-ec36b186-6733-4af5-b770-3f8524591ad0.png)

<p align="end">Lançamento da Primeira Versão: 15/12/2022</p>
<p align="end">Lançamento da Segunda Versão 2.0: 17/12/2023</p>

<h2>Sobre o projeto</h2>

### A ONG:
A ONG Palavras de Paz é uma organização sem fins lucrativos e gerida por pessoas voluntárias, tendo como objetivo ajudar as pessoas a encontrar a própria paz. Esse objetivo é perseguido através de uma licença obtida para pelo TPRF (Programa de Educação para a Paz da Fundação Prem Rawat).

### O SITE:
Site construído e mantido por pessoas voluntárias, com times responsáveis pelo Back-End, Front-End, U.X. e Q.A.. Esse repositório destina-se ao front-end da aplicação, construído com Next.js, React e TypeScript.

<summary><h3>Funcionalidades da Plataforma:</h3></summary>

* Redirecionamento para sites de parceiros
* Autenticação de usuários
* Cadastro de usuários
* Edição do perfil do usuário
* Exibição de dados sobre as pessoas auxiliadas pela ONG, bem como de dados referentes às atividades das pessoas voluntárias;
* Formulários dinâmicos para preenchimento pelas pessoas voluntárias
  

<h2>Informações Gerais</h2>

  * **Nome:** Palavras de Paz - Web
  * **Versão:** 2.0
  * **Privado:** Sim

<details open>  
<summary><h2>Instalação e Configuração</h2></summary>

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
</details>    

<details open>  
<summary><h2>Scripts</summary>
O projeto utiliza diversos scripts para automatizar tarefas de desenvolvimento e construção.

* ```dev``` Inicia o servidor de desenvolvimento do Next.js.
* ```build``` Gera a compilação otimizada da aplicação para produção.
* ```start``` Inicia a aplicação em produção.
* ```lint``` Executa o ESLint para verificar problemas de código e aplicar correções automáticas (fix).
* ```prepare``` Instala os hooks do Husky para automatizar tarefas no git.
</details>

<details open>  
<summary><h2>Principais ferramentas utilizadas:</h2></summary>

* ```React``` Biblioteca JavaScript para construir interfaces web.
* ```Next.js``` Framework React para aplicações web server-side rendering e static generation.
* ```ESLint``` Ferramenta para análise estática de código JavaScript.
* ```Husky``` Gerenciador de hooks para automatizar tarefas do git.
* ```Prettier``` Formatador de código automático.
* ```Axios``` Cliente HTTP para fazer requests de API.
* ```React Query``` Gerenciamento de dados de consulta assíncrona.
</details>

<details open>  
<summary><h2>Estrutura do repositório:</h2></summary>

  O projeto **Palavras de Paz - Web** é organizado da seguinte maneira:
* ```public``` Contém arquivos estáticos, como imagens e favicon.
* ```src``` Contém o código-fonte da aplicação.
  * ```api``` Contém a requisição para a API da aplicação.
  * ```components``` Contém os componentes globais da aplicação.
  * ```constants``` Armazena constantes de escopo global, para evitar repetições.
  * ```fonts/baloo``` Contém a fonte tipográfica usada na aplicação.
  * ```helpers``` Contém as funções auxiliares.
  * ```hooks``` Contém os custom-hooks da aplicação.
  * ```pages``` Contém as páginas da aplicação, com direcionamento para seu respectivo template.
  * ```styles``` Contém os estilos globais da aplicação.
  * ```templates``` Contém o template de cada página.
    *  ```componentName``` Reúne todos os arquivos e diretórios de cada componente de mesmo nome do diretório.
      * ```components``` Contém os subcomponentes do componente pai. Opcional.
        * ```subcomponentName``` Reúne todos os arquivos e diretórios relacionados ao subcomponente.
      * ```styles``` Contém arquivos de estilo específicos para o componente.
      * ```types``` Guarda tipagens typescript para serem reutilizadas no componente.
      * ```componentNameTemplate.tsx``` Arquivo raíz do template do componente, que é referenciado em "pages".
  * ```zustand``` Ferramenta de armazenamento global de estado.

</details>

<details open>
  <summary><h2>Git Flow</h2></summary>

 * ```Branch Master/Main```
Principal *branch*, aqui é onde temos todo o código de produção. Todas as novas funcionalidades que estão sendo desenvolvidas, em algum momento, serão mescladas ou associadas a ***Master***. As formas de interagir com essa branch são através de uma ***Hotfix*** ou um ***Pull Request***.

* ```Branch Develop```
É a *branch* onde fica o código do próximo *deploy*. Ela serve como uma linha do tempo com os últimos desenvolvimentos, isso significa que ela possui funcionalidades que ainda não foram publicadas e que posteriormente vão ser associadas com a ***branch Master***.

* ```Branch Feature```
São *branches* utilizadas para o desenvolvimento de funcionalidades específicas. É recomendável que essas branches sigam uma convenção de nome, a convenção mais utilizada é iniciar o nome das *branches* com *feature*, por exemplo, “***feature/login***”.

* ```Branch Hotfix```
É uma *branch* criada a partir da ***master*** para realizar correções imediatas encontradas no sistema em produção. Quando concluída, ela é excluída após realizar o *merge* com as ***branches Master*** e ***Develop***.

* É importante saber que essas ***features branches*** são criadas sempre a partir da ***branch Develop***. Portanto, quando finalizada, elas são removidas após realizar o *merge* com a ***Branch Develop***. Se tivermos dez funcionalidades a serem desenvolvidas, criaremos dez *branches* independentes.

* É importante salientar que as *branches* de *features* não podem ter interação com a ***branch master***, apenas com a ***branch develop***.

* A grande diferença entre ***Feature Branches*** e ***Branches de Hotfix*** é que os Hotfix são criados a partir da ***Branch Master*** e quando os finalizamos, eles são mesclados tanto na ***Branch Master*** quanto na *branch* de desenvolvimento. Isso ocorre porque o bug está em ambos os ambientes.
</details>

<details open>
  <summary><h2>Padrões de commits</h2></summary>
Utilização de commits semânticos, com mensagens em descritivas da tarefa, em português
  
#### Estrutura:
  
  ```"tipo-de-comit: Mensagem em português descrevendo as mudanças"```
  
#### <tipo-de-commit> - Usar um dos seguintes tipos:

  * ```feat``` Tratam adições de novas funcionalidades ou de quaisquer outras novas implantações ao código. Por exemplo, requisitos.
  * ```fix``` Essencialmente definem o tratamento de correções de bugs;
  * ```style``` Alterações referentes a formatações na apresentação do código que não afetam o significado do código, como por exemplo: espaço em branco, formatação, ponto e vírgula ausente etc.).
  
</details>

