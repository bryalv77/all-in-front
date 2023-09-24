import importerActions from '../../../modules/shared/importer/importerActions';
import selectors from '../../../modules/business/importer/businessImporterSelectors';
import BusinessService from '../../../modules/business/businessService';
import fields from '../../../modules/business/importer/businessImporterFields';
import { i18n } from '../../../i18n';

const businessImporterActions = importerActions(
  'BUSINESS_IMPORTER',
  selectors,
  BusinessService.import,
  fields,
  i18n('entities.business.importer.fileName'),
);

export default businessImporterActions;
