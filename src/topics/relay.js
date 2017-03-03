import RelayDiagram from '../diagrams/relay.xml';

import RootContainerTopic from './root-container';
import NetworkLayerTopic from './network-layer';
import SchemaCopyTopic from './schema-copy';
import MutationsTopic from './mutations';

export default {
  title: 'Relay',
  description: 'Relay использует Javascript код, который стремится абстрагироваться от монотонной работы обмена данными с сервером. Он работает вместе с сервером GraphQL диспользуя его для создания запроса, доставки и изменения данных в консистенции.',
  officialDocs: "https://facebook.github.io/relay/",
  diagram: RelayDiagram,
  width: 321,
  height: 339,
  children: [
    RootContainerTopic,
    NetworkLayerTopic,
    SchemaCopyTopic,
    MutationsTopic
  ]
}
