import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/paymentMethods/importer/paymentMethodsImporterSelectors';
import PaymentMethodsService from 'src/modules/paymentMethods/paymentMethodsService';
import fields from 'src/modules/paymentMethods/importer/paymentMethodsImporterFields';
import { i18n } from 'src/i18n';

const paymentMethodsImporterActions = importerActions(
  'PAYMENTMETHODS_IMPORTER',
  selectors,
  PaymentMethodsService.import,
  fields,
  i18n('entities.paymentMethods.importer.fileName'),
);

export default paymentMethodsImporterActions;