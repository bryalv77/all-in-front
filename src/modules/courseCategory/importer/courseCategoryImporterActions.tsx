import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/courseCategory/importer/courseCategoryImporterSelectors';
import CourseCategoryService from 'src/modules/courseCategory/courseCategoryService';
import fields from 'src/modules/courseCategory/importer/courseCategoryImporterFields';
import { i18n } from 'src/i18n';

const courseCategoryImporterActions = importerActions(
  'COURSECATEGORY_IMPORTER',
  selectors,
  CourseCategoryService.import,
  fields,
  i18n('entities.courseCategory.importer.fileName'),
);

export default courseCategoryImporterActions;