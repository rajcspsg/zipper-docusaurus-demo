import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const CodeSection = (props) => {
  return (
    <CopyToClipboard text={props.codeString}>
    <SyntaxHighlighter language="scala" style={docco}>
        
      {props.codeString}
     
    </SyntaxHighlighter>
    </CopyToClipboard>
  );
};

export default CodeSection;