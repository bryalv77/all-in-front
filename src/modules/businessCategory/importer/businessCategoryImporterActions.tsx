import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/businessCategory/importer/businessCategoryImporterSelectors';
import BusinessCategoryService from 'src/modules/businessCategory/businessCategoryService';
import fields from 'src/modules/businessCategory/importer/businessCategoryImporterFields';
import { i18n } from 'src/i18n';

const businessCategoryImporterActions = importerActions(
  'BUSINESSCATEGORY_IMPORTER',
  selectors,
  BusinessCategoryService.import,
  fields,
  i18n('entities.businessCategory.importer.fileName'),
);

export default businessCategoryImporterActions;