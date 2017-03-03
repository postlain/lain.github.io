import GraphQLDiagram from '../diagrams/graphql-implementation.xml';

import SchemaTopic from './graphql-schema.js';

export default {
  title: 'GraphQL Implementation',
  description: 'Вы будете нуждаться в реализации GraphQL, которая будет в состоянии разобрать и проверить свою GraphQL схему, а также выполнять запросы, отправленные на него от Relay. Это уже было реализовано в нескольких различных языках, и там более вы будете получать уведомления об этом!',
  officialDocs: 'http://facebook.github.io/graphql/',
  diagram: GraphQLDiagram,
  children: [
    SchemaTopic
  ]
}
