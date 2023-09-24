import {
  faSearch,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { i18n } from '../../../i18n';
import actions from '../../../modules/address/list/addressListActions';
import selectors from '../../../modules/address/list/addressListSelectors';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, FormProvider } from 'react-hook-form';
import yupFilterSchemas from '../../../modules/shared/yup/yupFilterSchemas';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FilterPreview from '../../../view/shared/filter/FilterPreview';
import filterRenders from '../../../modules/shared/filter/filterRenders';
import InputFormItem from '../../../view/shared/form/items/InputFormItem';
import SelectFormItem from '../../../view/shared/form/items/SelectFormItem';
import CustomerAutocompleteFormItem from '../../../view/customer/autocomplete/CustomerAutocompleteFormItem';
import CityAutocompleteFormItem from '../../../view/city/autocomplete/CityAutocompleteFormItem';
import BusinessAutocompleteFormItem from '../../../view/business/autocomplete/BusinessAutocompleteFormItem';

const schema = yup.object().shape({
  customer: yupFilterSchemas.relationToOne(
    i18n('entities.address.fields.customer'),
  ),
  addressName: yupFilterSchemas.string(
    i18n('entities.address.fields.addressName'),
  ),
  firstLine: yupFilterSchemas.string(
    i18n('entities.address.fields.firstLine'),
  ),
  secondLine: yupFilterSchemas.string(
    i18n('entities.address.fields.secondLine'),
  ),
  zipCode: yupFilterSchemas.string(
    i18n('entities.address.fields.zipCode'),
  ),
  city: yupFilterSchemas.relationToOne(
    i18n('entities.address.fields.city'),
  ),
  phone: yupFilterSchemas.string(
    i18n('entities.address.fields.phone'),
  ),
  business: yupFilterSchemas.relationToOne(
    i18n('entities.address.fields.business'),
  ),
  coordinates: yupFilterSchemas.string(
    i18n('entities.address.fields.coordinates'),
  ),
  urlMap: yupFilterSchemas.string(
    i18n('entities.address.fields.urlMap'),
  ),
  preferred: yupFilterSchemas.boolean(
    i18n('entities.address.fields.preferred'),
  ),
});

const emptyValues = {
  customer: null,
  addressName: null,
  firstLine: null,
  secondLine: null,
  zipCode: null,
  city: null,
  phone: null,
  business: null,
  coordinates: null,
  urlMap: null,
  preferred: null,
};

const previewRenders = {
  customer: {
    label: i18n('entities.address.fields.customer'),
    render: filterRenders.relationToOne(),
  },
  addressName: {
    label: i18n('entities.address.fields.addressName'),
    render: filterRenders.generic(),
  },
  firstLine: {
    label: i18n('entities.address.fields.firstLine'),
    render: filterRenders.generic(),
  },
  secondLine: {
    label: i18n('entities.address.fields.secondLine'),
    render: filterRenders.generic(),
  },
  zipCode: {
    label: i18n('entities.address.fields.zipCode'),
    render: filterRenders.generic(),
  },
  city: {
    label: i18n('entities.address.fields.city'),
    render: filterRenders.relationToOne(),
  },
  phone: {
    label: i18n('entities.address.fields.phone'),
    render: filterRenders.generic(),
  },
  business: {
    label: i18n('entities.address.fields.business'),
    render: filterRenders.relationToOne(),
  },
  coordinates: {
    label: i18n('entities.address.fields.coordinates'),
    render: filterRenders.generic(),
  },
  urlMap: {
    label: i18n('entities.address.fields.urlMap'),
    render: filterRenders.generic(),
  },
  preferred: {
    label: i18n('entities.address.fields.preferred'),
    render: filterRenders.boolean(),
  },
};

function AddressListFilter(props) {
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
              <CustomerAutocompleteFormItem
                name="customer"
                label={i18n(
                  'entities.address.fields.customer',
                )}
              />
              <InputFormItem
                name="addressName"
                label={i18n(
                  'entities.address.fields.addressName',
                )}
              />
              <InputFormItem
                name="firstLine"
                label={i18n(
                  'entities.address.fields.firstLine',
                )}
              />
              <InputFormItem
                name="secondLine"
                label={i18n(
                  'entities.address.fields.secondLine',
                )}
              />
              <InputFormItem
                name="zipCode"
                label={i18n(
                  'entities.address.fields.zipCode',
                )}
              />
              <CityAutocompleteFormItem
                name="city"
                label={i18n('entities.address.fields.city')}
              />
              <InputFormItem
                name="phone"
                label={i18n(
                  'entities.address.fields.phone',
                )}
              />
              <BusinessAutocompleteFormItem
                name="business"
                label={i18n(
                  'entities.address.fields.business',
                )}
              />
              <InputFormItem
                name="coordinates"
                label={i18n(
                  'entities.address.fields.coordinates',
                )}
              />
              <InputFormItem
                name="urlMap"
                label={i18n(
                  'entities.address.fields.urlMap',
                )}
              />
              <SelectFormItem
                name="preferred"
                label={i18n(
                  'entities.address.fields.preferred',
                )}
                options={[
                  {
                    value: true,
                    label: i18n('common.yes'),
                  },
                  {
                    value: false,
                    label: i18n('common.no'),
                  },
                ]}
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

export default AddressListFilter;
