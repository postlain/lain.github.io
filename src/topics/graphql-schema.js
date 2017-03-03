import SchemaDiagram from '../diagrams/schema.xml';

import ObjectTypeTopic from './object-type';
import QueryTypeTopic from './query-type';
import MutationType from './mutation-type';

export default {
  title: 'GraphQL Schema',
  description: 'Схема описывает, как ваши данные структурированы путем создания иерархии типов. Эти типы могут быть объектами вашего приложения - e.g пользователей, любит или фотографии - или другие типы используются для запроса и мутирования данных вашего приложения.',
  diagram: SchemaDiagram,
  children: [
    ObjectTypeTopic,
    QueryTypeTopic,
    MutationType
  ]
}
