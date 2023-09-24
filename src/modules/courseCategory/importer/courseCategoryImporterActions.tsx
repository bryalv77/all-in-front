import importerActions from '../../../modules/shared/importer/importerActions';
import selectors from '../../../modules/courseCategory/importer/courseCategoryImporterSelectors';
import CourseCategoryService from '../../../modules/courseCategory/courseCategoryService';
import fields from '../../../modules/courseCategory/importer/courseCategoryImporterFields';
import { i18n } from '../../../i18n';

const courseCategoryImporterActions = importerActions(
  'COURSECATEGORY_IMPORTER',
  selectors,
  CourseCategoryService.import,
  fields,
  i18n('entities.courseCategory.importer.fileName'),
);

export default courseCategoryImporterActions;
