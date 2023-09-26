import { VsCode } from '../../Components/VsCode'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierCaveDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export function Home() {
  const code = `
  
  export function Home() {
    return (
    <div>
      
    </div>
    );
  }
  `

  return (
    <VsCode.Content>
      <SyntaxHighlighter language="jsx" style={atelierCaveDark} showLineNumbers>
        {code}
      </SyntaxHighlighter>
    </VsCode.Content>
  )
}
