import { ReactNode } from 'react'

export function VsCodeContent({ children }: { children: ReactNode }) {
  return (
    <div
      className="h-full w-full bg-vs-content px-4 text-white"
      style={{
        gridArea: 'content',
      }}
    >
      {children}
    </div>
  )
}
