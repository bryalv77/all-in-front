import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';
import BusinessCategoryViewItem from 'src/view/businessCategory/view/BusinessCategoryViewItem';

function BusinessCategoryView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.businessCategory.fields.name')}
        value={record.name}
      />

      <ImagesViewItem
        label={i18n('entities.businessCategory.fields.logo')}
        value={record.logo}
      />

      <BusinessCategoryViewItem
        label={i18n('entities.businessCategory.fields.parentBusinessType')}
        value={record.parentBusinessType}
      />

      <TextViewItem
        label={i18n('entities.businessCategory.fields.description')}
        value={record.description}
      />
    </div>
  );
}

export default BusinessCategoryView;
