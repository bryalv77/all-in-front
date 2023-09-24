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
import SwitchFormItem from '../../../view/shared/form/items/SwitchFormItem';
import moment from 'moment';
import DatePickerFormItem from '../../../view/shared/form/items/DatePickerFormItem';
import TeacherAutocompleteFormItem from '../../../view/teacher/autocomplete/TeacherAutocompleteFormItem';
import * as yup from 'yup';

const schema = yup.object().shape({
  teacherId: yupFormSchemas.relationToOne(
    i18n('entities.course.fields.teacherId'),
    {},
  ),
  title: yupFormSchemas.string(
    i18n('entities.course.fields.title'),
    {},
  ),
  description: yupFormSchemas.string(
    i18n('entities.course.fields.description'),
    {},
  ),
  price: yupFormSchemas.decimal(
    i18n('entities.course.fields.price'),
    {},
  ),
  hoursDuration: yupFormSchemas.decimal(
    i18n('entities.course.fields.hoursDuration'),
    {},
  ),
  startDate: yupFormSchemas.date(
    i18n('entities.course.fields.startDate'),
    {},
  ),
  endDate: yupFormSchemas.date(
    i18n('entities.course.fields.endDate'),
    {},
  ),
  level: yupFormSchemas.string(
    i18n('entities.course.fields.level'),
    {},
  ),
  additionalInfo: yupFormSchemas.string(
    i18n('entities.course.fields.additionalInfo'),
    {},
  ),
  active: yupFormSchemas.boolean(
    i18n('entities.course.fields.active'),
    {},
  ),
});

function CourseForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      teacherId: record.teacherId,
      title: record.title,
      description: record.description,
      price: record.price,
      hoursDuration: record.hoursDuration,
      startDate: record.startDate
        ? moment(record.startDate, 'YYYY-MM-DD').toDate()
        : null,
      endDate: record.endDate
        ? moment(record.endDate, 'YYYY-MM-DD').toDate()
        : null,
      level: record.level,
      additionalInfo: record.additionalInfo,
      active: record.active,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues,
  });

  const onSubmit = (values) => {
    props.onSubmit(props.record?.id, values);
  };

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="w-full sm:w-md md:w-md lg:w-md">
          <TeacherAutocompleteFormItem
            name="teacherId"
            label={i18n('entities.course.fields.teacherId')}
            placeholder={i18n(
              'entities.course.placeholders.teacherId',
            )}
            hint={i18n('entities.course.hints.teacherId')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="title"
            label={i18n('entities.course.fields.title')}
            placeholder={i18n(
              'entities.course.placeholders.title',
            )}
            hint={i18n('entities.course.hints.title')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <TextAreaFormItem
            name="description"
            label={i18n(
              'entities.course.fields.description',
            )}
            placeholder={i18n(
              'entities.course.placeholders.description',
            )}
            hint={i18n('entities.course.hints.description')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="price"
            label={i18n('entities.course.fields.price')}
            placeholder={i18n(
              'entities.course.placeholders.price',
            )}
            hint={i18n('entities.course.hints.price')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="hoursDuration"
            label={i18n(
              'entities.course.fields.hoursDuration',
            )}
            placeholder={i18n(
              'entities.course.placeholders.hoursDuration',
            )}
            hint={i18n(
              'entities.course.hints.hoursDuration',
            )}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <DatePickerFormItem
            name="startDate"
            label={i18n('entities.course.fields.startDate')}
            placeholder={i18n(
              'entities.course.placeholders.startDate',
            )}
            hint={i18n('entities.course.hints.startDate')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <DatePickerFormItem
            name="endDate"
            label={i18n('entities.course.fields.endDate')}
            placeholder={i18n(
              'entities.course.placeholders.endDate',
            )}
            hint={i18n('entities.course.hints.endDate')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="level"
            label={i18n('entities.course.fields.level')}
            placeholder={i18n(
              'entities.course.placeholders.level',
            )}
            hint={i18n('entities.course.hints.level')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <TextAreaFormItem
            name="additionalInfo"
            label={i18n(
              'entities.course.fields.additionalInfo',
            )}
            placeholder={i18n(
              'entities.course.placeholders.additionalInfo',
            )}
            hint={i18n(
              'entities.course.hints.additionalInfo',
            )}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SwitchFormItem
            name="active"
            label={i18n('entities.course.fields.active')}
            hint={i18n('entities.course.hints.active')}
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

export default CourseForm;
