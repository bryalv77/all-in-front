import importerActions from '../../../modules/shared/importer/importerActions';
import selectors from '../../../modules/businessCategory/importer/businessCategoryImporterSelectors';
import BusinessCategoryService from '../../../modules/businessCategory/businessCategoryService';
import fields from '../../../modules/businessCategory/importer/businessCategoryImporterFields';
import { i18n } from '../../../i18n';

const businessCategoryImporterActions = importerActions(
  'BUSINESSCATEGORY_IMPORTER',
  selectors,
  BusinessCategoryService.import,
  fields,
  i18n('entities.businessCategory.importer.fileName'),
);

export default businessCategoryImporterActions;
