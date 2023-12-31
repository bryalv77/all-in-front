import {
  faSearch,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { i18n } from '../../../i18n';
import actions from '../../../modules/order/list/orderListActions';
import selectors from '../../../modules/order/list/orderListSelectors';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, FormProvider } from 'react-hook-form';
import yupFilterSchemas from '../../../modules/shared/yup/yupFilterSchemas';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FilterPreview from '../../../view/shared/filter/FilterPreview';
import filterRenders from '../../../modules/shared/filter/filterRenders';
import InputRangeFormItem from '../../../view/shared/form/items/InputRangeFormItem';
import SelectFormItem from '../../../view/shared/form/items/SelectFormItem';
import orderEnumerators from '../../../modules/order/orderEnumerators';
import CustomerAutocompleteFormItem from '../../../view/customer/autocomplete/CustomerAutocompleteFormItem';
import DeliveryMethodAutocompleteFormItem from '../../../view/deliveryMethod/autocomplete/DeliveryMethodAutocompleteFormItem';

const schema = yup.object().shape({
  customer: yupFilterSchemas.relationToOne(
    i18n('entities.order.fields.customer'),
  ),
  status: yupFilterSchemas.enumerator(
    i18n('entities.order.fields.status'),
  ),
  shippingPriceRange: yupFilterSchemas.decimalRange(
    i18n('entities.order.fields.shippingPriceRange'),
  ),
  totalRange: yupFilterSchemas.decimalRange(
    i18n('entities.order.fields.totalRange'),
  ),
  deliver: yupFilterSchemas.relationToOne(
    i18n('entities.order.fields.deliver'),
  ),
});

const emptyValues = {
  customer: null,
  status: null,
  shippingPriceRange: [],
  totalRange: [],
  deliver: null,
};

const previewRenders = {
  customer: {
    label: i18n('entities.order.fields.customer'),
    render: filterRenders.relationToOne(),
  },
  status: {
    label: i18n('entities.order.fields.status'),
    render: filterRenders.enumerator(
      'entities.order.enumerators.status',
    ),
  },
  shippingPriceRange: {
    label: i18n('entities.order.fields.shippingPriceRange'),
    render: filterRenders.decimalRange(),
  },
  totalRange: {
    label: i18n('entities.order.fields.totalRange'),
    render: filterRenders.decimalRange(),
  },
  deliver: {
    label: i18n('entities.order.fields.deliver'),
    render: filterRenders.relationToOne(),
  },
};

function OrderListFilter(props) {
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
    resolver: yupResolver(schema) as any,
    defaultValues: initialValues,
    mode: 'all',
  });

  useEffect(() => {
    dispatch(
      actions.doFetch(
        schema.cast(initialValues),
        rawFilter,
      ) as any,
    );
    // eslint-disable-next-line
  }, [dispatch]);

  const onSubmit = (values) => {
    const rawValues = form.getValues();
    dispatch(actions.doFetch(values, rawValues) as any);
    setExpanded(false);
  };

  const onRemove = (key) => {
    form.setValue(key as any, emptyValues[key]);
    return form.handleSubmit(onSubmit)();
  };

  const onReset = () => {
    Object.keys(emptyValues).forEach((key) => {
      form.setValue(key as any, emptyValues[key]);
    });
    dispatch(actions.doReset() as any);
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
              <CustomerAutocompleteFormItem
                name="customer"
                label={i18n(
                  'entities.order.fields.customer',
                )}
              />
              <SelectFormItem
                name="status"
                label={i18n('entities.order.fields.status')}
                options={orderEnumerators.status.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.order.enumerators.status.${value}`,
                    ),
                  }),
                )}
              />
              <InputRangeFormItem
                name="shippingPriceRange"
                label={i18n(
                  'entities.order.fields.shippingPriceRange',
                )}
              />
              <InputRangeFormItem
                name="totalRange"
                label={i18n(
                  'entities.order.fields.totalRange',
                )}
              />
              <DeliveryMethodAutocompleteFormItem
                name="deliver"
                label={i18n(
                  'entities.order.fields.deliver',
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

export default OrderListFilter;
