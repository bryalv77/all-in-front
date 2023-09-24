import importerActions from '../../../modules/shared/importer/importerActions';
import selectors from '../../../modules/courseEnrollment/importer/courseEnrollmentImporterSelectors';
import CourseEnrollmentService from '../../../modules/courseEnrollment/courseEnrollmentService';
import fields from '../../../modules/courseEnrollment/importer/courseEnrollmentImporterFields';
import { i18n } from '../../../i18n';

const courseEnrollmentImporterActions = importerActions(
  'COURSEENROLLMENT_IMPORTER',
  selectors,
  CourseEnrollmentService.import,
  fields,
  i18n('entities.courseEnrollment.importer.fileName'),
);

export default courseEnrollmentImporterActions;
