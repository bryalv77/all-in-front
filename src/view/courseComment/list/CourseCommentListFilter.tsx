import {
  faSearch,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { i18n } from '../../../i18n';
import actions from '../../../modules/courseComment/list/courseCommentListActions';
import selectors from '../../../modules/courseComment/list/courseCommentListSelectors';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, FormProvider } from 'react-hook-form';
import yupFilterSchemas from '../../../modules/shared/yup/yupFilterSchemas';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FilterPreview from '../../../view/shared/filter/FilterPreview';
import filterRenders from '../../../modules/shared/filter/filterRenders';
import InputFormItem from '../../../view/shared/form/items/InputFormItem';
import StudentAutocompleteFormItem from '../../../view/student/autocomplete/StudentAutocompleteFormItem';
import CourseAutocompleteFormItem from '../../../view/course/autocomplete/CourseAutocompleteFormItem';
import LessonAutocompleteFormItem from '../../../view/lesson/autocomplete/LessonAutocompleteFormItem';

const schema = yup.object().shape({
  comment: yupFilterSchemas.string(
    i18n('entities.courseComment.fields.comment'),
  ),
  studentId: yupFilterSchemas.relationToOne(
    i18n('entities.courseComment.fields.studentId'),
  ),
  courseId: yupFilterSchemas.relationToOne(
    i18n('entities.courseComment.fields.courseId'),
  ),
  lessonId: yupFilterSchemas.relationToOne(
    i18n('entities.courseComment.fields.lessonId'),
  ),
});

const emptyValues = {
  comment: null,
  studentId: null,
  courseId: null,
  lessonId: null,
};

const previewRenders = {
  comment: {
    label: i18n('entities.courseComment.fields.comment'),
    render: filterRenders.generic(),
  },
  studentId: {
    label: i18n('entities.courseComment.fields.studentId'),
    render: filterRenders.relationToOne(),
  },
  courseId: {
    label: i18n('entities.courseComment.fields.courseId'),
    render: filterRenders.relationToOne(),
  },
  lessonId: {
    label: i18n('entities.courseComment.fields.lessonId'),
    render: filterRenders.relationToOne(),
  },
};

function CourseCommentListFilter(props) {
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
                  'entities.courseComment.fields.comment',
                )}
              />
              <StudentAutocompleteFormItem
                name="studentId"
                label={i18n(
                  'entities.courseComment.fields.studentId',
                )}
              />
              <CourseAutocompleteFormItem
                name="courseId"
                label={i18n(
                  'entities.courseComment.fields.courseId',
                )}
              />
              <LessonAutocompleteFormItem
                name="lessonId"
                label={i18n(
                  'entities.courseComment.fields.lessonId',
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

export default CourseCommentListFilter;
