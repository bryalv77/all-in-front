import importerActions from '../../../modules/shared/importer/importerActions';
import selectors from '../../../modules/category/importer/categoryImporterSelectors';
import CategoryService from '../../../modules/category/categoryService';
import fields from '../../../modules/category/importer/categoryImporterFields';
import { i18n } from '../../../i18n';

const categoryImporterActions = importerActions(
  'CATEGORY_IMPORTER',
  selectors,
  CategoryService.import,
  fields,
  i18n('entities.category.importer.fileName'),
);

export default categoryImporterActions;
