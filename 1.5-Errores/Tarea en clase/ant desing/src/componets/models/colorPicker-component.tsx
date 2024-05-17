import React from 'react';
import { Button, Form } from 'antd';
import { Colorpicker, ColorPickerValue } from 'antd-colorpicker';

const ColorPickerComponent: React.FC = () => {
  const initialValues = {
    color: { r: 26, g: 14, b: 85, a: 1 }
  };

  const handleOnFinish = (values: { color: ColorPickerValue }) => {
    console.log(values);
  };

  return (
    <Form onFinish={handleOnFinish} initialValues={initialValues}>
      <Form.Item label={'Colorpicker'} name={`color`}>
        <Colorpicker />
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType='submit'>
          Show values in console
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ColorPickerComponent;
