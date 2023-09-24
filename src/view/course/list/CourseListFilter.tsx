import {
  faSearch,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';    
import { i18n } from 'src/i18n';
import actions from 'src/modules/course/list/courseListActions';
import selectors from 'src/modules/course/list/courseListSelectors';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, FormProvider } from 'react-hook-form';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FilterPreview from 'src/view/shared/filter/FilterPreview';
import filterRenders from 'src/modules/shared/filter/filterRenders';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import InputRangeFormItem from 'src/view/shared/form/items/InputRangeFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import TeacherAutocompleteFormItem from 'src/view/teacher/autocomplete/TeacherAutocompleteFormItem';

const schema = yup.object().shape({
  teacherId: yupFilterSchemas.relationToOne(
    i18n('entities.course.fields.teacherId'),
  ),
  title: yupFilterSchemas.string(
    i18n('entities.course.fields.title'),
  ),
  description: yupFilterSchemas.string(
    i18n('entities.course.fields.description'),
  ),
  priceRange: yupFilterSchemas.decimalRange(
    i18n('entities.course.fields.priceRange'),
  ),
  hoursDurationRange: yupFilterSchemas.decimalRange(
    i18n('entities.course.fields.hoursDurationRange'),
  ),
  startDateRange: yupFilterSchemas.dateRange(
    i18n('entities.course.fields.startDateRange'),
  ),
  endDateRange: yupFilterSchemas.dateRange(
    i18n('entities.course.fields.endDateRange'),
  ),
  level: yupFilterSchemas.string(
    i18n('entities.course.fields.level'),
  ),
  additionalInfo: yupFilterSchemas.string(
    i18n('entities.course.fields.additionalInfo'),
  ),
  active: yupFilterSchemas.boolean(
    i18n('entities.course.fields.active'),
  ),
});

const emptyValues = {
  teacherId: null,
  title: null,
  description: null,
  priceRange: [],
  hoursDurationRange: [],
  startDateRange: [],
  endDateRange: [],
  level: null,
  additionalInfo: null,
  active: null,
}

const previewRenders = {
  teacherId: {
      label: i18n('entities.course.fields.teacherId'),
      render: filterRenders.relationToOne(),
    },
  title: {
    label: i18n('entities.course.fields.title'),
    render: filterRenders.generic(),
  },
  description: {
    label: i18n('entities.course.fields.description'),
    render: filterRenders.generic(),
  },
  priceRange: {
    label: i18n('entities.course.fields.priceRange'),
    render: filterRenders.decimalRange(),
  },
  hoursDurationRange: {
    label: i18n('entities.course.fields.hoursDurationRange'),
    render: filterRenders.decimalRange(),
  },
  startDateRange: {
    label: i18n('entities.course.fields.startDateRange'),
    render: filterRenders.dateRange(),
  },
  endDateRange: {
    label: i18n('entities.course.fields.endDateRange'),
    render: filterRenders.dateRange(),
  },
  level: {
    label: i18n('entities.course.fields.level'),
    render: filterRenders.generic(),
  },
  additionalInfo: {
    label: i18n('entities.course.fields.additionalInfo'),
    render: filterRenders.generic(),
  },
  active: {
    label: i18n('entities.course.fields.active'),
    render: filterRenders.boolean(),
  },
}

function CourseListFilter(props) {
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
    dispatch(actions.doFetch(schema.cast(initialValues), rawFilter));
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
              <TeacherAutocompleteFormItem  
                name="teacherId"
                label={i18n('entities.course.fields.teacherId')}        
              />
              <InputFormItem
                name="title"
                label={i18n('entities.course.fields.title')}      
              />
              <InputFormItem
                name="description"
                label={i18n('entities.course.fields.description')}      
              />
              <InputRangeFormItem
                name="priceRange"
                label={i18n('entities.course.fields.priceRange')}      
              />
              <InputRangeFormItem
                name="hoursDurationRange"
                label={i18n('entities.course.fields.hoursDurationRange')}      
              />
              <DatePickerRangeFormItem
                name="startDateRange"
                label={i18n('entities.course.fields.startDateRange')}    
              />
              <DatePickerRangeFormItem
                name="endDateRange"
                label={i18n('entities.course.fields.endDateRange')}    
              />
              <InputFormItem
                name="level"
                label={i18n('entities.course.fields.level')}      
              />
              <InputFormItem
                name="additionalInfo"
                label={i18n('entities.course.fields.additionalInfo')}      
              />
              <SelectFormItem
                name="active"
                label={i18n('entities.course.fields.active')}
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

export default CourseListFilter;