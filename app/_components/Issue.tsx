'use client'
import { useCallback, useRef, useState } from 'react'
import Status from './Status'
import { useMutation } from '@urql/next'
import { EditIssueIssueMutation } from '@/gql/editIssueIssueMutation'
import { DeleteIssueMutation } from '@/gql/deleteIssueMutation'

const Issue = ({ issue, filterOut }: any) => {
  const [content, setContent] = useState(issue.name)
  const editableRef = useRef()
  const displayId = issue.id.split('-').pop().slice(-3)
  const [editResult, editIssue] = useMutation(EditIssueIssueMutation)
  const [deleteResult, deleteIssue] = useMutation(DeleteIssueMutation)

  const editFn = useCallback(
    async (e: any) => {
      e.preventDefault()
      const text = e.target.textContent
      if (e.code !== 'Enter' || text === content) return

      await editIssue({ input: { id: issue.id, name: text } })
      setContent(text)
    },
    [issue.id, content, editIssue]
  )

  const deleteFn = async (e: any) => {
    e.preventDefault()
    await deleteIssue({ id: issue.id })
    filterOut(issue.id)
  }

  return (
    <div className="px-4 h-[40px] border-b flex items-center hover:bg-slate-50 gap-4">
      <span className="text-sm text-slate-300 w-[80px]">
        {`PAR-${displayId}`.toUpperCase()}
      </span>
      <Status status={issue.status} issueId={issue.id} />

      <span
        className="basis-2/4"
        ref={editableRef}
        suppressContentEditableWarning
        contentEditable="true"
        onKeyUp={editFn}
      >
        {content}
      </span>
      <button
        data-issue-id={issue.id}
        onClick={deleteFn}
        className="basis-.5/4"
      >
        Delete
      </button>
    </div>
  )
}

export default Issue
