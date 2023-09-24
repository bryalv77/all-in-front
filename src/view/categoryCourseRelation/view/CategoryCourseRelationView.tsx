import React from 'react';
import { i18n } from '../../../i18n';
import Spinner from '../../../view/shared/Spinner';
import CourseViewItem from '../../../view/course/view/CourseViewItem';
import CourseCategoryViewItem from '../../../view/courseCategory/view/CourseCategoryViewItem';

function CategoryCourseRelationView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <CourseViewItem
        label={i18n(
          'entities.categoryCourseRelation.fields.courseId',
        )}
        value={record.courseId}
      />

      <CourseCategoryViewItem
        label={i18n(
          'entities.categoryCourseRelation.fields.category',
        )}
        value={record.category}
      />
    </div>
  );
}

export default CategoryCourseRelationView;
