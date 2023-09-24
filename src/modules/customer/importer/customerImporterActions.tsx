import importerActions from '../../../modules/shared/importer/importerActions';
import selectors from '../../../modules/customer/importer/customerImporterSelectors';
import CustomerService from '../../../modules/customer/customerService';
import fields from '../../../modules/customer/importer/customerImporterFields';
import { i18n } from '../../../i18n';

const customerImporterActions = importerActions(
  'CUSTOMER_IMPORTER',
  selectors,
  CustomerService.import,
  fields,
  i18n('entities.customer.importer.fileName'),
);

export default customerImporterActions;
