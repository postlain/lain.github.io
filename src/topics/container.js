import ContainerDiagram from '../diagrams/container.xml';

import ReactComponentTopic from './react-component';

export default {
  title: 'Relay.Container',
  description: 'Relay.Container является компонентом высшего порядка, он оборачивается вокруг ваших React компонентов  и получает данные зависимостей перед началом рендеринга. Это происходит где вы будете объявять зависимости данных вашего компонента от фрагмента запроса.',
  officialDocs: 'https://facebook.github.io/relay/docs/guides-containers.html#content',
  diagram: ContainerDiagram,
  children: [
    ReactComponentTopic
  ]
}
