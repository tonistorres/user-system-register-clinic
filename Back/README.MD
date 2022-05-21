![Tux, the Linux mascot](/ts.png)

## 1- Setup Inicial e uma aplicação TypeScript:

- [x] - para colocar de forma automágica iremos inicializar um arquivo package.json e no script start iremos colocar essa linha de comando para digitarmos apenas npm start.


```console 
npm init -y
```

```json
"start":"tsc && node dist/src/index.js",
```

![package.json](/package.png  )

- [x] - Primeiro vamos instalar o compilador typeScript;

```console
npm install -D typescript
```

- [x] - Instalando o tsc de maneira global 

```console
npm install -g typescript
```

[pacote npm tsc ](https://www.npmjs.com/package/typescript)

- [x] - Configurando o compilador TypeScript, rode o comando abaixo:

```console 
tsc --init
```


- [x] - irá gerar um arquivo tsconfig.json com uma quantidade robusta de infromação, para nosso primeiro exemplo troque pelo disponibilizado pelo course e a medida que for avançando o conhecimento no type script iremos incrementando essas configuraçẽos.

> Course(Trybe):

```json
{
   "compilerOptions": {
    "target": "es2016",                                 
    "module": "commonjs",
    "rootDir": "./",
    "outDir": "./dist",
    "preserveConstEnums": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include":["src/**/*"], /* aqui estamos incluindo todos os arquivos dentro da pasta src */
  "exclude": ["node_modules", "**/*.spec.ts"] /* aqui estamos excluindo a pasta node_modules e os arquivos de teste */
}

```

-[x] - Em seguida iremos criar a nossa pasta src, pois, lá conterá todos os arquivos que serão compilados de acordo com a configuração acima disponibilizada na propriedade "include":["src/**/**"].

> Estrutura de pasta:

```console
src
```


> Observação Importante: Todos os arquivos que estiverem na pasta node_modules e que tiverem a extensão spec.ts não serão compilados, serão ignorados, de acordo com a configuração disponibilizada no arquivo tsconfig.json na propriedade exclue.

- [x] - Em seguida iremos criar um arquivo index.ts e adicionaremos em seu escopo um console.log('Hello World') e nos livramos da "maldição" de não conseguirmos aprender uma nova linguagem sem antes da um olá mundo escrito me ts rsrsrs

> Arquivo: index.ts

```typecript
console.log(hello world!! ts)
```

- [x] - Em seguida dentro da pasta da aplicação, no terminal do vs code digite o comando tsc para compilar todos os scripts ts dentro da pasta src conforme explicitados no arquivo tsconfig.json, e se tudo estiver certo será gerada uma pasta chamada dist com o meu programa Hello World em typescript traduzido para Hello World em JavaScript.

![Tux, the Linux mascot](/tsparajs.png  )

- [x] - Para compilar e rodar o arquivo no terminal execute o seguinte comando:

```console 
tsc && node dist/src/index.js
```
- [x] - Se quiser rodar o código utilizando a extensão codeRunner do vsCode para executar seus códigos typescript execute o comando abaixo uma única vez.

```console
npm install -g ts-node

```

![Tux, the Linux mascot](/POO.png )

[Fonte de Informação: Blog ByTrybe](https://blog.betrybe.com/tecnologia/poo-programacao-orientada-a-objetos/)
## 2 - O que é um paradigma de programação?

>Um paradigma pode ser entendido como a forma com a qual se decide resolver determinado problema por meio da programação de computadores. Nesse sentido, temos alguns paradigmas possíveis que eventualmente podem ser usados mais de um (caso a linguagem escolhida ofereça suporte).

Como exemplos, podemos citar os dois primeiros (que deram origem aos demais), que são o tipo imperativo e o declarativo. Existem também o tipo estruturado e o paradigma orientado a objetos, que serão abordados mais adiante.

## 2.1 - O que é o Paradigma POO?
> O paradigma da POO(Programação Orientada a Objetos) é um modelo de análise, projeto e programação baseado na aproximação entre o mundo real e o mundo virtual, através da criação e interação entre objetos, atributos, códigos, métodos, entre outros.

A primeira linguagem de programação com paradigma de orientação a objetos foi criada em 1970, por Alan Kay. Ele era matemático, biólogo e, ao longo de sua vida repleta de invenções, criou vários programas de aprendizado voltados para crianças.

Segundo Kay, “o computador ideal deveria funcionar como um organismo vivo, isso é, cada célula se relaciona com outras a fim de alcançar um objetivo, mas cada uma funciona de forma autônoma. As células poderiam também reagrupar-se para resolver outro problema, ou desempenhar outras funções”.

De fato, o matemático tinha em seu pensamento uma mistura de raciocínio lógico com biológico, o que vinha de suas duas formações originais. Em determinado momento de sua vida, Alan Kay passou a trabalhar na gigante Xerox, mais precisamente no departamento de estudos.

Durante suas atividades, ele idealizou a criação de um aparelho chamado Dynabook. Era uma espécie de tablet com teclado físico (isso em plena década de 70). Para que o Dynabook se tornasse realidade, era necessário o desenvolvimento de uma linguagem de programação por meio da qual pudesse ser construído o sistema do aparelho.

Foi então que surgiu a primeira linguagem de programação orientada a objetos: o Smalltalk. A linguagem de POO de Alan Kay foi a primeira a contar com os conceitos de classes, objetos, atributos e métodos.

## 3 - Sinxtaxe Geral de Uma Classe:

```javascritp

class Person {
  name: string;
  height: number;
  weight: number;

  constructor(n: string, h: number, w: number) {
    console.log(`Creating person ${n}`);
    this.name = n;
    this.height = h;
    this.weight = w;
  }

  sleep() {
    console.log(`${this.name}: zzzzzzz`);
  }
}

const p1 = new Person('Maria', 171, 58);
const p2 = new Person('João', 175, 66);
console.log(p1.name, p1.height, p1.weight);
console.log(p2.name, p2.height, p2.weight);
p1.sleep();
p2.sleep();

/*
Saída:
Creating person Maria
Creating person João
Maria 171 58
João 175 66
Maria: zzzzzzz
João: zzzzzzz
*/

```

## 3.1 - Processo de criação de uma classe em TypeScript:

> Processo de Criação de uma Classe: Utilize a palavra reservada class o Nome da Classe: Exemplo Pessoa, e um par de chaves:

```javascript
   class Pessoa{
   }
```
> A classe pode conter atributos, para isso basta digitarmos o nome que queremos atribuir às nossas variáveis (atributos) e seu tipo tendo em vista que estamos trabalhando com javascript:

```javascript
   class Pessoa{
     nome: string;
     altura: number;
     largura: number;
   }
```
> Podem ainda existir métodos (ações) dentro de uma classe, para escrevermos um método basta entitularmos o seu nome em seguida os parênteses e chaves conforme explicitado abaixo:

```javascript
   class Pessoa{

    nome: string;

    dormir() {
    console.log(`${this.nome}: zzzzzzz`);
    
  }
   }
```


