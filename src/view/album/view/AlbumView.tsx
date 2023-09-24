import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';
import ArtistViewItem from 'src/view/artist/view/ArtistViewItem';

function AlbumView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.album.fields.title')}
        value={record.title}
      />

      <ArtistViewItem
        label={i18n('entities.album.fields.artistId')}
        value={record.artistId}
      />

      <TextViewItem
        label={i18n('entities.album.fields.year')}
        value={record.year}
      />

      <ImagesViewItem
        label={i18n('entities.album.fields.cover')}
        value={record.cover}
      />
    </div>
  );
}

export default AlbumView;
