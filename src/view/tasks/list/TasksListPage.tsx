import React from 'react';
import { i18n } from 'src/i18n';
import TasksListFilter from 'src/view/tasks/list/TasksListFilter';
import TasksListTable from 'src/view/tasks/list/TasksListTable';
import TasksListToolbar from 'src/view/tasks/list/TasksListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function TasksListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.tasks.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.tasks.list.title')}
        </h1>
        <TasksListToolbar />
        <TasksListFilter />
        <TasksListTable />
      </div>
    </>
  );
}

export default TasksListPage;
