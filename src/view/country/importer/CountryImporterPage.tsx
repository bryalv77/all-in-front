import React from 'react';
import { i18n } from '../../../i18n';
import actions from '../../../modules/country/importer/countryImporterActions';
import fields from '../../../modules/country/importer/countryImporterFields';
import selectors from '../../../modules/country/importer/countryImporterSelectors';
import Breadcrumb from '../../../view/shared/Breadcrumb';
import importerHoc from '../../../view/shared/importer/Importer';

function CountryImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.country.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.country.menu'), '/country'],
          [i18n('entities.country.importer.title')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 dark:text-white border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {i18n('entities.country.importer.title')}
        </h1>

        <Importer />
      </div>
    </>
  );
}

export default CountryImportPage;
