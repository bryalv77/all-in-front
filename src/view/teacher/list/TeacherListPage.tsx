import React from 'react';
import { i18n } from 'src/i18n';
import TeacherListFilter from 'src/view/teacher/list/TeacherListFilter';
import TeacherListTable from 'src/view/teacher/list/TeacherListTable';
import TeacherListToolbar from 'src/view/teacher/list/TeacherListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function TeacherListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.teacher.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.teacher.list.title')}
        </h1>
        <TeacherListToolbar />
        <TeacherListFilter />
        <TeacherListTable />
      </div>
    </>
  );
}

export default TeacherListPage;
