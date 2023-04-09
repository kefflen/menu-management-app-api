# Menu management app API
## Como iniciar o projeto
Para iniciar o projeto, siga as instruções abaixo:
1. Clone o repositório em sua máquina local;
2. Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis de ambiente:
```.env
MONGO_DB_URI=<URI de conexão com o banco de dados MongoDB>
SECRET_KEY=<chave secreta usada para assinar o JWT>

--------------------------------------------------------

/*
Exemplos de MONGO_DB_URI:
Atlas: mongodb+srv://kefflen:<password>@cluster0.0sltz9a.mongodb.net/<name_collection>?retryWrites=true&w=majority
Mongodb local:
  - mongodb://127.0.0.1:27017/<name_collection>
  - mongodb://<user>:<password>@localhost:27017/<name_collection>?authSource=admin
*/
```
3. Instale as dependências do projeto rodando o comando: `npm install`
4. Execute o comando npm run start para iniciar o servidor em modo de desenvolvimento.
### Documentação das rotas
Documentação das rotas da API, feito com Swagger
> http://localhost:8080/api-docs
## Tecnologias utilizadas
- Mongoose
- TypeScript
- JWT
- Zod
- Swagger

### Sobre as tecnologias e por que utilizar
#### Mongoose
O Mongoose é uma biblioteca ODM (Object Data Modeling) para MongoDB e Node.js, que fornece uma solução baseada em esquemas para modelar dados. Ele inclui recursos úteis como validação de esquema, middleware e mapeamento de objetos, que simplificam o processo de interação com o banco de dados MongoDB. O Mongoose é amplamente utilizado em projetos Node.js que utilizam o MongoDB.

#### TypeScript
TypeScript é um superset da linguagem JavaScript que adiciona recursos de tipagem estática, interfaces e outras funcionalidades avançadas à linguagem. O TypeScript é uma ótima escolha para projetos grandes e complexos, pois ajuda a evitar erros de tipagem e a garantir a consistência do código. Ele também permite que os desenvolvedores escrevam um código mais organizado e legível.

#### JWT
JWT (JSON Web Token) é um padrão aberto (RFC 7519) para transmitir informações de forma segura entre partes como um objeto JSON. Ele é comumente usado como um método de autenticação entre um cliente e um servidor. JWTs são geralmente emitidos pelo servidor após a autenticação do usuário e são incluídos em todas as solicitações subsequentes como um cabeçalho HTTP Authorization.

#### Zod
Zod é uma biblioteca de validação de esquemas em TypeScript. Ela é usada para garantir que as entradas do usuário ou outras entradas de dados correspondam ao formato esperado. Ela inclui muitos recursos úteis, como validação de tipos, validação de comprimento de sequência, validação de formato de data e hora, e muito mais. O Zod é uma excelente escolha para projetos em que a validação de entrada é importante.

#### Swagger
Swagger é uma ferramenta que ajuda a criar, documentar e testar APIs RESTful. Ele inclui uma especificação de API padronizada e um conjunto de ferramentas para gerar documentação de API interativa e testes automatizados. O Swagger é uma ótima escolha para projetos em que a documentação da API é importante e deve ser mantida atualizada. Ele também facilita a colaboração entre equipes de desenvolvimento e clientes que usam a API.

## Arquitetura utilizada
### Arquitetura hexagonal (ou ports and adapters)

O projeto foi desenvolvido utilizando a arquitetura hexagonal, também conhecida como "ports and adapters". Essa arquitetura é baseada em um modelo de domínio rico e desacoplado de implementações tecnológicas específicas, o que torna o código mais flexível, testável e fácil de manter.

A arquitetura hexagonal divide o sistema em camadas independentes que interagem por meio de interfaces bem definidas. Isso permite que as diferentes partes do sistema sejam modificadas e testadas de forma independente, sem afetar as outras partes. Além disso, ela torna mais fácil a integração de novas tecnologias, já que cada camada pode ser adaptada para se comunicar com outras tecnologias de forma transparente.

Algumas das principais vantagens da arquitetura hexagonal incluem:

- Facilita a adição de novos recursos e funcionalidades ao sistema, sem afetar outras partes já existentes;
- Melhora a testabilidade do código, pois cada camada pode ser testada de forma independente;
- Ajuda a garantir a conformidade com os princípios SOLID, tornando o código mais fácil de entender e manter;
- Torna mais fácil a integração com outras tecnologias, já que cada camada pode ser adaptada para se comunicar com outras tecnologias de forma transparente.

## Scripts disponiveis
### Start
Roda o servidor em modo de desenvolvimento. O comando a seguir é executado para iniciar o servidor:
```cmd
npm start
```

### Format
Formata todos os arquivos do projeto utilizando o Prettier:
```cmd
npm run format
```
### Lint
Executa o ESLint em todos os arquivos .ts e .js do projeto:
```cmd
npm run lint
```
### Lint:fix
Executa o ESLint em todos os arquivos .ts e .js do projeto, corrigindo os erros encontrados automaticamente sempre que possível
```cmd
npm run lint:fix
```
### Typecheck
Executa o TypeScript em modo de checagem de tipos, sem gerar os arquivos de saída:
```cmd
npm run typecheck
```
