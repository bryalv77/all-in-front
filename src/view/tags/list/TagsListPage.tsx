import React from 'react';
import { i18n } from '../../../i18n';
import TagsListFilter from '../../../view/tags/list/TagsListFilter';
import TagsListTable from '../../../view/tags/list/TagsListTable';
import TagsListToolbar from '../../../view/tags/list/TagsListToolbar';
import Breadcrumb from '../../../view/shared/Breadcrumb';

function TagsListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.tags.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.tags.list.title')}
        </h1>
        <TagsListToolbar />
        <TagsListFilter />
        <TagsListTable />
      </div>
    </>
  );
}

export default TagsListPage;
