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
import TextAreaFormItem from '../../../view/shared/form/items/TextAreaFormItem';
import SelectFormItem from '../../../view/shared/form/items/SelectFormItem';
import tasksEnumerators from '../../../modules/tasks/tasksEnumerators';
import moment from 'moment';
import DatePickerFormItem from '../../../view/shared/form/items/DatePickerFormItem';
import TaskListAutocompleteFormItem from '../../../view/taskList/autocomplete/TaskListAutocompleteFormItem';
import * as yup from 'yup';

const schema = yup.object().shape({
  description: yupFormSchemas.string(
    i18n('entities.tasks.fields.description'),
    {},
  ),
  dueDate: yupFormSchemas.date(
    i18n('entities.tasks.fields.dueDate'),
    {},
  ),
  status: yupFormSchemas.enumerator(
    i18n('entities.tasks.fields.status'),
    {
      options: tasksEnumerators.status,
    },
  ),
  taskList: yupFormSchemas.relationToOne(
    i18n('entities.tasks.fields.taskList'),
    {},
  ),
});

function TasksForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      description: record.description,
      dueDate: record.dueDate
        ? moment(record.dueDate, 'YYYY-MM-DD').toDate()
        : null,
      status: record.status,
      taskList: record.taskList,
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
          <TextAreaFormItem
            name="description"
            label={i18n(
              'entities.tasks.fields.description',
            )}
            placeholder={i18n(
              'entities.tasks.placeholders.description',
            )}
            hint={i18n('entities.tasks.hints.description')}
            required={false}
            autoFocus
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <DatePickerFormItem
            name="dueDate"
            label={i18n('entities.tasks.fields.dueDate')}
            placeholder={i18n(
              'entities.tasks.placeholders.dueDate',
            )}
            hint={i18n('entities.tasks.hints.dueDate')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SelectFormItem
            name="status"
            label={i18n('entities.tasks.fields.status')}
            placeholder={i18n(
              'entities.tasks.placeholders.status',
            )}
            hint={i18n('entities.tasks.hints.status')}
            options={tasksEnumerators.status.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.tasks.enumerators.status.${value}`,
                ),
              }),
            )}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <TaskListAutocompleteFormItem
            name="taskList"
            label={i18n('entities.tasks.fields.taskList')}
            placeholder={i18n(
              'entities.tasks.placeholders.taskList',
            )}
            hint={i18n('entities.tasks.hints.taskList')}
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

export default TasksForm;
