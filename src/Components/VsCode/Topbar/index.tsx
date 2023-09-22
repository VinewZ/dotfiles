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
      className="w-full max-w-7xl bg-vs-topbar text-white rounded-t-lg px-3 flex gap-5 items-center capitalize"
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
        <div key={index} className="flex gap-2 items-center">
          <span className="text-base">{menu}</span>
        </div>
      ))}
    </div>
  )
}
