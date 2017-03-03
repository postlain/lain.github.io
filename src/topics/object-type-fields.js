import FieldsDiagram from '../diagrams/fields.xml';
import ConnectionFieldDiagram from '../diagrams/connection-field.xml';
import GlobalIDFieldDiagram from '../diagrams/global-id-field.xml';

export default [
  {
    title: 'Fields',
    description: 'Поля в вашем объекте описывают типы свойств, которые могут быть запрошены, например, пользователя электронной почты или любимого цвета. Они могут также описать связанные типы объектов, как пользователя фото профиля.',
    diagram: FieldsDiagram
  },
  {
    title: 'Connection Fields',
    description: 'Чтобы , как легко пагинацией, Relay спрашивает, какие из зависимостей вашего объекта выражаются в стандартизированной форме. Она включает в себя ребра, узлы и другие элементы графов, которые, к счастью, может быть обработан для вас вспомогательную библиотеку.',
    officialDocs: 'https://facebook.github.io/relay/docs/graphql-connections.html#content',
    diagram: ConnectionFieldDiagram
  },
  {
    title: 'Global ID Field',
    description: 'Relay также требует, чтобы все объекты имеют глобальный идентификатор - уникальный по всем типам данных - которые могут быть использованы для refetch любого данного объекта, не зная его тип.',
    officialDocs: 'https://facebook.github.io/relay/docs/graphql-object-identification.html#content',
    diagram: GlobalIDFieldDiagram
  }
]
