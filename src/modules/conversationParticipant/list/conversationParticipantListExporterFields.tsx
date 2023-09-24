import { i18n } from '../../../i18n';
import exporterRenders from '../../../modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n(
      'entities.conversationParticipant.fields.id',
    ),
  },
  {
    name: 'userId',
    label: i18n(
      'entities.conversationParticipant.fields.userId',
    ),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'conversationId',
    label: i18n(
      'entities.conversationParticipant.fields.conversationId',
    ),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n(
      'entities.conversationParticipant.fields.createdAt',
    ),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n(
      'entities.conversationParticipant.fields.updatedAt',
    ),
    render: exporterRenders.datetime(),
  },
];
