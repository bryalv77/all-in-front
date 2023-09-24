import React from 'react';
import { i18n } from '../../../i18n';
import CourseCommentListFilter from '../../../view/courseComment/list/CourseCommentListFilter';
import CourseCommentListTable from '../../../view/courseComment/list/CourseCommentListTable';
import CourseCommentListToolbar from '../../../view/courseComment/list/CourseCommentListToolbar';
import Breadcrumb from '../../../view/shared/Breadcrumb';

function CourseCommentListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.courseComment.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.courseComment.list.title')}
        </h1>
        <CourseCommentListToolbar />
        <CourseCommentListFilter />
        <CourseCommentListTable />
      </div>
    </>
  );
}

export default CourseCommentListPage;
