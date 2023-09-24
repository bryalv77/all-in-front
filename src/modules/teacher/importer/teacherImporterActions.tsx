import importerActions from '../../../modules/shared/importer/importerActions';
import selectors from '../../../modules/teacher/importer/teacherImporterSelectors';
import TeacherService from '../../../modules/teacher/teacherService';
import fields from '../../../modules/teacher/importer/teacherImporterFields';
import { i18n } from '../../../i18n';

const teacherImporterActions = importerActions(
  'TEACHER_IMPORTER',
  selectors,
  TeacherService.import,
  fields,
  i18n('entities.teacher.importer.fileName'),
);

export default teacherImporterActions;
