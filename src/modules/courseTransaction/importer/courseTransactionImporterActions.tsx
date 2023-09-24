import importerActions from '../../../modules/shared/importer/importerActions';
import selectors from '../../../modules/courseTransaction/importer/courseTransactionImporterSelectors';
import CourseTransactionService from '../../../modules/courseTransaction/courseTransactionService';
import fields from '../../../modules/courseTransaction/importer/courseTransactionImporterFields';
import { i18n } from '../../../i18n';

const courseTransactionImporterActions = importerActions(
  'COURSETRANSACTION_IMPORTER',
  selectors,
  CourseTransactionService.import,
  fields,
  i18n('entities.courseTransaction.importer.fileName'),
);

export default courseTransactionImporterActions;
