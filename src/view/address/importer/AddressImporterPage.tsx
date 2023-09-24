import React from 'react';
import { i18n } from '../../../i18n';
import actions from '../../../modules/address/importer/addressImporterActions';
import fields from '../../../modules/address/importer/addressImporterFields';
import selectors from '../../../modules/address/importer/addressImporterSelectors';
import Breadcrumb from '../../../view/shared/Breadcrumb';
import importerHoc from '../../../view/shared/importer/Importer';

function AddressImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.address.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.address.menu'), '/address'],
          [i18n('entities.address.importer.title')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 dark:text-white border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {i18n('entities.address.importer.title')}
        </h1>

        <Importer />
      </div>
    </>
  );
}

export default AddressImportPage;
