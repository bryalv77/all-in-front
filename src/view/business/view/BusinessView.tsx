import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';
import BusinessCategoryViewItem from 'src/view/businessCategory/view/BusinessCategoryViewItem';
import AddressViewItem from 'src/view/address/view/AddressViewItem';

function BusinessView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.business.fields.name')}
        value={record.name}
      />

      <TextViewItem
        label={i18n('entities.business.fields.description')}
        value={record.description}
      />

      <ImagesViewItem
        label={i18n('entities.business.fields.logo')}
        value={record.logo}
      />

      <BusinessCategoryViewItem
        label={i18n('entities.business.fields.category')}
        value={record.category}
      />

      <AddressViewItem
        label={i18n('entities.business.fields.address')}
        value={record.address}
      />

      <UserViewItem
        label={i18n('entities.business.fields.owner')}
        value={record.owner}
      />

      <TextViewItem
        label={i18n('entities.business.fields.active')}
        value={
          record.active
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />
    </div>
  );
}

export default BusinessView;
