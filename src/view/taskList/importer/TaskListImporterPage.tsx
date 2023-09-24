import React from 'react';
import { i18n } from '../../../i18n';
import actions from '../../../modules/taskList/importer/taskListImporterActions';
import fields from '../../../modules/taskList/importer/taskListImporterFields';
import selectors from '../../../modules/taskList/importer/taskListImporterSelectors';
import Breadcrumb from '../../../view/shared/Breadcrumb';
import importerHoc from '../../../view/shared/importer/Importer';

function TaskListImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.taskList.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.taskList.menu'), '/task-list'],
          [i18n('entities.taskList.importer.title')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 dark:text-white border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {i18n('entities.taskList.importer.title')}
        </h1>

        <Importer />
      </div>
    </>
  );
}

export default TaskListImportPage;
