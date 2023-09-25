import { faSave } from '@fortawesome/free-regular-svg-icons';
import {
  faTimes,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { i18n } from '../../../i18n';
import yupFormSchemas from '../../../modules/shared/yup/yupFormSchemas';
import InputFormItem from '../../../view/shared/form/items/InputFormItem';
import TextAreaFormItem from '../../../view/shared/form/items/TextAreaFormItem';
import UserAutocompleteFormItem from '../../../view/user/autocomplete/UserAutocompleteFormItem';
import moment from 'moment';
import DatePickerFormItem from '../../../view/shared/form/items/DatePickerFormItem';
import Storage from '../../../security/storage';
import FilesFormItem from '../../../view/shared/form/items/FilesFormItem';
import CategoryAutocompleteFormItem from '../../../view/category/autocomplete/CategoryAutocompleteFormItem';
import BankAutocompleteFormItem from '../../../view/bank/autocomplete/BankAutocompleteFormItem';
import * as yup from 'yup';

const schema = yup.object().shape({
  fintonicId: yupFormSchemas.string(
    i18n('entities.operation.fields.fintonicId'),
    {},
  ),
  description: yupFormSchemas.string(
    i18n('entities.operation.fields.description'),
    {},
  ),
  reference: yupFormSchemas.string(
    i18n('entities.operation.fields.reference'),
    {},
  ),
  note: yupFormSchemas.string(
    i18n('entities.operation.fields.note'),
    {},
  ),
  userDescription: yupFormSchemas.string(
    i18n('entities.operation.fields.userDescription'),
    {},
  ),
  quantity: yupFormSchemas.decimal(
    i18n('entities.operation.fields.quantity'),
    {},
  ),
  valueDate: yupFormSchemas.date(
    i18n('entities.operation.fields.valueDate'),
    {},
  ),
  operationDate: yupFormSchemas.date(
    i18n('entities.operation.fields.operationDate'),
    {},
  ),
  cleanNote: yupFormSchemas.string(
    i18n('entities.operation.fields.cleanNote'),
    {},
  ),
  cleanUserDescription: yupFormSchemas.string(
    i18n('entities.operation.fields.cleanUserDescription'),
    {},
  ),
  primaryDisplay: yupFormSchemas.string(
    i18n('entities.operation.fields.primaryDisplay'),
    {},
  ),
  secondaryDisplay: yupFormSchemas.string(
    i18n('entities.operation.fields.secondaryDisplay'),
    {},
  ),
  categoryId: yupFormSchemas.relationToOne(
    i18n('entities.operation.fields.categoryId'),
    {},
  ),
  bankId: yupFormSchemas.relationToOne(
    i18n('entities.operation.fields.bankId'),
    {},
  ),
  receipt: yupFormSchemas.files(
    i18n('entities.operation.fields.receipt'),
    {},
  ),
  userId: yupFormSchemas.relationToOne(
    i18n('entities.operation.fields.userId'),
    {},
  ),
});

function OperationForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      fintonicId: record.fintonicId,
      description: record.description,
      reference: record.reference,
      note: record.note,
      userDescription: record.userDescription,
      quantity: record.quantity,
      valueDate: record.valueDate
        ? moment(record.valueDate, 'YYYY-MM-DD').toDate()
        : null,
      operationDate: record.operationDate
        ? moment(
            record.operationDate,
            'YYYY-MM-DD',
          ).toDate()
        : null,
      cleanNote: record.cleanNote,
      cleanUserDescription: record.cleanUserDescription,
      primaryDisplay: record.primaryDisplay,
      secondaryDisplay: record.secondaryDisplay,
      categoryId: record.categoryId,
      bankId: record.bankId,
      receipt: record.receipt || [],
      userId: record.userId,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema) as any,
    mode: 'all',
    defaultValues: initialValues,
  });

  const onSubmit = (values) => {
    props.onSubmit(props.record?.id, values);
  };

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key as any, initialValues[key]);
    });
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="w-full sm:w-md md:w-md lg:w-md">
          <InputFormItem
            name="fintonicId"
            label={i18n(
              'entities.operation.fields.fintonicId',
            )}
            placeholder={i18n(
              'entities.operation.placeholders.fintonicId',
            )}
            hint={i18n(
              'entities.operation.hints.fintonicId',
            )}
            required={false}
            autoFocus
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <TextAreaFormItem
            name="description"
            label={i18n(
              'entities.operation.fields.description',
            )}
            placeholder={i18n(
              'entities.operation.placeholders.description',
            )}
            hint={i18n(
              'entities.operation.hints.description',
            )}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <TextAreaFormItem
            name="reference"
            label={i18n(
              'entities.operation.fields.reference',
            )}
            placeholder={i18n(
              'entities.operation.placeholders.reference',
            )}
            hint={i18n(
              'entities.operation.hints.reference',
            )}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <TextAreaFormItem
            name="note"
            label={i18n('entities.operation.fields.note')}
            placeholder={i18n(
              'entities.operation.placeholders.note',
            )}
            hint={i18n('entities.operation.hints.note')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="userDescription"
            label={i18n(
              'entities.operation.fields.userDescription',
            )}
            placeholder={i18n(
              'entities.operation.placeholders.userDescription',
            )}
            hint={i18n(
              'entities.operation.hints.userDescription',
            )}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="quantity"
            label={i18n(
              'entities.operation.fields.quantity',
            )}
            placeholder={i18n(
              'entities.operation.placeholders.quantity',
            )}
            hint={i18n('entities.operation.hints.quantity')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <DatePickerFormItem
            name="valueDate"
            label={i18n(
              'entities.operation.fields.valueDate',
            )}
            placeholder={i18n(
              'entities.operation.placeholders.valueDate',
            )}
            hint={i18n(
              'entities.operation.hints.valueDate',
            )}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <DatePickerFormItem
            name="operationDate"
            label={i18n(
              'entities.operation.fields.operationDate',
            )}
            placeholder={i18n(
              'entities.operation.placeholders.operationDate',
            )}
            hint={i18n(
              'entities.operation.hints.operationDate',
            )}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <TextAreaFormItem
            name="cleanNote"
            label={i18n(
              'entities.operation.fields.cleanNote',
            )}
            placeholder={i18n(
              'entities.operation.placeholders.cleanNote',
            )}
            hint={i18n(
              'entities.operation.hints.cleanNote',
            )}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <TextAreaFormItem
            name="cleanUserDescription"
            label={i18n(
              'entities.operation.fields.cleanUserDescription',
            )}
            placeholder={i18n(
              'entities.operation.placeholders.cleanUserDescription',
            )}
            hint={i18n(
              'entities.operation.hints.cleanUserDescription',
            )}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <TextAreaFormItem
            name="primaryDisplay"
            label={i18n(
              'entities.operation.fields.primaryDisplay',
            )}
            placeholder={i18n(
              'entities.operation.placeholders.primaryDisplay',
            )}
            hint={i18n(
              'entities.operation.hints.primaryDisplay',
            )}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <TextAreaFormItem
            name="secondaryDisplay"
            label={i18n(
              'entities.operation.fields.secondaryDisplay',
            )}
            placeholder={i18n(
              'entities.operation.placeholders.secondaryDisplay',
            )}
            hint={i18n(
              'entities.operation.hints.secondaryDisplay',
            )}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <CategoryAutocompleteFormItem
            name="categoryId"
            label={i18n(
              'entities.operation.fields.categoryId',
            )}
            placeholder={i18n(
              'entities.operation.placeholders.categoryId',
            )}
            hint={i18n(
              'entities.operation.hints.categoryId',
            )}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <BankAutocompleteFormItem
            name="bankId"
            label={i18n('entities.operation.fields.bankId')}
            placeholder={i18n(
              'entities.operation.placeholders.bankId',
            )}
            hint={i18n('entities.operation.hints.bankId')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <FilesFormItem
            name="receipt"
            label={i18n(
              'entities.operation.fields.receipt',
            )}
            required={false}
            storage={Storage.values.operationReceipt}
            max={undefined}
            formats={undefined}
            hint={i18n('entities.operation.hints.receipt')}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <UserAutocompleteFormItem
            name="userId"
            label={i18n('entities.operation.fields.userId')}
            placeholder={i18n(
              'entities.operation.placeholders.userId',
            )}
            hint={i18n('entities.operation.hints.userId')}
            required={false}
            showCreate={!props.modal}
          />
        </div>

        <div className="pt-4">
          <button
            className="mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            disabled={saveLoading}
            type="button"
            onClick={form.handleSubmit(onSubmit)}
          >
            <FontAwesomeIcon
              className="mr-2"
              icon={faSave}
            />
            {i18n('common.save')}
          </button>

          <button
            disabled={saveLoading}
            onClick={onReset}
            className="mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
            type="button"
          >
            <FontAwesomeIcon
              className="mr-2"
              icon={faUndo}
            />
            {i18n('common.reset')}
          </button>

          {props.onCancel ? (
            <button
              disabled={saveLoading}
              onClick={() => props.onCancel()}
              className="mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
              type="button"
            >
              <FontAwesomeIcon
                className="mr-2"
                icon={faTimes}
              />
              {i18n('common.cancel')}
            </button>
          ) : null}
        </div>
      </form>
    </FormProvider>
  );
}

export default OperationForm;
