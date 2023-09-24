import importerActions from '../../../modules/shared/importer/importerActions';
import selectors from '../../../modules/lesson/importer/lessonImporterSelectors';
import LessonService from '../../../modules/lesson/lessonService';
import fields from '../../../modules/lesson/importer/lessonImporterFields';
import { i18n } from '../../../i18n';

const lessonImporterActions = importerActions(
  'LESSON_IMPORTER',
  selectors,
  LessonService.import,
  fields,
  i18n('entities.lesson.importer.fileName'),
);

export default lessonImporterActions;
