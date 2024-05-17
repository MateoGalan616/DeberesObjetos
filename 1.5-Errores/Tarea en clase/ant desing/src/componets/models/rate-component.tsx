import { FC } from 'react';
import { Rate } from 'antd';

const RateComponent: FC = () => {
  const onChange = (value: number) => {
    console.log(value);
  };

  return (
    <Rate onChange={onChange} />
  );
};

export default RateComponent;
