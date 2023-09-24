import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/courseTransaction/importer/courseTransactionImporterSelectors';
import CourseTransactionService from 'src/modules/courseTransaction/courseTransactionService';
import fields from 'src/modules/courseTransaction/importer/courseTransactionImporterFields';
import { i18n } from 'src/i18n';

const courseTransactionImporterActions = importerActions(
  'COURSETRANSACTION_IMPORTER',
  selectors,
  CourseTransactionService.import,
  fields,
  i18n('entities.courseTransaction.importer.fileName'),
);

export default courseTransactionImporterActions;