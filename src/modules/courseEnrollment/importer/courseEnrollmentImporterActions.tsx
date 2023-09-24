import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/courseEnrollment/importer/courseEnrollmentImporterSelectors';
import CourseEnrollmentService from 'src/modules/courseEnrollment/courseEnrollmentService';
import fields from 'src/modules/courseEnrollment/importer/courseEnrollmentImporterFields';
import { i18n } from 'src/i18n';

const courseEnrollmentImporterActions = importerActions(
  'COURSEENROLLMENT_IMPORTER',
  selectors,
  CourseEnrollmentService.import,
  fields,
  i18n('entities.courseEnrollment.importer.fileName'),
);

export default courseEnrollmentImporterActions;