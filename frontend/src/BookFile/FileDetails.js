import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import DescriptionList from 'Components/DescriptionList/DescriptionList';
import DescriptionListItem from 'Components/DescriptionList/DescriptionListItem';
import DescriptionListItemDescription from 'Components/DescriptionList/DescriptionListItemDescription';
import DescriptionListItemTitle from 'Components/DescriptionList/DescriptionListItemTitle';
import Link from 'Components/Link/Link';
import formatTimeSpan from 'Utilities/Date/formatTimeSpan';
import styles from './FileDetails.css';

function renderRejections(rejections) {
  return (
    <span>
      <DescriptionListItemTitle>
        Rejections
      </DescriptionListItemTitle>
      {
        _.map(rejections, (item, key) => {
          return (
            <DescriptionListItemDescription key={key}>
              {item.reason}
            </DescriptionListItemDescription>
          );
        })
      }
    </span>
  );
}

function FileDetails(props) {

  const {
    filename,
    audioTags,
    rejections
  } = props;

  return (
    <Fragment>
      <div className={styles.audioTags}>
        <DescriptionList>
          {
            filename &&
              <DescriptionListItem
                title="Filename"
                data={filename}
                descriptionClassName={styles.filename}
              />
          }
          {
            audioTags.title !== undefined &&
              <DescriptionListItem
                title="Track Title"
                data={audioTags.title}
              />
          }
          {
            audioTags.trackNumbers[0] > 0 &&
              <DescriptionListItem
                title="Track Number"
                data={audioTags.trackNumbers[0]}
              />
          }
          {
            audioTags.discNumber > 0 &&
              <DescriptionListItem
                title="Disc Number"
                data={audioTags.discNumber}
              />
          }
          {
            audioTags.discCount > 0 &&
              <DescriptionListItem
                title="Disc Count"
                data={audioTags.discCount}
              />
          }
          {
            audioTags.bookTitle !== undefined &&
              <DescriptionListItem
                title="Book"
                data={audioTags.bookTitle}
              />
          }
          {
            audioTags.authorTitle !== undefined &&
              <DescriptionListItem
                title="Author"
                data={audioTags.authorTitle}
              />
          }
          {
            audioTags.country !== undefined &&
              <DescriptionListItem
                title="Country"
                data={audioTags.country.name}
              />
          }
          {
            audioTags.year > 0 &&
              <DescriptionListItem
                title="Year"
                data={audioTags.year}
              />
          }
          {
            audioTags.label !== undefined &&
              <DescriptionListItem
                title="Label"
                data={audioTags.label}
              />
          }
          {
            audioTags.catalogNumber !== undefined &&
              <DescriptionListItem
                title="Catalog Number"
                data={audioTags.catalogNumber}
              />
          }
          {
            audioTags.disambiguation !== undefined &&
              <DescriptionListItem
                title="Disambiguation"
                data={audioTags.disambiguation}
              />
          }
          {
            audioTags.duration !== undefined &&
              <DescriptionListItem
                title="Duration"
                data={formatTimeSpan(audioTags.duration)}
              />
          }
          {
            audioTags.authorMBId !== undefined &&
              <Link
                to={`https://musicbrainz.org/author/${audioTags.authorMBId}`}
              >
                <DescriptionListItem
                  title="MusicBrainz Author ID"
                  data={audioTags.authorMBId}
                />
              </Link>
          }
          {
            audioTags.bookMBId !== undefined &&
              <Link
                to={`https://musicbrainz.org/release-group/${audioTags.bookMBId}`}
              >
                <DescriptionListItem
                  title="MusicBrainz Book ID"
                  data={audioTags.bookMBId}
                />
              </Link>
          }
          {
            audioTags.releaseMBId !== undefined &&
              <Link
                to={`https://musicbrainz.org/release/${audioTags.releaseMBId}`}
              >
                <DescriptionListItem
                  title="MusicBrainz Release ID"
                  data={audioTags.releaseMBId}
                />
              </Link>
          }
          {
            audioTags.recordingMBId !== undefined &&
              <Link
                to={`https://musicbrainz.org/recording/${audioTags.recordingMBId}`}
              >
                <DescriptionListItem
                  title="MusicBrainz Recording ID"
                  data={audioTags.recordingMBId}
                />
              </Link>
          }
          {
            audioTags.trackMBId !== undefined &&
              <Link
                to={`https://musicbrainz.org/track/${audioTags.trackMBId}`}
              >
                <DescriptionListItem
                  title="MusicBrainz Track ID"
                  data={audioTags.trackMBId}
                />
              </Link>
          }
          {
            !!rejections && rejections.length > 0 &&
              renderRejections(rejections)
          }
        </DescriptionList>
      </div>
    </Fragment>
  );
}

FileDetails.propTypes = {
  filename: PropTypes.string,
  audioTags: PropTypes.object.isRequired,
  rejections: PropTypes.arrayOf(PropTypes.object)
};

export default FileDetails;
