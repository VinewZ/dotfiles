import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierCaveDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export function OmpConfig() {
  const code = `
    # Oh-my-posh config

    - Font-family: Fira code NF
    
    ## Init Oh My Posh with Tonybaloney theme
    
    - Create profile config file
      -- notepad $PROFILE
      -- paste:
        --- oh-my-posh init pwsh --config 'https://raw.githubusercontent.com/JanDeDobbeleer/oh-my-posh/main/themes/tonybaloney.omp.json' | Invoke-Expression
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
