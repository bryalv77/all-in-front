import React from 'react';
import { i18n } from 'src/i18n';
import CourseEnrollmentListFilter from 'src/view/courseEnrollment/list/CourseEnrollmentListFilter';
import CourseEnrollmentListTable from 'src/view/courseEnrollment/list/CourseEnrollmentListTable';
import CourseEnrollmentListToolbar from 'src/view/courseEnrollment/list/CourseEnrollmentListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function CourseEnrollmentListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.courseEnrollment.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.courseEnrollment.list.title')}
        </h1>
        <CourseEnrollmentListToolbar />
        <CourseEnrollmentListFilter />
        <CourseEnrollmentListTable />
      </div>
    </>
  );
}

export default CourseEnrollmentListPage;
