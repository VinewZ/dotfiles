import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierCaveDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { VsCode } from '../../Components/VsCode'

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
    <VsCode.Content>
      <SyntaxHighlighter
        language="markdown"
        style={atelierCaveDark}
        showLineNumbers
      >
        {code}
      </SyntaxHighlighter>
    </VsCode.Content>
  )
}
