import importerActions from '../../../modules/shared/importer/importerActions';
import selectors from '../../../modules/student/importer/studentImporterSelectors';
import StudentService from '../../../modules/student/studentService';
import fields from '../../../modules/student/importer/studentImporterFields';
import { i18n } from '../../../i18n';

const studentImporterActions = importerActions(
  'STUDENT_IMPORTER',
  selectors,
  StudentService.import,
  fields,
  i18n('entities.student.importer.fileName'),
);

export default studentImporterActions;
