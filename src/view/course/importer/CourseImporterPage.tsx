import React from 'react';
import { i18n } from '../../../i18n';
import actions from '../../../modules/course/importer/courseImporterActions';
import fields from '../../../modules/course/importer/courseImporterFields';
import selectors from '../../../modules/course/importer/courseImporterSelectors';
import Breadcrumb from '../../../view/shared/Breadcrumb';
import importerHoc from '../../../view/shared/importer/Importer';

function CourseImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.course.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.course.menu'), '/course'],
          [i18n('entities.course.importer.title')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 dark:text-white border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {i18n('entities.course.importer.title')}
        </h1>

        <Importer />
      </div>
    </>
  );
}

export default CourseImportPage;
