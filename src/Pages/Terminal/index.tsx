import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierCaveDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export function Terminal() {
  const code = `
    # General

    Currently I'm using the combo Powershell + Oh My Posh in my terminal.

    - Windows Powershell: https://learn.microsoft.com/pt-br/powershell/scripting/install/installing-powershell-on-windows?view=powershell-7.3
    
    -- Color scheme: Campbell
    -- Font-family: Fira code NF

    - Oh My Posh: https://ohmyposh.dev

    ---

    For the theme, I chose Rainier - Retro variant, but i change it constantly: 

    Theme: https://github.com/joytrekker/rainier-syntax-theme
  `
  return (
    <SyntaxHighlighter
      language="markdown"
      style={atelierCaveDark}
      showLineNumbers
      wrapLongLines
    >
      {code}
    </SyntaxHighlighter>
  )
}
