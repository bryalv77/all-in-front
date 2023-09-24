import React from 'react';
import { i18n } from '../../../i18n';
import SubTasksListFilter from '../../../view/subTasks/list/SubTasksListFilter';
import SubTasksListTable from '../../../view/subTasks/list/SubTasksListTable';
import SubTasksListToolbar from '../../../view/subTasks/list/SubTasksListToolbar';
import Breadcrumb from '../../../view/shared/Breadcrumb';

function SubTasksListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.subTasks.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.subTasks.list.title')}
        </h1>
        <SubTasksListToolbar />
        <SubTasksListFilter />
        <SubTasksListTable />
      </div>
    </>
  );
}

export default SubTasksListPage;
