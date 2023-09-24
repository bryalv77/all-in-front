import importerActions from '../../../modules/shared/importer/importerActions';
import selectors from '../../../modules/bank/importer/bankImporterSelectors';
import BankService from '../../../modules/bank/bankService';
import fields from '../../../modules/bank/importer/bankImporterFields';
import { i18n } from '../../../i18n';

const bankImporterActions = importerActions(
  'BANK_IMPORTER',
  selectors,
  BankService.import,
  fields,
  i18n('entities.bank.importer.fileName'),
);

export default bankImporterActions;
