
import React from 'react'
import HourIcon from 'components/Icons/HourIcon';
import DocumentIcon from 'components/Icons/DocumentIcon';

const JOB_TYPES = [
  {
    id: 'Hourly',
    value: 0,
    Icon: <HourIcon />
  },
  {
    id: 'Fixed',
    value: 1,
    Icon: <DocumentIcon />
  }
]
export {
  JOB_TYPES
}