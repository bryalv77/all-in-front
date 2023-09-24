import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/tasks/importer/tasksImporterActions';
import fields from 'src/modules/tasks/importer/tasksImporterFields';
import selectors from 'src/modules/tasks/importer/tasksImporterSelectors';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';

function TasksImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.tasks.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.tasks.menu'), '/tasks'],
          [i18n('entities.tasks.importer.title')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 dark:text-white border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {i18n('entities.tasks.importer.title')}
        </h1>

        <Importer />
      </div>
    </>
  );
}

export default TasksImportPage;
