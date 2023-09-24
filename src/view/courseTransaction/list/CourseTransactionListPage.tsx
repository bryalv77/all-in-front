import React from 'react';
import { i18n } from 'src/i18n';
import CourseTransactionListFilter from 'src/view/courseTransaction/list/CourseTransactionListFilter';
import CourseTransactionListTable from 'src/view/courseTransaction/list/CourseTransactionListTable';
import CourseTransactionListToolbar from 'src/view/courseTransaction/list/CourseTransactionListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function CourseTransactionListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.courseTransaction.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.courseTransaction.list.title')}
        </h1>
        <CourseTransactionListToolbar />
        <CourseTransactionListFilter />
        <CourseTransactionListTable />
      </div>
    </>
  );
}

export default CourseTransactionListPage;
