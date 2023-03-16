"use client";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";

export default function Editor({ currentNote, updateNote }) {
  const mdParser = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
  });

  return (
    <section className="pane editor">
      <MdEditor
        value={currentNote.body}
        renderHTML={(text) => mdParser.render(text)}
        onChange={updateNote}
        view={{ menu: true, md: true, html: true }}
      />
    </section>
  );
}
