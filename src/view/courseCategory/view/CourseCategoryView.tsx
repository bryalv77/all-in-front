import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';
import CourseCategoryViewItem from 'src/view/courseCategory/view/CourseCategoryViewItem';

function CourseCategoryView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.courseCategory.fields.name')}
        value={record.name}
      />

      <ImagesViewItem
        label={i18n('entities.courseCategory.fields.photo')}
        value={record.photo}
      />

      <CourseCategoryViewItem
        label={i18n('entities.courseCategory.fields.parentCategory')}
        value={record.parentCategory}
      />
    </div>
  );
}

export default CourseCategoryView;
