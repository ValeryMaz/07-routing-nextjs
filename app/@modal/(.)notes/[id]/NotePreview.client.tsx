"use client";
import css from "./NotePreview.module.css";
import { useParams } from "next/navigation";
import { fetchNoteById } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import NotePreviewModal from "@/components/NotePreviewModal/NotePreviewModal";
export default function NotePreview() {
  const router = useRouter();

  const close = () => router.back();
  const { id } = useParams<{ id: string }>();

  const {
    data: note,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["notes", id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  if (isLoading) return <p>Please wait</p>;
  if (error || !note) return <p>Some error..</p>;
  return (
    <NotePreviewModal>
      <div className={css.container}>
        <div className={css.item}>
          <div className={css.header}>
            <h2>{note.title}</h2>
          </div>
          <p className={css.content}>{note.content}</p>
          <p className={css.date}>Created date: {note.createdAt}</p>
          <button className={css.backBtn} onClick={close}>
            Close
          </button>
        </div>
      </div>
    </NotePreviewModal>
  );
}
