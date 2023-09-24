import importerActions from '../../../modules/shared/importer/importerActions';
import selectors from '../../../modules/subTasks/importer/subTasksImporterSelectors';
import SubTasksService from '../../../modules/subTasks/subTasksService';
import fields from '../../../modules/subTasks/importer/subTasksImporterFields';
import { i18n } from '../../../i18n';

const subTasksImporterActions = importerActions(
  'SUBTASKS_IMPORTER',
  selectors,
  SubTasksService.import,
  fields,
  i18n('entities.subTasks.importer.fileName'),
);

export default subTasksImporterActions;
