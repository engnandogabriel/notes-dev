import React, { useContext, useRef, useState } from "react";
import { Editor as EditorText } from "@tinymce/tinymce-react";

import { GlobalHandelContext } from "../../../Context/Functions/HandleFunctios";
import { NotesGlobalContex } from "../../../Context/NotesContext";

const Editor = ({ props }) => {
  const { currentNote, currnetIdNotes } = useContext(GlobalHandelContext);
  const { saveNotes } = useContext(NotesGlobalContex);
  const [timer, setTimer] = useState(null);

  const editorRef = useRef(null);

  const handleChange = () => {
    clearTimeout(timer);
    setTimer(
      setTimeout(() => {
        var author = window.localStorage.getItem("id");
        saveNotes(currnetIdNotes, author, editorRef.current.getContent());
      }, 2000)
    );
  };

  // return <EditorContent editor={editor} />;

  return (
    <>
      <EditorText
        onInit={(evt, editor) => (editorRef.current = editor)}
       apiKey='v4jrh82g5lo3u840inemwqof7g7j1b2dn2qreji9njntmnth'
        initialValue={currentNote.body}
        apiKey="v4jrh82g5lo3u840inemwqof7g7j1b2dn2qreji9njntmnth"
        init={{
          entity_encoding: "raw",
          height: 500,
          menubar: false,
          plugins: [
            "anchor autolink charmap emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss",
          ],
          toolbar:
            "blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeforma ",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
    </>
  );
};

export default Editor;
