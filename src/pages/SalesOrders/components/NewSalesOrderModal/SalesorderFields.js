import React from 'react';
import { Input, DatePicker } from 'antd';
import moment from 'moment';

export default {
  customer: {
    label: "Customer Name",
    rules: [
      {
        required: true,
      },
    ],
    children: <Input />,
  },
  salesorderNumber: {
    label: "Sales Order#",
    rules: [
      {
        required: true,
      },
    ],
    children: <Input />,
  },
  referenceNumber: {
    label: "Reference#",
    children: <Input />,
  },
  date: {
    label: "Sales Order Date",
    rules: [
      {
        required: true,
      },
    ],
    children: <DatePicker initialValue={moment()} format="DD/MM/YYYY" />
  },
};