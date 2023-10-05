import {FaLocationDot as icon } from 'react-icons/fa6';

export default {
  name: "nationalPark",
  title: "National Parks",
  type: "document",
  icon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description:  'Name for location'
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
      description:  'Street address of location'
    },
    {
      name: 'parkCode',
      title: 'Park Code',
      type: 'string',
      description:  '4 letter park code'
    }
  ],
}