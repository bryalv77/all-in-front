import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import CustomerViewItem from 'src/view/customer/view/CustomerViewItem';
import CityViewItem from 'src/view/city/view/CityViewItem';
import BusinessViewItem from 'src/view/business/view/BusinessViewItem';

function AddressView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <CustomerViewItem
        label={i18n('entities.address.fields.customer')}
        value={record.customer}
      />

      <TextViewItem
        label={i18n('entities.address.fields.addressName')}
        value={record.addressName}
      />

      <TextViewItem
        label={i18n('entities.address.fields.firstLine')}
        value={record.firstLine}
      />

      <TextViewItem
        label={i18n('entities.address.fields.secondLine')}
        value={record.secondLine}
      />

      <TextViewItem
        label={i18n('entities.address.fields.zipCode')}
        value={record.zipCode}
      />

      <CityViewItem
        label={i18n('entities.address.fields.city')}
        value={record.city}
      />

      <TextViewItem
        label={i18n('entities.address.fields.phone')}
        value={record.phone}
      />

      <BusinessViewItem
        label={i18n('entities.address.fields.business')}
        value={record.business}
      />

      <TextViewItem
        label={i18n('entities.address.fields.coordinates')}
        value={record.coordinates}
      />

      <TextViewItem
        label={i18n('entities.address.fields.urlMap')}
        value={record.urlMap}
      />

      <TextViewItem
        label={i18n('entities.address.fields.preferred')}
        value={
          record.preferred
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />
    </div>
  );
}

export default AddressView;
