import React from 'react';
import { i18n } from '../../../i18n';
import actions from '../../../modules/artist/importer/artistImporterActions';
import fields from '../../../modules/artist/importer/artistImporterFields';
import selectors from '../../../modules/artist/importer/artistImporterSelectors';
import Breadcrumb from '../../../view/shared/Breadcrumb';
import importerHoc from '../../../view/shared/importer/Importer';

function ArtistImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.artist.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.artist.menu'), '/artist'],
          [i18n('entities.artist.importer.title')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 dark:text-white border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {i18n('entities.artist.importer.title')}
        </h1>

        <Importer />
      </div>
    </>
  );
}

export default ArtistImportPage;
