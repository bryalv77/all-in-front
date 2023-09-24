import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';
import ProductCategoryViewItem from 'src/view/productCategory/view/ProductCategoryViewItem';
import BrandViewItem from 'src/view/brand/view/BrandViewItem';

function ProductView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.product.fields.name')}
        value={record.name}
      />

      <TextViewItem
        label={i18n('entities.product.fields.description')}
        value={record.description}
      />

      {record.unitPrice != null && <TextViewItem
        label={i18n('entities.product.fields.unitPrice')}
        value={Number(record.unitPrice).toFixed(2)}
      />}

      <ImagesViewItem
        label={i18n('entities.product.fields.photos')}
        value={record.photos}
      />

      <ProductCategoryViewItem
        label={i18n('entities.product.fields.category')}
        value={record.category}
      />

      <TextViewItem
        label={i18n('entities.product.fields.stock')}
        value={record.stock}
      />

      <BrandViewItem
        label={i18n('entities.product.fields.brandId')}
        value={record.brandId}
      />

      <TextViewItem
        label={i18n('entities.product.fields.active')}
        value={
          record.active
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />
    </div>
  );
}

export default ProductView;
