import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierCaveDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export function Browser() {
  const code = `
  - **Vivaldi Browser**
  - Extensions:
    - BitWarden
    - Dark Reader
    - GitZip for GitHub
    - uBlock Origin
    - Hide YouTube Shorts
    - SponsorBlock for YouTube
    - Enhancer for YouTube
  `

  return (
    <SyntaxHighlighter
      language="markdown"
      style={atelierCaveDark}
      showLineNumbers
    >
      {code}
    </SyntaxHighlighter>
  )
}
