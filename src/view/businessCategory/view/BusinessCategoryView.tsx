import React from 'react';
import { i18n } from '../../../i18n';
import Spinner from '../../../view/shared/Spinner';
import TextViewItem from '../../../view/shared/view/TextViewItem';
import ImagesViewItem from '../../../view/shared/view/ImagesViewItem';
import BusinessCategoryViewItem from '../../../view/businessCategory/view/BusinessCategoryViewItem';

function BusinessCategoryView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n(
          'entities.businessCategory.fields.name',
        )}
        value={record.name}
      />

      <ImagesViewItem
        label={i18n(
          'entities.businessCategory.fields.logo',
        )}
        value={record.logo}
      />

      <BusinessCategoryViewItem
        label={i18n(
          'entities.businessCategory.fields.parentBusinessType',
        )}
        value={record.parentBusinessType}
      />

      <TextViewItem
        label={i18n(
          'entities.businessCategory.fields.description',
        )}
        value={record.description}
      />
    </div>
  );
}

export default BusinessCategoryView;
