export function VsCodeTopbar() {
  const menus = [
    'file',
    'edit',
    'selection',
    'view',
    'go',
    'run',
    'terminal',
    'help',
  ]

  return (
    <div
      className="flex w-full max-w-7xl items-center gap-5 rounded-t-lg border-b border-black/40 bg-vs-topbar px-3 capitalize text-white"
      style={{
        gridArea: 'topbar',
      }}
    >
      <img
        src="assets/images/brands/vscode.png"
        className="w-4 object-cover"
        alt=""
      />
      {menus.map((menu, index) => (
        <div key={index} className="flex items-center gap-2">
          <span className="text-base">{menu}</span>
        </div>
      ))}
    </div>
  )
}
