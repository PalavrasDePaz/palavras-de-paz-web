/* eslint-disable max-lines */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-unused-expressions */

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

import styles from "./styles.module.css";

const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
});

const shortcutKeys = ["Control"];

interface Props {
  publicationId: number | null;
}

interface Publication {
  id: number | null;
  img: string | null;
  content?: string;
}

const exampleData: Publication[] = [
  {
    id: 0,
    img: "https://opengraph.githubassets.com/63291f4734814e3312e0c4f979509585209808a60a1789af5acc3c0a523d0513/zetachang/react-native-dotenv/issues/24",
    content: "exemplo 1",
  },
  {
    id: 1,
    img: "https://opengraph.githubassets.com/63291f4734814e3312e0c4f979509585209808a60a1789af5acc3c0a523d0513/zetachang/react-native-dotenv/issues/24",
    content: "exemplo 2",
  },
  {
    id: 2,
    img: "https://opengraph.githubassets.com/63291f4734814e3312e0c4f979509585209808a60a1789af5acc3c0a523d0513/zetachang/react-native-dotenv/issues/24",
    content: "exemplo 3",
  },
  {
    id: 3,
    img: "https://opengraph.githubassets.com/63291f4734814e3312e0c4f979509585209808a60a1789af5acc3c0a523d0513/zetachang/react-native-dotenv/issues/24",
    content: "exemplo 4",
  },
  {
    id: 4,
    img: "https://opengraph.githubassets.com/63291f4734814e3312e0c4f979509585209808a60a1789af5acc3c0a523d0513/zetachang/react-native-dotenv/issues/24",
    content: "exemplo 5",
  },
  {
    id: 5,
    img: "https://opengraph.githubassets.com/63291f4734814e3312e0c4f979509585209808a60a1789af5acc3c0a523d0513/zetachang/react-native-dotenv/issues/24",
    content: "exemplo 6",
  },
];

export default function TextEditor({ publicationId }: Props) {
  let shortcut: string[] = [];
  let inShortcut = false;
  const waitingToShortcutEnd = false;

  const undoStack: string[] = [];
  const redoStack: string[] = [];

  const [listening, setListening] = useState(false);
  const [selectedPublication, setSelectedPublication] =
    useState<Publication | null>(null);
  const [content, setContent] = useState<string>("");

  const editor = useRef(null);

  const config = {
    readonly: false,
    placeholder: "" || "Start typings...",
  };

  useEffect(() => {
    if (publicationId === null) {
      setSelectedPublication({
        id: null,
        img: null,
        content: "",
      });
    } else {
      const searchedPublication = exampleData.filter(
        (data) => data.id === publicationId
      )[0];
      if (searchedPublication) {
        setSelectedPublication(searchedPublication);
      }
    }
  }, [publicationId]);

  useEffect(() => {
    if (selectedPublication?.content !== undefined) {
      setContent(selectedPublication.content);
    }
  }, [selectedPublication]);

  useEffect(() => {
    undoStack.push(content);
  }, [content]);

  function checkShortcut() {
    if (!shortcut.length) return;

    if (shortcut[0] === "Control" && shortcut[1] === "z") {
      const currentContent = undoStack.pop();
      const olderContent = undoStack[undoStack.length - 1];
      if (olderContent) {
        currentContent && redoStack.push(currentContent);
        setContent(olderContent);
      }
    } else if (
      shortcut[0] === "Control" &&
      shortcut[1] === "Shift" &&
      shortcut[2] === "Z"
    ) {
      const newerContent = redoStack.pop();
      if (newerContent) {
        setContent(newerContent);
      }
    }
  }

  function captureShortcut(event: KeyboardEvent) {
    if (waitingToShortcutEnd) return;

    if (shortcutKeys.includes(event.key)) {
      inShortcut = true;
    }

    if (inShortcut && shortcut[shortcut.length - 1] !== event.key) {
      shortcut.push(event.key);
      checkShortcut();
    }
  }

  function clearShortcut() {
    inShortcut = false;
    shortcut = [];
  }

  useEffect(() => {
    if (listening) {
      document.addEventListener("keydown", captureShortcut);
      document.addEventListener("keyup", clearShortcut);
    } else {
      document.removeEventListener("keydown", captureShortcut);
      document.removeEventListener("keyup", clearShortcut);
    }
    return () => {
      document.removeEventListener("keydown", captureShortcut);
      document.removeEventListener("keyup", clearShortcut);
    };
  }, [listening]);

  return (
    <article className={styles.textEditor} onClick={() => setListening(true)}>
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        onBlur={(newContent) => setContent(newContent)}
        onChange={(newContent) => {}}
      />
    </article>
  );
}
