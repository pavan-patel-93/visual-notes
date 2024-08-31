import { EditorContent } from '@tiptap/react'
import React, { useRef } from 'react'

import { LinkMenu } from './components/menus/LinkMenu'

import { useBlockEditor } from './useBlockEditor'

import '@/ui/editor/styles/index.css'

import ImageBlockMenu from './extensions/ImageBlock/components/ImageBlockMenu'
import { ColumnsMenu } from './extensions/MultiColumn/menus'
import { TableColumnMenu, TableRowMenu } from './extensions/Table/menus'
import { TextMenu } from './components/menus/TextMenu'
import { ContentItemMenu } from './components/menus/ContentItemMenu'
import * as Y from 'yjs'
import { TiptapCollabProvider } from '@hocuspocus/provider'

export const BlockEditor = ({
  aiToken,
  ydoc,
  provider,
}: {
  aiToken?: string
  hasCollab: boolean
  ydoc: Y.Doc
  provider?: TiptapCollabProvider | null | undefined
}) => {
  const menuContainerRef = useRef(null)

  // fetch the intial content from database 
  const { editor, users, collabState } = useBlockEditor({ aiToken, ydoc, provider })

  if (!editor || !users) {
    return null
  }

  return (
    <div className="flex h-full" ref={menuContainerRef}>
      <div className="relative flex flex-col flex-1 h-full overflow-hidden">
        <EditorContent editor={editor} className="flex-1 overflow-y-auto" />
        <ContentItemMenu editor={editor} />
        <LinkMenu editor={editor} appendTo={menuContainerRef} />
        <TextMenu editor={editor} />
        <ColumnsMenu editor={editor} appendTo={menuContainerRef} />
        <TableRowMenu editor={editor} appendTo={menuContainerRef} />
        <TableColumnMenu editor={editor} appendTo={menuContainerRef} />
        <ImageBlockMenu editor={editor} appendTo={menuContainerRef} />
      </div>
    </div>
  )
}

export default BlockEditor