import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';

function CategoryView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.category.fields.fintonicId')}
        value={record.fintonicId}
      />

      <TextViewItem
        label={i18n('entities.category.fields.name')}
        value={record.name}
      />

      <TextViewItem
        label={i18n('entities.category.fields.shortname')}
        value={record.shortname}
      />

      <ImagesViewItem
        label={i18n('entities.category.fields.logo')}
        value={record.logo}
      />
    </div>
  );
}

export default CategoryView;
