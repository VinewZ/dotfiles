import { VsCode } from '../../Components/VsCode'
/* import SyntaxHighlighter from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs' */

import shikijs from 'shiki'

export function Home() {
  const code = `
      <title>React Syntax Highlighter</title>
      <link rel="stylesheet" href="style.css">
      <script src="index.js"></script>
  `

  const html = shikijs

  return (
    <VsCode.Content>
      {/* <SyntaxHighlighter language="html" style={nightOwl} showLineNumbers>
        {html}
      </SyntaxHighlighter> */}
    </VsCode.Content>
  )
}
