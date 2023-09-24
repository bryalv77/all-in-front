import React from 'react';
import { i18n } from '../../../i18n';
import TaskTagsListFilter from '../../../view/taskTags/list/TaskTagsListFilter';
import TaskTagsListTable from '../../../view/taskTags/list/TaskTagsListTable';
import TaskTagsListToolbar from '../../../view/taskTags/list/TaskTagsListToolbar';
import Breadcrumb from '../../../view/shared/Breadcrumb';

function TaskTagsListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.taskTags.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.taskTags.list.title')}
        </h1>
        <TaskTagsListToolbar />
        <TaskTagsListFilter />
        <TaskTagsListTable />
      </div>
    </>
  );
}

export default TaskTagsListPage;
