import styles from "./styles/editor.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import InputGroup from "react-bootstrap/InputGroup";
import React, { useState, useRef, useEffect } from "react";
import JoditEditor from "jodit-react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { client } from "../client/Instance";

export const Editor = () => {
  const ref = useRef(null);
  const photoRef = useRef(null);
  const navigate = useNavigate();
  const editor = useRef(null);
  const [content, setContent] = useState("Start writing");
  const [category, setCategory] = useState("");
  const config = {
    readonly: false,
    height: "50vh",
  };

  const publishArticle = () => {
    const result = content.replace(/"/gi, "'");
    // if (ref.current.value && photoRef.current.value && result && category) {
    const article = {
      title: ref.current.value,
      texts: result,
      photoUrl: photoRef.current.value,
      creatorId: localStorage.USER_TOKEN,
      category: category,
      views: 0,
    };
    console.log(result);
    client.post("/articles", article).then((res) => {
      console.log(res.data);
    });
    navigate("/");
    // }
  };
  const handleUpdate = (event) => {
    console.log(event);
    const editorContent = event;
    setContent(editorContent);
  };

  return (
    <div className={styles.containerEdit}>
      <InputGroup className="mb-3">
        <InputGroup.Text>Title</InputGroup.Text>
        <Form.Control ref={ref} aria-label="Title" />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text>Image url</InputGroup.Text>
        <Form.Control ref={photoRef} aria-label="Title" />
      </InputGroup>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Category
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => {
              setCategory("64032060f3133a6dafd7d38c");
            }}>
            STUDY HACKS
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setCategory("640320cdf3133a6dafd7d38e");
            }}>
            Онцлох бизнес
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setCategory("640c0b442c39da9030ddd95b");
            }}>
            Techworm
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setCategory("640320e0f3133a6dafd7d392");
            }}>
            Би хэрхэн ажилладаг вэ?
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setCategory("640320e7f3133a6dafd7d394");
            }}>
            Мэдүүштэй
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setCategory("640320f3f3133a6dafd7d396");
            }}>
            Чөлөөт
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setCategory("640320fbf3133a6dafd7d398");
            }}>
            Номын тухай
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setCategory("64032103f3133a6dafd7d39a");
            }}>
            7 хоногийн тойм
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setCategory("6403210bf3133a6dafd7d39c");
            }}>
            Өртөөлөгчид
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setCategory("64032128f3133a6dafd7d39f");
            }}>
            Аравт
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setCategory("64032131f3133a6dafd7d3a1");
            }}>
            Тогтвортой хөгжил
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setCategory("64032138f3133a6dafd7d3a3");
            }}>
            Тайлбарлах нь
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setCategory("64032140f3133a6dafd7d3a5");
            }}>
            А-Я
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setCategory("64032149f3133a6dafd7d3a7");
            }}>
            10 ертөнц, 10 өнцөг
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setCategory("64032150f3133a6dafd7d3a9");
            }}>
            Би хүүхдээ ингэж өсгөдөг
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setCategory("64032157f3133a6dafd7d3ab");
            }}>
            Танилц, миний амьтан
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setCategory("6403215ef3133a6dafd7d3ad");
            }}>
            Таатай оффис
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setCategory("64032166f3133a6dafd7d3af");
            }}>
            Зочин нийтлэлчийн булан
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setCategory("6403216ff3133a6dafd7d3b1");
            }}>
            8 минутын улс төр
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <div>
        <JoditEditor
          ref={editor}
          value={content}
          config={config}
          onBlur={handleUpdate}
        />
      </div>
      <button onClick={publishArticle}>Publish</button>
    </div>
  );
};
