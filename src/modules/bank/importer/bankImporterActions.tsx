import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/bank/importer/bankImporterSelectors';
import BankService from 'src/modules/bank/bankService';
import fields from 'src/modules/bank/importer/bankImporterFields';
import { i18n } from 'src/i18n';

const bankImporterActions = importerActions(
  'BANK_IMPORTER',
  selectors,
  BankService.import,
  fields,
  i18n('entities.bank.importer.fileName'),
);

export default bankImporterActions;