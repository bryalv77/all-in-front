import React from 'react';
import { i18n } from 'src/i18n';
import LessonListFilter from 'src/view/lesson/list/LessonListFilter';
import LessonListTable from 'src/view/lesson/list/LessonListTable';
import LessonListToolbar from 'src/view/lesson/list/LessonListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function LessonListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.lesson.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.lesson.list.title')}
        </h1>
        <LessonListToolbar />
        <LessonListFilter />
        <LessonListTable />
      </div>
    </>
  );
}

export default LessonListPage;
