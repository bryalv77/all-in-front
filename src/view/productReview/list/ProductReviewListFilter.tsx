import {
  faSearch,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { i18n } from '../../../i18n';
import actions from '../../../modules/productReview/list/productReviewListActions';
import selectors from '../../../modules/productReview/list/productReviewListSelectors';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, FormProvider } from 'react-hook-form';
import yupFilterSchemas from '../../../modules/shared/yup/yupFilterSchemas';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FilterPreview from '../../../view/shared/filter/FilterPreview';
import filterRenders from '../../../modules/shared/filter/filterRenders';
import InputFormItem from '../../../view/shared/form/items/InputFormItem';
import InputRangeFormItem from '../../../view/shared/form/items/InputRangeFormItem';
import ProductAutocompleteFormItem from '../../../view/product/autocomplete/ProductAutocompleteFormItem';
import CustomerAutocompleteFormItem from '../../../view/customer/autocomplete/CustomerAutocompleteFormItem';

const schema = yup.object().shape({
  comment: yupFilterSchemas.string(
    i18n('entities.productReview.fields.comment'),
  ),
  productId: yupFilterSchemas.relationToOne(
    i18n('entities.productReview.fields.productId'),
  ),
  customerId: yupFilterSchemas.relationToOne(
    i18n('entities.productReview.fields.customerId'),
  ),
  ratingRange: yupFilterSchemas.decimalRange(
    i18n('entities.productReview.fields.ratingRange'),
  ),
});

const emptyValues = {
  comment: null,
  productId: null,
  customerId: null,
  ratingRange: [],
};

const previewRenders = {
  comment: {
    label: i18n('entities.productReview.fields.comment'),
    render: filterRenders.generic(),
  },
  productId: {
    label: i18n('entities.productReview.fields.productId'),
    render: filterRenders.relationToOne(),
  },
  customerId: {
    label: i18n('entities.productReview.fields.customerId'),
    render: filterRenders.relationToOne(),
  },
  ratingRange: {
    label: i18n(
      'entities.productReview.fields.ratingRange',
    ),
    render: filterRenders.decimalRange(),
  },
};

function ProductReviewListFilter(props) {
  const rawFilter = useSelector(selectors.selectRawFilter);
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);

  const [initialValues] = useState(() => {
    return {
      ...emptyValues,
      ...rawFilter,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
    mode: 'all',
  });

  useEffect(() => {
    dispatch(
      actions.doFetch(
        schema.cast(initialValues),
        rawFilter,
      ),
    );
    // eslint-disable-next-line
  }, [dispatch]);

  const onSubmit = (values) => {
    const rawValues = form.getValues();
    dispatch(actions.doFetch(values, rawValues));
    setExpanded(false);
  };

  const onRemove = (key) => {
    form.setValue(key, emptyValues[key]);
    return form.handleSubmit(onSubmit)();
  };

  const onReset = () => {
    Object.keys(emptyValues).forEach((key) => {
      form.setValue(key, emptyValues[key]);
    });
    dispatch(actions.doReset());
    setExpanded(false);
  };

  return (
    <div className="border-gray-200 dark:border-gray-600 border rounded-md mb-2">
      <FilterPreview
        onClick={() => {
          setExpanded(!expanded);
        }}
        renders={previewRenders}
        values={rawFilter}
        expanded={expanded}
        onRemove={onRemove}
      />
      <div className={`${expanded ? 'block' : 'hidden'}`}>
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="pl-4 pr-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <InputFormItem
                name="comment"
                label={i18n(
                  'entities.productReview.fields.comment',
                )}
              />
              <ProductAutocompleteFormItem
                name="productId"
                label={i18n(
                  'entities.productReview.fields.productId',
                )}
              />
              <CustomerAutocompleteFormItem
                name="customerId"
                label={i18n(
                  'entities.productReview.fields.customerId',
                )}
              />
              <InputRangeFormItem
                name="ratingRange"
                label={i18n(
                  'entities.productReview.fields.ratingRange',
                )}
              />
            </div>

            <div className="px-4 py-2 text-right">
              <button
                className="mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                type="submit"
                disabled={props.loading}
              >
                <FontAwesomeIcon
                  className="mr-2"
                  icon={faSearch}
                />
                {i18n('common.search')}
              </button>
              <button
                className="mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                type="button"
                onClick={onReset}
                disabled={props.loading}
              >
                <FontAwesomeIcon
                  className="mr-2"
                  icon={faUndo}
                />
                {i18n('common.reset')}
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export default ProductReviewListFilter;
