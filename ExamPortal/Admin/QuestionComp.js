
import React, { useEffect, useRef, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import * as AllServices from "../AllServices";

export const QuestionComp = () => {

    const Que_id = useRef();
    const que_name = useRef();
    const option1 = useRef();
    const option2 = useRef();
    const option3 = useRef();
    const option4 = useRef();
    const correctOption = useRef();
    const [questions, setQuestion] = useState([]);
    const ddtmn = useRef();
    const ddcon = useRef();

    const [topics, setTopics] = useState([]);
    const [contents, setContent] = useState([]);
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
        // getContent();
        getQuestion();
    }, []);

    const getTopic = async () => {
        const resp = await AllServices.GetTopics();
        setTopics(resp);
    };

    const getContent = async () => {
        const response = await AllServices.GetContent();
        setContent(response);
    };

    const getQuestion = async () => {
        const resp = await AllServices.GetQuestion();
        setQuestion(resp);
    }

    const Add_Question = async () => {
        var st = {
            "question": que_name.current.value,
            "option1": option1.current.value,
            "option2": option2.current.value,
            "option3": option3.current.value,
            "option4": option4.current.value,
            "correctoptionnumber": correctOption.current.value,
            "content": {
                "content_id": ddcon.current.value
            }
        };
        console.log(st);
        const add = await AllServices.AddQuestion(st);
        console.log(add);
        alert("Question added Succesfully");
        handleClose();
        getQuestion();
    }

    const Update_Question = async () => {
        var st = {
            "question_id": Que_id.current.value,
            "question": que_name.current.value,
            "option1": option1.current.value,
            "option2": option2.current.value,
            "option3": option3.current.value,
            "option4": option4.current.value,
            "correctoptionnumber": correctOption.current.value,
            "content": {
                "content_id": ddcon.current.value
            }
        };
        console.log(st);
        const updated = await AllServices.updateQuestion(st);
        alert("Question updated successfully");
        handleClose();
        getQuestion();
    }

    const getTopicWiseContent = async () => {
        try {
            console.log(ddtmn.current.value);
            const tid = ddtmn.current.value;

            ; if (tid) {
                const topwisecon = await AllServices.topicwiseContent(tid);
                setContent(topwisecon);
            }
        } catch (error) {
            console.error('Error fetching topic-wise content:', error);
        }
    };


    // const getTopicWiseContent = async () => {
    //     try {
    //         const tid = selectedData?.topics?.topic_id;
    //         if (tid) {
    //             const topwisecon = await AllServices.topicwiseContent(tid);
    //             setContent(topwisecon);
    //         }
    //     }
    //     catch (error) {
    //         console.error('Error fetching topic-wise content:', error);
    //     }
    // }
    const Clear = () => {
        que_name.current.value = "";
        ddtmn.current.selectedIndex = "";        // Modified to clear the selected value
        ddcon.current.selectedIndex = "";
        option1.current.value = "";
        option2.current.value = "";
        option3.current.value = "";
        option4.current.value = "";
    }

    const View = (data) =>{
        setBtn(true);
        setSelectedData(data);
        setShow(true);
        
    }

    const Delete = async (id) => {
        const res = await AllServices.deleteQuestion(id);
        console.log(res);
        alert("question Deleted Succesfully");
        getQuestion();
    }

    return (
        <div>
            <h3>Content Question</h3>
            <button className="btn btn-primary" onClick={handleShow}>
                <i className="bi-plus-circle-fill"></i>&nbsp;Add
            </button>
            <br /> <br />

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Content Question</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Question Id</Form.Label>
                            <Form.Control
                                ref={Que_id}
                                disabled
                                value={selectedData?.question_id}
                                onChange={(data) => {
                                    setSelectedData((prev) => {
                                        return { ...prev, question_id: data.target.value };
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
                                    setSelectedData((prevData) => {
                                        return { ...prevData, topics: { topic_id: data.target.value } };
                                    });
                                    getTopicWiseContent();
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
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Content</Form.Label>
                            <Form.Select
                                ref={ddcon}
                                value={selectedData?.content?.content_id}
                                onk
                                onChange={(data) => {
                                    setSelectedData((prev) => {
                                        return { ...prev, content: { content_id: data.target.value } };
                                    });
                                }}
                            >
                                <option selected disabled>Select Content</option>
                                {contents.map((d, k) => (
                                    <option key={k} value={d.content_id}>
                                        {d.content_name}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Question</Form.Label>
                            <Form.Control
                                as="textarea"
                                ref={que_name}
                                placeholder="Enter Question"
                                value={selectedData?.question}
                                onChange={(data) => {
                                    setSelectedData((prev) => {
                                        return { ...prev, question: data.target.value };
                                    });
                                }}
                            />
                        </Form.Group>
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Option 1</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        ref={option1}
                                        placeholder="Enter Option 1"
                                        value={selectedData?.option1}
                                        onChange={(data) => {
                                            setSelectedData((prev) => {
                                                return { ...prev, option1: data.target.value };
                                            });
                                        }}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Option 2</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        ref={option2}
                                        placeholder="Enter Option 2"
                                        value={selectedData?.option2}
                                        onChange={(data) => {
                                            setSelectedData((prev) => {
                                                return { ...prev, option2: data.target.value };
                                            });
                                        }}
                                    />
                                </Form.Group>
                            </div>
                            <div className=" col-md-6">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Option 3</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        ref={option3}
                                        placeholder="Enter Option 3"
                                        value={selectedData?.option3}
                                        onChange={(data) => {
                                            setSelectedData((prev) => {
                                                return { ...prev, option3: data.target.value };
                                            });
                                        }}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Option 4</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        ref={option4}
                                        placeholder="Enter Option 4"
                                        value={selectedData?.option4}
                                        onChange={(data) => {
                                            setSelectedData((prev) => {
                                                return { ...prev, option4: data.target.value };
                                            });
                                        }}
                                    />
                                </Form.Group>
                            </div>
                        </div>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>correctAnswer</Form.Label>
                            <Form.Control
                                type="number"
                                ref={correctOption}
                                placeholder="Enter Correct Option"
                                value={selectedData?.correctoptionnumber}
                                onChange={(data) => {
                                    setSelectedData((prev) => {
                                        return { ...prev, correctoptionnumber: data.target.value };
                                    });
                                }}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" hidden={btn} onClick={() => Add_Question()}>
                        Save
                    </Button>
                    <Button variant="success" hidden={!btn} onClick={() => Update_Question()}>
                        Update
                    </Button>
                    <Button variant="secondary" onClick={() => Clear()}>
                        Reset
                    </Button>
                </Modal.Footer>
            </Modal>

            <div
                className="container"
                style={{
                    overflowY: "scroll",
                    height: "100vh",
                    width: "165vh",
                    display: "auto",
                }}
            >
                <table className="table table-bordered table-striped table-hover" size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Content</th>
                            <th>Question</th>
                            <th>Option 1</th>
                            <th>Option 2</th>
                            <th>Option 3</th>
                            <th>Option 4</th>
                            <th>Correct Option Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {questions.map((d, k) => (
                            <tr key={k}>
                                <td>{k + 1}</td>
                                <td>{d.content?.content_name}</td>
                                <td>{d.question}</td>
                                <td>{d.option1}</td>
                                <td>{d.option2}</td>
                                <td>{d.option3}</td>
                                <td>{d.option4}</td>
                                <td>{d.correctoptionnumber}</td>
                                <td>
                                    <Button variant="warning" onClick={() => { handleShow(); View(d); }}>
                                        View
                                    </Button>
                                    &nbsp; &nbsp;
                                    <Button variant="danger" onClick={() => Delete(d.question_id)}>
                                        Delete
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

