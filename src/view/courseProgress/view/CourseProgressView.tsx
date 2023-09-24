import React from 'react';
import { i18n } from '../../../i18n';
import Spinner from '../../../view/shared/Spinner';
import TextViewItem from '../../../view/shared/view/TextViewItem';
import StudentViewItem from '../../../view/student/view/StudentViewItem';
import CourseViewItem from '../../../view/course/view/CourseViewItem';
import LessonViewItem from '../../../view/lesson/view/LessonViewItem';

function CourseProgressView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <StudentViewItem
        label={i18n(
          'entities.courseProgress.fields.studentId',
        )}
        value={record.studentId}
      />

      <CourseViewItem
        label={i18n(
          'entities.courseProgress.fields.courseId',
        )}
        value={record.courseId}
      />

      <TextViewItem
        label={i18n(
          'entities.courseProgress.fields.progressPercentage',
        )}
        value={record.progressPercentage}
      />

      <LessonViewItem
        label={i18n(
          'entities.courseProgress.fields.currentLesson',
        )}
        value={record.currentLesson}
      />
    </div>
  );
}

export default CourseProgressView;
