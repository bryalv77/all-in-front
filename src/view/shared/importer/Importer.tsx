import React from 'react';
import { useSelector } from 'react-redux';
import importerFormHoc from '../../../view/shared/importer/ImporterForm';
import importerListHoc from '../../../view/shared/importer/ImporterList';
import importerStatusHoc from '../../../view/shared/importer/ImporterStatus';
import importerToolbarHoc from '../../../view/shared/importer/ImporterToolbar';

export default (
  selectors,
  actions,
  fields,
  templateHelp,
) => {
  const ImporterToolbar = importerToolbarHoc(
    selectors,
    actions,
    fields,
    templateHelp,
  );
  const ImporterStatus = importerStatusHoc(selectors);
  const ImporterList = importerListHoc(
    selectors,
    actions,
    fields,
  );
  const ImporterForm = importerFormHoc(selectors, actions);

  function Importer() {
    const hasRows = useSelector(selectors.selectHasRows);

    return (
      <>
        <ImporterToolbar />
        <ImporterStatus />
        <div className="mt-2">
          {hasRows ? <ImporterList /> : <ImporterForm />}
        </div>
      </>
    );
  }

  return Importer;
};
