import { ReactNode } from 'react'

export function VsCodeContent({ children }: { children: ReactNode }) {
  return (
    <div
      className="px-4 bg-vs-content w-full h-full text-white"
      style={{
        gridArea: 'content',
      }}
    >
      {children}
    </div>
  )
}
