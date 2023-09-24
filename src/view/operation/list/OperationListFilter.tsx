import {
  faSearch,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { i18n } from '../../../i18n';
import actions from '../../../modules/operation/list/operationListActions';
import selectors from '../../../modules/operation/list/operationListSelectors';
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
import UserAutocompleteFormItem from '../../../view/user/autocomplete/UserAutocompleteFormItem';
import DatePickerRangeFormItem from '../../../view/shared/form/items/DatePickerRangeFormItem';
import CategoryAutocompleteFormItem from '../../../view/category/autocomplete/CategoryAutocompleteFormItem';
import BankAutocompleteFormItem from '../../../view/bank/autocomplete/BankAutocompleteFormItem';

const schema = yup.object().shape({
  fintonicId: yupFilterSchemas.string(
    i18n('entities.operation.fields.fintonicId'),
  ),
  description: yupFilterSchemas.string(
    i18n('entities.operation.fields.description'),
  ),
  reference: yupFilterSchemas.string(
    i18n('entities.operation.fields.reference'),
  ),
  note: yupFilterSchemas.string(
    i18n('entities.operation.fields.note'),
  ),
  userDescription: yupFilterSchemas.string(
    i18n('entities.operation.fields.userDescription'),
  ),
  quantityRange: yupFilterSchemas.decimalRange(
    i18n('entities.operation.fields.quantityRange'),
  ),
  valueDateRange: yupFilterSchemas.dateRange(
    i18n('entities.operation.fields.valueDateRange'),
  ),
  operationDateRange: yupFilterSchemas.dateRange(
    i18n('entities.operation.fields.operationDateRange'),
  ),
  cleanNote: yupFilterSchemas.string(
    i18n('entities.operation.fields.cleanNote'),
  ),
  cleanUserDescription: yupFilterSchemas.string(
    i18n('entities.operation.fields.cleanUserDescription'),
  ),
  primaryDisplay: yupFilterSchemas.string(
    i18n('entities.operation.fields.primaryDisplay'),
  ),
  secondaryDisplay: yupFilterSchemas.string(
    i18n('entities.operation.fields.secondaryDisplay'),
  ),
  categoryId: yupFilterSchemas.relationToOne(
    i18n('entities.operation.fields.categoryId'),
  ),
  bankId: yupFilterSchemas.relationToOne(
    i18n('entities.operation.fields.bankId'),
  ),
  userId: yupFilterSchemas.relationToOne(
    i18n('entities.operation.fields.userId'),
  ),
});

const emptyValues = {
  fintonicId: null,
  description: null,
  reference: null,
  note: null,
  userDescription: null,
  quantityRange: [],
  valueDateRange: [],
  operationDateRange: [],
  cleanNote: null,
  cleanUserDescription: null,
  primaryDisplay: null,
  secondaryDisplay: null,
  categoryId: null,
  bankId: null,
  userId: null,
};

const previewRenders = {
  fintonicId: {
    label: i18n('entities.operation.fields.fintonicId'),
    render: filterRenders.generic(),
  },
  description: {
    label: i18n('entities.operation.fields.description'),
    render: filterRenders.generic(),
  },
  reference: {
    label: i18n('entities.operation.fields.reference'),
    render: filterRenders.generic(),
  },
  note: {
    label: i18n('entities.operation.fields.note'),
    render: filterRenders.generic(),
  },
  userDescription: {
    label: i18n(
      'entities.operation.fields.userDescription',
    ),
    render: filterRenders.generic(),
  },
  quantityRange: {
    label: i18n('entities.operation.fields.quantityRange'),
    render: filterRenders.decimalRange(),
  },
  valueDateRange: {
    label: i18n('entities.operation.fields.valueDateRange'),
    render: filterRenders.dateRange(),
  },
  operationDateRange: {
    label: i18n(
      'entities.operation.fields.operationDateRange',
    ),
    render: filterRenders.dateRange(),
  },
  cleanNote: {
    label: i18n('entities.operation.fields.cleanNote'),
    render: filterRenders.generic(),
  },
  cleanUserDescription: {
    label: i18n(
      'entities.operation.fields.cleanUserDescription',
    ),
    render: filterRenders.generic(),
  },
  primaryDisplay: {
    label: i18n('entities.operation.fields.primaryDisplay'),
    render: filterRenders.generic(),
  },
  secondaryDisplay: {
    label: i18n(
      'entities.operation.fields.secondaryDisplay',
    ),
    render: filterRenders.generic(),
  },
  categoryId: {
    label: i18n('entities.operation.fields.categoryId'),
    render: filterRenders.relationToOne(),
  },
  bankId: {
    label: i18n('entities.operation.fields.bankId'),
    render: filterRenders.relationToOne(),
  },
  userId: {
    label: i18n('entities.operation.fields.userId'),
    render: filterRenders.relationToOne(),
  },
};

function OperationListFilter(props) {
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
                name="fintonicId"
                label={i18n(
                  'entities.operation.fields.fintonicId',
                )}
              />
              <InputFormItem
                name="description"
                label={i18n(
                  'entities.operation.fields.description',
                )}
              />
              <InputFormItem
                name="reference"
                label={i18n(
                  'entities.operation.fields.reference',
                )}
              />
              <InputFormItem
                name="note"
                label={i18n(
                  'entities.operation.fields.note',
                )}
              />
              <InputFormItem
                name="userDescription"
                label={i18n(
                  'entities.operation.fields.userDescription',
                )}
              />
              <InputRangeFormItem
                name="quantityRange"
                label={i18n(
                  'entities.operation.fields.quantityRange',
                )}
              />
              <DatePickerRangeFormItem
                name="valueDateRange"
                label={i18n(
                  'entities.operation.fields.valueDateRange',
                )}
              />
              <DatePickerRangeFormItem
                name="operationDateRange"
                label={i18n(
                  'entities.operation.fields.operationDateRange',
                )}
              />
              <InputFormItem
                name="cleanNote"
                label={i18n(
                  'entities.operation.fields.cleanNote',
                )}
              />
              <InputFormItem
                name="cleanUserDescription"
                label={i18n(
                  'entities.operation.fields.cleanUserDescription',
                )}
              />
              <InputFormItem
                name="primaryDisplay"
                label={i18n(
                  'entities.operation.fields.primaryDisplay',
                )}
              />
              <InputFormItem
                name="secondaryDisplay"
                label={i18n(
                  'entities.operation.fields.secondaryDisplay',
                )}
              />
              <CategoryAutocompleteFormItem
                name="categoryId"
                label={i18n(
                  'entities.operation.fields.categoryId',
                )}
              />
              <BankAutocompleteFormItem
                name="bankId"
                label={i18n(
                  'entities.operation.fields.bankId',
                )}
              />
              <UserAutocompleteFormItem
                name="userId"
                label={i18n(
                  'entities.operation.fields.userId',
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

export default OperationListFilter;
