import React from 'react';
import { i18n } from '../../../i18n';
import Spinner from '../../../view/shared/Spinner';
import TextViewItem from '../../../view/shared/view/TextViewItem';
import UserViewItem from '../../../view/user/view/UserViewItem';
import FilesViewItem from '../../../view/shared/view/FilesViewItem';

function MediaView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <FilesViewItem
        label={i18n('entities.media.fields.file')}
        value={record.file}
      />

      <TextViewItem
        label={i18n('entities.media.fields.metadata')}
        value={record.metadata}
      />

      <UserViewItem
        label={i18n('entities.media.fields.userId')}
        value={record.userId}
      />

      <TextViewItem
        label={i18n('entities.media.fields.show')}
        value={
          record.show
            ? i18n('common.yes')
            : i18n('common.no')
        }
      />
    </div>
  );
}

export default MediaView;
