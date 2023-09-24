import React from 'react';
import { i18n } from '../../../i18n';
import Spinner from '../../../view/shared/Spinner';
import TextViewItem from '../../../view/shared/view/TextViewItem';
import UserViewItem from '../../../view/user/view/UserViewItem';
import moment from 'moment';
import FilesViewItem from '../../../view/shared/view/FilesViewItem';

function PostsView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.posts.fields.content')}
        value={record.content}
      />

      {record.postDate && (
        <TextViewItem
          label={i18n('entities.posts.fields.postDate')}
          value={moment(record.postDate).format(
            'YYYY-MM-DD HH:mm',
          )}
        />
      )}

      <FilesViewItem
        label={i18n('entities.posts.fields.media')}
        value={record.media}
      />

      <UserViewItem
        label={i18n('entities.posts.fields.userId')}
        value={record.userId}
      />
    </div>
  );
}

export default PostsView;
