import MutationTypeDiagram from '../diagrams/mutation-type.xml';

export default {
  title: 'Mutation Type',
  description: 'Если вы хотите использовать Relay, чтобы изменять данные на сервере, вам нужен тип мутацию. Каждая из ваших мутаций должны иметь корневые поля на этот тип мутации, и возвращает объект подтверждающий успешную мутацию.',
  officialDocs: 'https://facebook.github.io/relay/docs/graphql-mutations.html#content',
  diagram: MutationTypeDiagram
}
