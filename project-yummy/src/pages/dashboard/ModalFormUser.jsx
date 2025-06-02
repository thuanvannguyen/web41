import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addUser } from "../../slices/userSlice";

const ModalFormUser = ({ show, onHide }) => {
  const dispatch = useDispatch();

  const {
    register, // dang ky the input form => Hook form
    handleSubmit, // Giup validate du lieu (neu co) => Truoc khi submit
    //formState: { errors }, // Loi hien thi ra loi => errors
  } = useForm();

  const onSubmit = (data) => {
    dispatch(addUser(data))
  }
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add New User
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" {...register("name")}/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Role</Form.Label>
            <Form.Control type="text" placeholder="Enter Role" {...register("role")} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalFormUser;
