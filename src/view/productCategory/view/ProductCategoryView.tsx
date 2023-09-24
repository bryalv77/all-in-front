import React from 'react';
import { i18n } from '../../../i18n';
import Spinner from '../../../view/shared/Spinner';
import TextViewItem from '../../../view/shared/view/TextViewItem';
import ImagesViewItem from '../../../view/shared/view/ImagesViewItem';
import ProductCategoryViewItem from '../../../view/productCategory/view/ProductCategoryViewItem';

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
        label={i18n(
          'entities.productCategory.fields.parentCategory',
        )}
        value={record.parentCategory}
      />

      <ImagesViewItem
        label={i18n(
          'entities.productCategory.fields.photo',
        )}
        value={record.photo}
      />
    </div>
  );
}

export default ProductCategoryView;
