import React from 'react';
import { i18n } from '../../../i18n';
import Spinner from '../../../view/shared/Spinner';
import TextViewItem from '../../../view/shared/view/TextViewItem';
import TeacherViewItem from '../../../view/teacher/view/TeacherViewItem';

function CourseView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TeacherViewItem
        label={i18n('entities.course.fields.teacherId')}
        value={record.teacherId}
      />

      <TextViewItem
        label={i18n('entities.course.fields.title')}
        value={record.title}
      />

      <TextViewItem
        label={i18n('entities.course.fields.description')}
        value={record.description}
      />

      <TextViewItem
        label={i18n('entities.course.fields.price')}
        value={record.price}
      />

      <TextViewItem
        label={i18n('entities.course.fields.hoursDuration')}
        value={record.hoursDuration}
      />

      <TextViewItem
        label={i18n('entities.course.fields.startDate')}
        value={record.startDate}
      />

      <TextViewItem
        label={i18n('entities.course.fields.endDate')}
        value={record.endDate}
      />

      <TextViewItem
        label={i18n('entities.course.fields.level')}
        value={record.level}
      />

      <TextViewItem
        label={i18n(
          'entities.course.fields.additionalInfo',
        )}
        value={record.additionalInfo}
      />

      <TextViewItem
        label={i18n('entities.course.fields.active')}
        value={
          record.active
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />
    </div>
  );
}

export default CourseView;
