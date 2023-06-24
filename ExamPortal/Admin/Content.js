
import React, { useEffect, useRef, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import * as AllServices from "../AllServices";

export const Contentques = () => {
  const ddtmn = useRef("");
  const Content_name = useRef("");
  const tbl_content = useRef("");
  const content_id = useRef("");

  const [topics, setTopics] = useState([]);
  const [content, setContent] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedData, setSelectedData] = useState({});
  const [btn, setBtn] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setSelectedData({});
    setBtn(false);
    setShow(true);
  };

  useEffect(() => {
    getTopic();
    getContent();
  }, []);

  const getTopic = async () => {
    const resp = await AllServices.GetTopics();
    setTopics(resp);
  };

  const getContent = async () => {
    const response = await AllServices.GetContent();
    setContent(response);
  };

  const Add_Content = async () => {
    var cn = Content_name.current.value;
    var tid = selectedData.topics?.topic_id;
    var tutorial = tbl_content.current.value;
    var st = {
      content_name: cn,
      content_tutorial: tutorial,
      topics: { topic_id: tid },
    };
    const add = await AllServices.AddContent(st);
    console.log(add);
    Clear();
    getContent();
    handleClose();
  };

  const View = (data) => {
    setBtn(true);
    setSelectedData(data);
  };

  const updateContent = async () => {
    var st = {
      content_id: content_id.current.value,
      content_name: Content_name.current.value,
      content_tutorial: tbl_content.current.value,
      topics: {
        topic_id: ddtmn.current.value, // Modified to use value instead of selectedIndex
      },
    };
    const update = await AllServices.UpdateContent(st);
    console.log(update);
    alert("Updated content successfully");
    Clear();
    handleClose();
  };

  const Delete = async (id) => {
    const res = await AllServices.DeleteContent(id);
    console.log(res);
    alert("Delete content successfully");
    getContent();
  };

  const Clear = () => {
    Content_name.current.value = "";
    ddtmn.current.selectedIndex = 0; // Modified to clear the selected value
    tbl_content.current.value = "";
  };

  return (
    <div>
      <h3>Content</h3>
      <button className="btn btn-primary" onClick={handleShow}>
        <i className="bi-plus-circle-fill"></i>&nbsp;Add
      </button>
      <br /> <br />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Topic Content</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Content Id</Form.Label>
              <Form.Control
                ref={content_id}
                disabled
                value={selectedData?.content_id}
                onChange={(data) => {
                  setSelectedData((prev) => {
                    return { ...prev, content_id: data.target.value };
                  });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Topic</Form.Label>
              <Form.Select
                ref={ddtmn}
                value={selectedData?.topics?.topic_id}
                onChange={(data) => {
                  setSelectedData((prev) => {
                    return { ...prev, topics: { topic_id: data.target.value } };
                  });
                }}
              >
                <option selected disabled>Select topic</option>
                {topics.map((d, k) => (
                  <option key={k} value={d.topic_id}>
                    {d.topic_name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Topic Content</Form.Label>
              <Form.Control
                type="text"
                ref={Content_name}
                placeholder="Enter Content"
                value={selectedData?.content_name}
                onChange={(data) => {
                  setSelectedData((prev) => {
                    return { ...prev, content_name: data.target.value };
                  });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Tutorial Name</Form.Label>
              <Form.Control
                type="text"
                ref={tbl_content}
                placeholder="Enter tutorial name"
                value={selectedData?.content_tutorial}
                onChange={(data) => {
                  setSelectedData((prev) => {
                    return { ...prev, content_tutorial: data.target.value };
                  });
                }}
              ></Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" hidden={btn} onClick={Add_Content}>
            Save
          </Button>
          <Button variant="success" hidden={!btn} onClick={updateContent}>
            Update
          </Button>
          <Button variant="secondary" onClick={Clear}>
            Reset
          </Button>
        </Modal.Footer>
      </Modal>

      <div
        className="container"
        style={{
          overflowY: "scroll",
          height: "100vh",
          width: "100vh",
          display: "auto",
        }}
      >
        <table className="table table-bordered table-striped table-hover" size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Content Name</th>
              <th>Topic Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {content.map((d, k) => (
              <tr key={k}>
                <td>{k + 1}</td>
                <td>{d.content_name}</td>
                <td>{d.content_tutorial}</td>
                <td>{d.topics?.topic_name}</td>
                <td>
                  <Button variant="warning" onClick={() => { handleShow(); View(d); }}>
                    <i className="bi-eye"></i>
                  </Button>
                  &nbsp; &nbsp;
                  <Button variant="danger" onClick={() => Delete(d.content_id)}>
                    <i className="bi-trash-fill"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

