import React from 'react';
import { i18n } from '../../../i18n';
import actions from '../../../modules/album/importer/albumImporterActions';
import fields from '../../../modules/album/importer/albumImporterFields';
import selectors from '../../../modules/album/importer/albumImporterSelectors';
import Breadcrumb from '../../../view/shared/Breadcrumb';
import importerHoc from '../../../view/shared/importer/Importer';

function AlbumImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.album.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.album.menu'), '/album'],
          [i18n('entities.album.importer.title')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 dark:text-white border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {i18n('entities.album.importer.title')}
        </h1>

        <Importer />
      </div>
    </>
  );
}

export default AlbumImportPage;
