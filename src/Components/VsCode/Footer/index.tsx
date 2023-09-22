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
      className="w-full max-w-7xl bg-vs-footer text-white text-xs rounded-b-lg flex gap-1 items-center overflow-hidden"
      style={{
        gridArea: 'footer',
      }}
    >
      <span className="bg-red-500 h-full flex items-center px-1">
        <ChevronsRightLeft size={14} />
      </span>
      <span className="h-full flex items-center px-1 gap-1">
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
