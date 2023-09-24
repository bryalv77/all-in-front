import React from 'react';
import { i18n } from '../../../i18n';
import TaskListListFilter from '../../../view/taskList/list/TaskListListFilter';
import TaskListListTable from '../../../view/taskList/list/TaskListListTable';
import TaskListListToolbar from '../../../view/taskList/list/TaskListListToolbar';
import Breadcrumb from '../../../view/shared/Breadcrumb';

function TaskListListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.taskList.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.taskList.list.title')}
        </h1>
        <TaskListListToolbar />
        <TaskListListFilter />
        <TaskListListTable />
      </div>
    </>
  );
}

export default TaskListListPage;
