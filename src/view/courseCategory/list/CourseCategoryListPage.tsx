import React from 'react';
import { i18n } from '../../../i18n';
import CourseCategoryListFilter from '../../../view/courseCategory/list/CourseCategoryListFilter';
import CourseCategoryListTable from '../../../view/courseCategory/list/CourseCategoryListTable';
import CourseCategoryListToolbar from '../../../view/courseCategory/list/CourseCategoryListToolbar';
import Breadcrumb from '../../../view/shared/Breadcrumb';

function CourseCategoryListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.courseCategory.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.courseCategory.list.title')}
        </h1>
        <CourseCategoryListToolbar />
        <CourseCategoryListFilter />
        <CourseCategoryListTable />
      </div>
    </>
  );
}

export default CourseCategoryListPage;
