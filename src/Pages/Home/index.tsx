import { VsCode } from '../../Components/VsCode'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export function Home() {
  const html = `
    <title>React Syntax Highlighter</title>
    <link rel="stylesheet" href="style.css">
    <script src="index.js"></script>
  `

  return (
    <VsCode.Content>
      <SyntaxHighlighter language="html" style={monokai} showLineNumbers>
        {html}
      </SyntaxHighlighter>
    </VsCode.Content>
  )
}
