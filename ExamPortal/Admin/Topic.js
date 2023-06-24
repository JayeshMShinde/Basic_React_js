import React from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import * as AllServices from "../AllServices";
import { useState, useEffect } from 'react';
import { useRef } from 'react';

export const TopicComp = () => {

  const topic_id = useRef();
  const t_name = useRef();

  const [topics, setTopic] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedData, setSelectedData] = useState({});
  const [btn, setBtn] = useState(false);


  const handleshow = () => {
    setSelectedData({});
    setBtn(false);
    setShow(true);
  }
  const handleClose = () => setShow(false);



  useEffect(function () {
    GetTopic();
  }, []);

  const GetTopic = async () => {
    let res = await AllServices.GetTopics();
    console.log(res);
    setTopic(res);
  }

  const AddTopic = async () => {
    var st = { "topic_name": t_name.current.value };
    let res = await AllServices.AddTopics(st);
    alert('Topic Added Successfully');
    Clear();
    GetTopic();
    handleClose();
  }

  const UpdateTopic = async () => {
    var st = { "topic_id": topic_id.current.value, "topic_name": t_name.current.value };
    let res = await AllServices.UpdateTopics(st);
    alert('update Added Successfully');
    Clear();
    GetTopic();
    handleClose();
  }

  const View = (data) => {
    // topic_id.current.value = topic_id; 
    // t_name.current.value = topic_name; 
    setBtn(true);
    setSelectedData(data);

    // handleshow(); 

  }

  const Delete = async (id) => {
    const d = await AllServices.DeleteTopics(id);
    alert('Topic Deleted Successfully');
    GetTopic();
  }

  const Clear = () => {
    t_name.current.value = "";
  }


  return (
    <div>
      <h3>Topics</h3>
      <button className='btn btn-primary' onClick={handleshow}><i className="bi-plus-circle-fill"></i>&nbsp;Add</button>
      <br /> <br />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Topic</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Topic Id</Form.Label>
              <Form.Control ref={topic_id} disabled
                value={selectedData?.topic_id}
                onChange={(data) => {
                  setSelectedData((prev) => {
                    return { ...prev, topic_id: data.target.value };
                  });
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Topic</Form.Label>
              <Form.Control type="text" ref={t_name}
                value={selectedData?.topic_name}
                onChange={(data) => {
                  setSelectedData((prev) => {
                    return { ...prev, topic_name: data.target.value };
                  });
                }}
                placeholder="Enter Topic"
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" hidden={btn} onClick={() => AddTopic()}>Save</Button>
          <Button variant="success" hidden={!btn} onClick={() => UpdateTopic()}>Update</Button>
          <Button variant="secondary" onClick={() => Clear()}>Reset</Button>
        </Modal.Footer>
      </Modal >

      <div className='container' style={{ "overflow-y": "scroll", "height": "100vh", "width": "100vh", "display": "auto" }}>
        <table className="table table-bordered table-striped">
          <thead >
            <tr>
              <th>#</th>
              <th>Topic Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              topics.map((d, k) => (
                <tr key={k}>
                  <td>{k + 1}</td>
                  <td>{d.topic_name}</td>
                  <td>
                    <Button variant="warning" onClick={() => { handleshow(); View(d) }} ><i className="bi-eye"></i></Button>
                    &nbsp;
                    &nbsp;
                    <Button variant="danger" onClick={() => Delete(d.topic_id)}><i className="bi-trash-fill"></i></Button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}