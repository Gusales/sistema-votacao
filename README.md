# Sistema de Enquetes em RealTime

Sistema de votação em tempo real feito durante o evento NLW Expert da Rocketseat, com implementações de testes automatizados, documentação gerada automaticamente com Swagger e Scalar e melhorias na arquiterura do projeto

## Requisitos Funcionais

- RF01: Deve ser possível criar uma enquete;
- RF02: Deve ser possível buscar dados de uma única enquete;
- RF03: Deve ser possível votar em uma enquete;
- RF04: Deve ser possível monitorar os dados de uma enquete em tempo real;

## Regras de Negócio

- RN01: Para obter dados de uma única enquete, deve-se utilizar o ID da mesma;
- RN02: Para que seja possível votar, o usuário deve informar o ID da enquete e uma opção;
- RN03: Na criação da enquete, o usuário poderá escolher quantas vezes o usuário pode votar em uma opção dentro da enquete, sendo por padrão apenas 1 vez;

## Requisitos Não Funcionais

- RNF01: O sistema deve funcionar em tempo real;
- RNF02: O sistema deve utilizar NodeJS, Fastify e WebSockets;
- RNF03: Deve-se utilizar bancos de dados MySQL e Redis;
