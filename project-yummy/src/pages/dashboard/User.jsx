import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ModalFormUser from "./ModalFormUser";
import { useEffect, useState } from "react";
import { getUser } from "../../slices/userSlice";

const User = () => {
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);

  const { error, isLoading, users } = useSelector((state) => {
    return state.listUser;
  });

  // GET API
  useEffect(() => {
    dispatch(getUser());
  }, []);

  if (isLoading == true) return <p>Loading ....</p>;
  if (error) return <p>Page Error: {error}</p>;
  // Call Hoan thanh -> Gia tri
  // console.log(users);
  return (
    <main className="main-wrapper col-md-9 ms-sm-auto py-4 col-lg-9 px-md-4 border-start">
      <Button
        variant="dark"
        className="my-4"
        onClick={() => setModalShow(true)}
      >
        Add User
      </Button>
      <ModalFormUser show={modalShow} onHide={() => setModalShow(false)} />

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#id</th>
            <th>Name</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((value) => {
            return (
              <tr key={value.id}>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.role}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </main>
  );
};

export default User;
