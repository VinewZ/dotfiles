import {
  AlertTriangle,
  Antenna,
  ChevronsRightLeft,
  GitBranch,
  UploadCloud,
} from 'lucide-react'

export function VsCodeFooter() {
  return (
    <div
      className="flex w-full max-w-7xl items-center gap-1 overflow-hidden rounded-b-lg bg-vs-footer text-xs text-white"
      style={{
        gridArea: 'footer',
      }}
    >
      <span className="flex h-full items-center bg-red-500 px-1">
        <ChevronsRightLeft size={14} />
      </span>
      <span className="flex h-full items-center gap-1 px-1">
        <GitBranch size={14} />
        <span>main</span>
      </span>
      <UploadCloud size={14} className="mr-1" />
      <AlertTriangle size={14} className="mr-1" />
      <Antenna size={14} className="mr-1" />
      <span className="mr-1">{'{..}: 18'}</span>
      <span>Git Graph</span>
    </div>
  )
}
