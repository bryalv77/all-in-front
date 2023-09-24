import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/courseProgress/importer/courseProgressImporterSelectors';
import CourseProgressService from 'src/modules/courseProgress/courseProgressService';
import fields from 'src/modules/courseProgress/importer/courseProgressImporterFields';
import { i18n } from 'src/i18n';

const courseProgressImporterActions = importerActions(
  'COURSEPROGRESS_IMPORTER',
  selectors,
  CourseProgressService.import,
  fields,
  i18n('entities.courseProgress.importer.fileName'),
);

export default courseProgressImporterActions;