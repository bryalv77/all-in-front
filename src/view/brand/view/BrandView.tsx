import React from 'react';
import { i18n } from '../../../i18n';
import Spinner from '../../../view/shared/Spinner';
import TextViewItem from '../../../view/shared/view/TextViewItem';
import ImagesViewItem from '../../../view/shared/view/ImagesViewItem';
import AddressViewItem from '../../../view/address/view/AddressViewItem';

function BrandView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.brand.fields.name')}
        value={record.name}
      />

      <AddressViewItem
        label={i18n('entities.brand.fields.address')}
        value={record.address}
      />

      <TextViewItem
        label={i18n('entities.brand.fields.description')}
        value={record.description}
      />

      <ImagesViewItem
        label={i18n('entities.brand.fields.photo')}
        value={record.photo}
      />

      <TextViewItem
        label={i18n('entities.brand.fields.active')}
        value={
          record.active
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />
    </div>
  );
}

export default BrandView;
