import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/followers/importer/followersImporterActions';
import fields from 'src/modules/followers/importer/followersImporterFields';
import selectors from 'src/modules/followers/importer/followersImporterSelectors';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';

function FollowersImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.followers.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.followers.menu'), '/followers'],
          [i18n('entities.followers.importer.title')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 dark:text-white border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {i18n('entities.followers.importer.title')}
        </h1>

        <Importer />
      </div>
    </>
  );
}

export default FollowersImportPage;
