import importerActions from '../../../modules/shared/importer/importerActions';
import selectors from '../../../modules/tasks/importer/tasksImporterSelectors';
import TasksService from '../../../modules/tasks/tasksService';
import fields from '../../../modules/tasks/importer/tasksImporterFields';
import { i18n } from '../../../i18n';

const tasksImporterActions = importerActions(
  'TASKS_IMPORTER',
  selectors,
  TasksService.import,
  fields,
  i18n('entities.tasks.importer.fileName'),
);

export default tasksImporterActions;
