"use client";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";

type UpdateNoteFn = (text: string) => void;

export default function Editor({
  currentNote,
  updateNote,
}: {
  currentNote: any;
  updateNote: UpdateNoteFn;
}) {
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
