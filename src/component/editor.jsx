import React, { useState, useRef, useEffect } from "react";
import JoditEditor from "jodit-react";

export const Editor = () => {
    const editor = useRef(null);
    const [content, setContent] = useState("Start writing");
    const config = {
        readonly: false,
        height: "50vh"
    };
    const handleUpdate = (event) => {
        console.log(event)
        const editorContent = event;
        setContent(editorContent);
    };

    useEffect(() => {
        console.log(content)
    }, [content])
    return (

        <JoditEditor
            ref={editor}
            value={content}
            config={config}
            onBlur={handleUpdate}
            onChange={(newContent) => { }}
        />
    );
}