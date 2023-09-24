import importerActions from '../../../modules/shared/importer/importerActions';
import selectors from '../../../modules/taskList/importer/taskListImporterSelectors';
import TaskListService from '../../../modules/taskList/taskListService';
import fields from '../../../modules/taskList/importer/taskListImporterFields';
import { i18n } from '../../../i18n';

const taskListImporterActions = importerActions(
  'TASKLIST_IMPORTER',
  selectors,
  TaskListService.import,
  fields,
  i18n('entities.taskList.importer.fileName'),
);

export default taskListImporterActions;
