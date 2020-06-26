import LeafletGeopointInput from 'sanity-plugin-leaflet-input'

export default {
  name: 'playing_field',
  title: 'Field',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'location',
      type: 'geopoint',
      inputComponent: LeafletGeopointInput
    }
  ]
}