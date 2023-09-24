import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';
import ProductCategoryViewItem from 'src/view/productCategory/view/ProductCategoryViewItem';

function ProductCategoryView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.productCategory.fields.name')}
        value={record.name}
      />

      <ProductCategoryViewItem
        label={i18n('entities.productCategory.fields.parentCategory')}
        value={record.parentCategory}
      />

      <ImagesViewItem
        label={i18n('entities.productCategory.fields.photo')}
        value={record.photo}
      />
    </div>
  );
}

export default ProductCategoryView;
