import importerActions from '../../../modules/shared/importer/importerActions';
import selectors from '../../../modules/courseProgress/importer/courseProgressImporterSelectors';
import CourseProgressService from '../../../modules/courseProgress/courseProgressService';
import fields from '../../../modules/courseProgress/importer/courseProgressImporterFields';
import { i18n } from '../../../i18n';

const courseProgressImporterActions = importerActions(
  'COURSEPROGRESS_IMPORTER',
  selectors,
  CourseProgressService.import,
  fields,
  i18n('entities.courseProgress.importer.fileName'),
);

export default courseProgressImporterActions;
