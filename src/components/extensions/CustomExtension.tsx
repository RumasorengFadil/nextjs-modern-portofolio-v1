import { Node, mergeAttributes } from "@tiptap/core"

export const Title = Node.create({
  name: "title",

  group: "block",
  content: "inline*",
  defining: true,

  parseHTML() {
    return [{ tag: "h1" }]
  },

  renderHTML({ HTMLAttributes }) {
    return ["h1", mergeAttributes({ class: "tiptap-title" }, HTMLAttributes), 0]
  },
})
