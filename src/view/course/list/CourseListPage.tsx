import React from 'react';
import { i18n } from 'src/i18n';
import CourseListFilter from 'src/view/course/list/CourseListFilter';
import CourseListTable from 'src/view/course/list/CourseListTable';
import CourseListToolbar from 'src/view/course/list/CourseListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function CourseListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.course.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.course.list.title')}
        </h1>
        <CourseListToolbar />
        <CourseListFilter />
        <CourseListTable />
      </div>
    </>
  );
}

export default CourseListPage;
