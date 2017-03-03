import QueryTypeDiagram from '../diagrams/query-type.xml';

export default {
  title: 'Query Type',
  description: 'Чтобы запросить информацию, вашей схеме будет необходимы поля, которые будут собирать различные типы объектов. Эти поля имеют методы позволяющие,записывать изменения в реальном времени. Relay также потребуется специальное поле, которое позволит вам извлекать объект любого типа с учетом его Global ID.',
  officialDocs: 'https://facebook.github.io/relay/docs/graphql-object-identification.html#content',
  diagram: QueryTypeDiagram
}
