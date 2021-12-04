import React from "react";
import { useDispatch } from "react-redux";
import { Form, Input, Button, Checkbox } from "antd";
import { useNavigate } from "react-router-dom";
import { addItemByGoods } from "../../../redux/actions";
import { v4 as uuidv4 } from "uuid";

export default function AddForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = (e) => {
    dispatch(addItemByGoods({ id: uuidv4(), ...e }));
    navigate("/goods");
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={() => navigate("/goods")}
      autoComplete="off"
    >
      <Form.Item
        label="name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please input name your items!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="executor" name="executor">
        <Input />
      </Form.Item>
      <Form.Item label="country" name="country">
        <Input />
      </Form.Item>
      <Form.Item label="price" name="price">
        <Input />
      </Form.Item>
      <Form.Item label="description" name="description">
        <Input />
      </Form.Item>

      <Form.Item
        name="reserve"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Reserve</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
