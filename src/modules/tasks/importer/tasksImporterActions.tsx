import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/tasks/importer/tasksImporterSelectors';
import TasksService from 'src/modules/tasks/tasksService';
import fields from 'src/modules/tasks/importer/tasksImporterFields';
import { i18n } from 'src/i18n';

const tasksImporterActions = importerActions(
  'TASKS_IMPORTER',
  selectors,
  TasksService.import,
  fields,
  i18n('entities.tasks.importer.fileName'),
);

export default tasksImporterActions;