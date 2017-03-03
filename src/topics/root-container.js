import RootContainerDiagram from '../diagrams/root-container.xml';

import RelayRouteTopic from './query-config';
import ContainerTopic from './container';

export default {
  title: 'Relay.RootContainer',
  description: 'Relay.RootContainer принимает копанент (обернутый в Relay.Container) и Relay.Route, превращает их в единый запрос и отправляет его на сервер GraphQL. А также он отвечает за рендеринг загрузки пользовательско игтерфеса, рендеринг пользовательского интерфейса после загрузки данных и отображения пользовательского интерфейса, когда запрос не валиден.',
  officialDocs: 'https://facebook.github.io/relay/docs/guides-root-container.html#content',
  diagram: RootContainerDiagram,
  children: [
    RelayRouteTopic,
    ContainerTopic
  ]
}
