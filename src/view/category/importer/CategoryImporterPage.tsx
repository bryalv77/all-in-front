import React from 'react';
import { i18n } from '../../../i18n';
import actions from '../../../modules/category/importer/categoryImporterActions';
import fields from '../../../modules/category/importer/categoryImporterFields';
import selectors from '../../../modules/category/importer/categoryImporterSelectors';
import Breadcrumb from '../../../view/shared/Breadcrumb';
import importerHoc from '../../../view/shared/importer/Importer';

function CategoryImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.category.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.category.menu'), '/category'],
          [i18n('entities.category.importer.title')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 dark:text-white border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {i18n('entities.category.importer.title')}
        </h1>

        <Importer />
      </div>
    </>
  );
}

export default CategoryImportPage;
