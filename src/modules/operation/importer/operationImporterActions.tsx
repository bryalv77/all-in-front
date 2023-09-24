import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/operation/importer/operationImporterSelectors';
import OperationService from 'src/modules/operation/operationService';
import fields from 'src/modules/operation/importer/operationImporterFields';
import { i18n } from 'src/i18n';

const operationImporterActions = importerActions(
  'OPERATION_IMPORTER',
  selectors,
  OperationService.import,
  fields,
  i18n('entities.operation.importer.fileName'),
);

export default operationImporterActions;