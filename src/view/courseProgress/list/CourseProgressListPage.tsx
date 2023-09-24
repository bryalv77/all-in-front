import React from 'react';
import { i18n } from 'src/i18n';
import CourseProgressListFilter from 'src/view/courseProgress/list/CourseProgressListFilter';
import CourseProgressListTable from 'src/view/courseProgress/list/CourseProgressListTable';
import CourseProgressListToolbar from 'src/view/courseProgress/list/CourseProgressListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function CourseProgressListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.courseProgress.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.courseProgress.list.title')}
        </h1>
        <CourseProgressListToolbar />
        <CourseProgressListFilter />
        <CourseProgressListTable />
      </div>
    </>
  );
}

export default CourseProgressListPage;
