import React from 'react';
import { i18n } from 'src/i18n';
import AddressListFilter from 'src/view/address/list/AddressListFilter';
import AddressListTable from 'src/view/address/list/AddressListTable';
import AddressListToolbar from 'src/view/address/list/AddressListToolbar';
import Breadcrumb from 'src/view/shared/Breadcrumb';

function AddressListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.address.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.address.list.title')}
        </h1>
        <AddressListToolbar />
        <AddressListFilter />
        <AddressListTable />
      </div>
    </>
  );
}

export default AddressListPage;
