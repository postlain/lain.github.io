import ObjectTypeDiagram from '../diagrams/object-type.xml';
import ObjectTypeFields from './object-type-fields';

export default {
  title: 'Object Type',
  description: 'Это ваш общий тип объекта. Это может быть что угодно в вашей модели данных, такие как пользователь, блог или обзор продукта.',
  diagram: ObjectTypeDiagram,
  children: ObjectTypeFields
}
