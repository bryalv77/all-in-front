import importerActions from '../../../modules/shared/importer/importerActions';
import selectors from '../../../modules/operation/importer/operationImporterSelectors';
import OperationService from '../../../modules/operation/operationService';
import fields from '../../../modules/operation/importer/operationImporterFields';
import { i18n } from '../../../i18n';

const operationImporterActions = importerActions(
  'OPERATION_IMPORTER',
  selectors,
  OperationService.import,
  fields,
  i18n('entities.operation.importer.fileName'),
);

export default operationImporterActions;
