import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';

function ArtistView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.artist.fields.name')}
        value={record.name}
      />

      <TextViewItem
        label={i18n('entities.artist.fields.bio')}
        value={record.bio}
      />

      <ImagesViewItem
        label={i18n('entities.artist.fields.photo')}
        value={record.photo}
      />
    </div>
  );
}

export default ArtistView;
