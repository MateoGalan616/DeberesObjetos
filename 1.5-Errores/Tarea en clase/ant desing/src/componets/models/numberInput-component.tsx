import { FC } from 'react';
import { InputNumber } from 'antd';

const NumberInputComponent: FC = () => {
  const onChange = (value: 1 | 10 | 3 | null) => {
    if (value !== null) {
      console.log('changed', value);
    }
  };

  return (
    <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
  );
};

export default NumberInputComponent;
