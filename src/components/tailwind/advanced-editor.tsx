"use client";

import {
  EditorCommand,
  EditorCommandEmpty,
  EditorCommandItem,
  EditorCommandList,
  EditorContent,
  type EditorInstance,
  EditorRoot,
  ImageResizer,
  JSONContent,
  handleCommandNavigation,
  handleImageDrop,
  handleImagePaste,
} from "novel";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { defaultExtensions } from "./extensions";
import { ColorSelector } from "./selectors/color-selector";
import { LinkSelector } from "./selectors/link-selector";
import { MathSelector } from "./selectors/math-selector";
import { NodeSelector } from "./selectors/node-selector";
import { Separator } from "./ui/separator";

import GenerativeMenuSwitch from "./generative/generative-menu-switch";
import { uploadFn } from "./image-upload";
import { TextButtons } from "./selectors/text-buttons";
import { slashCommand, suggestionItems } from "./slash-command";
import { CoverImageUpload } from "../molecule/CoverImageUploadV1";
import { TagInputInline } from "../molecule/TagInputInlineV1";
import { SelectInput } from "../molecule/SelectInputV1";
import { FloatEditorActions } from "../molecule/FloatEditorActionV1";
import { Category } from "@/typedata/blog/category";
import { BlogForm } from "@/typedata/blog/blogForm";
import { defaultEditorContent } from "@/lib/content";

const extensions = [...defaultExtensions, slashCommand];

const TailwindAdvancedEditor = ({
  unsaved = true,
  categories,
  data,
  onChange,
  onSave,
  onPreview,
  onDelete
}: {
  unsaved?: boolean,
  categories?: Category[],
  data: BlogForm,
  onChange: <K extends keyof BlogForm> (key: K, value: BlogForm[K]) => void,
  onSave?: (e: React.MouseEvent<HTMLButtonElement>) => void,
  onPreview?: (id: string) => (e: React.MouseEvent<HTMLButtonElement>) => void,
  onDelete?: (id: string) => (e: React.MouseEvent<HTMLButtonElement>) => void,
}) => {
  const [charsCount, setCharsCount] = useState();

  const [openNode, setOpenNode] = useState(false);
  const [openColor, setOpenColor] = useState(false);
  const [openLink, setOpenLink] = useState(false);
  const [openAI, setOpenAI] = useState(false);

  const debouncedUpdates = useDebouncedCallback(async (editor: EditorInstance) => {
    onChange("content", editor.getHTML());

    onChange("contentJSON", JSON.stringify(editor.getJSON()));

    setCharsCount(editor.storage.characterCount.words());
  }, 500);

  return (
    <div className="relative w-full min-h-[1000px] max-w-screen-lg mx-auto border-muted bg-background  sm:mb-[calc(20vh)] sm:rounded-lg sm:border sm:shadow-lg">
      <div className="flex absolute right-5 top-5 z-10 mb-5 gap-2">
        <div className="rounded-lg bg-accent px-2 py-1 text-sm text-muted-foreground">{unsaved ? "Unsaved" : "Saved"}</div>
        <div className={charsCount ? "rounded-lg bg-accent px-2 py-1 text-sm text-muted-foreground" : "hidden"}>
          {charsCount} Words
        </div>
      </div>

      <FloatEditorActions
        status={data?.status}
        onStatusChange={(_, value) => onChange("status", value)}
        onSave={onSave}
        onPreview={onPreview && onPreview(data.id)}
        onDelete={onDelete && onDelete(data.id)}
      />

      <div className="relative space-y-4 pt-16 mx-8 sm:mx-12">
        <CoverImageUpload initialValue={data.image_url} onChange={(file) => {
          onChange("thumbnail", file);
        }} />

        <div className="">
          <input
            autoFocus
            type="text"
            placeholder="Title"
            value={data.title}
            onChange={(e) => onChange("title", e.target.value)}
            className="w-full py-2 border-none placeholder:text-muted-foreground font-bold text-4xl bg-transparent shadow-none focus:outline-none focus:ring-0"
          />
        </div>

        <TagInputInline tags={data.tags} setTags={(tags) => {
          onChange("tags", tags);
        }} />

        <SelectInput
          className="w-full"
          options={categories}
          placeholder="Choose Category"
          value={data.categoryId}
          onChange={(_, value) => {
            onChange("categoryId", value)
          }}
        />
      </div>
      <EditorRoot>
        <EditorContent
          initialContent={data.contentJSON ? JSON.parse(data.contentJSON) as JSONContent : defaultEditorContent}
          extensions={extensions}
          className="relative"
          editorProps={{
            handleDOMEvents: {
              keydown: (_view, event) => handleCommandNavigation(event),
            },
            handlePaste: (view, event) => handleImagePaste(view, event, uploadFn),
            handleDrop: (view, event, _slice, moved) => handleImageDrop(view, event, moved, uploadFn),
            attributes: {
              class:
                "prose prose-lg dark:prose-invert prose-headings:font-title font-default focus:outline-none max-w-full",
            },
          }}
          onUpdate={({ editor }) => {
            debouncedUpdates(editor);
          }}
          slotAfter={<ImageResizer />}
        >
          <EditorCommand className="z-50 h-auto max-h-[330px] overflow-y-auto rounded-md border border-muted bg-background px-1 py-2 shadow-md transition-all">
            <EditorCommandEmpty className="px-2 text-muted-foreground">No results</EditorCommandEmpty>
            <EditorCommandList>
              {suggestionItems.map((item) => (
                <EditorCommandItem
                  value={item.title}
                  onCommand={(val) => item.command?.(val)}
                  className="flex w-full items-center space-x-2 rounded-md px-2 py-1 text-left text-sm hover:bg-accent aria-selected:bg-accent"
                  key={item.title}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-md border border-muted bg-background">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                </EditorCommandItem>
              ))}
            </EditorCommandList>
          </EditorCommand>

          <GenerativeMenuSwitch open={openAI} onOpenChange={setOpenAI}>
            <Separator orientation="vertical" />
            <NodeSelector open={openNode} onOpenChange={setOpenNode} />
            <Separator orientation="vertical" />

            <LinkSelector open={openLink} onOpenChange={setOpenLink} />
            <Separator orientation="vertical" />
            <MathSelector />
            <Separator orientation="vertical" />
            <TextButtons />
            <Separator orientation="vertical" />
            <ColorSelector open={openColor} onOpenChange={setOpenColor} />
          </GenerativeMenuSwitch>
        </EditorContent>
      </EditorRoot>
    </div>
  );
};

export default TailwindAdvancedEditor;
