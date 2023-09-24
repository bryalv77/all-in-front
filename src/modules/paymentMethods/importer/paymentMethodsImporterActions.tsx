import importerActions from '../../../modules/shared/importer/importerActions';
import selectors from '../../../modules/paymentMethods/importer/paymentMethodsImporterSelectors';
import PaymentMethodsService from '../../../modules/paymentMethods/paymentMethodsService';
import fields from '../../../modules/paymentMethods/importer/paymentMethodsImporterFields';
import { i18n } from '../../../i18n';

const paymentMethodsImporterActions = importerActions(
  'PAYMENTMETHODS_IMPORTER',
  selectors,
  PaymentMethodsService.import,
  fields,
  i18n('entities.paymentMethods.importer.fileName'),
);

export default paymentMethodsImporterActions;
