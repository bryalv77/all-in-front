import React from 'react';
import { i18n } from '../../../i18n';
import actions from '../../../modules/courseTransaction/importer/courseTransactionImporterActions';
import fields from '../../../modules/courseTransaction/importer/courseTransactionImporterFields';
import selectors from '../../../modules/courseTransaction/importer/courseTransactionImporterSelectors';
import Breadcrumb from '../../../view/shared/Breadcrumb';
import importerHoc from '../../../view/shared/importer/Importer';

function CourseTransactionImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.courseTransaction.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [
            i18n('entities.courseTransaction.menu'),
            '/course-transaction',
          ],
          [
            i18n(
              'entities.courseTransaction.importer.title',
            ),
          ],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 dark:text-white border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {i18n(
            'entities.courseTransaction.importer.title',
          )}
        </h1>

        <Importer />
      </div>
    </>
  );
}

export default CourseTransactionImportPage;
