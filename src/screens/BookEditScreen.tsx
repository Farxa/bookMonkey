import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Book, fetchBook } from "../domain/book";

export const BookEditScreen: React.FC = () => {
  /* This is for uncontrolled forms

  uncontrolled forms are used for fle upload for example
     const titleInputRef = useRef<HTMLInputElement>(null);
      the input looks like this (needs ref attribute)
      <input ref={titleInputRef} id="title" />*/

  /* the folloing is for controlled forms: */

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("submitted");
  };
  const [title, setTitle] = useState<string>("");
  const [book, setBook] = useState<Book>();
  const { isbn } = useParams<{ isbn: string }>();
  useEffect(() => {
    if (isbn) {
      fetchBook(isbn).then((res) => {
        res && setBook(res);
      });
    }
  }, [isbn]);

  useEffect(() => {
    book && setTitle(book.title);
  }, [book]);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          value={title}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setTitle(event.target.value)
          }
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};
