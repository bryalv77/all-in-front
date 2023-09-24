import React from 'react';
import { i18n } from '../../../i18n';
import Spinner from '../../../view/shared/Spinner';
import TextViewItem from '../../../view/shared/view/TextViewItem';
import moment from 'moment';
import CourseViewItem from '../../../view/course/view/CourseViewItem';
import StudentViewItem from '../../../view/student/view/StudentViewItem';

function CourseEnrollmentView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <CourseViewItem
        label={i18n(
          'entities.courseEnrollment.fields.courseId',
        )}
        value={record.courseId}
      />

      <StudentViewItem
        label={i18n(
          'entities.courseEnrollment.fields.studentId',
        )}
        value={record.studentId}
      />

      {record.enrollmentDate && (
        <TextViewItem
          label={i18n(
            'entities.courseEnrollment.fields.enrollmentDate',
          )}
          value={moment(record.enrollmentDate).format(
            'YYYY-MM-DD HH:mm',
          )}
        />
      )}
    </div>
  );
}

export default CourseEnrollmentView;
