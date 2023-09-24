import React from 'react';
import { i18n } from '../../../i18n';
import CategoryCourseRelationListFilter from '../../../view/categoryCourseRelation/list/CategoryCourseRelationListFilter';
import CategoryCourseRelationListTable from '../../../view/categoryCourseRelation/list/CategoryCourseRelationListTable';
import CategoryCourseRelationListToolbar from '../../../view/categoryCourseRelation/list/CategoryCourseRelationListToolbar';
import Breadcrumb from '../../../view/shared/Breadcrumb';

function CategoryCourseRelationListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.categoryCourseRelation.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n(
            'entities.categoryCourseRelation.list.title',
          )}
        </h1>
        <CategoryCourseRelationListToolbar />
        <CategoryCourseRelationListFilter />
        <CategoryCourseRelationListTable />
      </div>
    </>
  );
}

export default CategoryCourseRelationListPage;
