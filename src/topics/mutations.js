import MutationDiagram from '../diagrams/mutations.xml';

export default {
  title: 'Mutations',
  description: 'Чтобы изменить данные в вашем приложении вы будете использовать мутации. Для того, чтобы Relay мог знать, какие объекты будут изменены мутациями, и делать такие вещи, как оптимистичные обновления, вам необходимо сообщить ему фронт о том, как ваши мутации ведут себя. Какие аргументы эта мутация изпользует? На что повлияет пайлоад? Какие связи будут изменены? Этот кролик убегает все дальше в нору.',
  officialDocs: 'https://facebook.github.io/relay/docs/guides-mutations.html#content',
  diagram: MutationDiagram
};
