import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/lesson/importer/lessonImporterSelectors';
import LessonService from 'src/modules/lesson/lessonService';
import fields from 'src/modules/lesson/importer/lessonImporterFields';
import { i18n } from 'src/i18n';

const lessonImporterActions = importerActions(
  'LESSON_IMPORTER',
  selectors,
  LessonService.import,
  fields,
  i18n('entities.lesson.importer.fileName'),
);

export default lessonImporterActions;