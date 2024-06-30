import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function CoCodeCodePiece(params: any) {
    return <>
        <div className="mockup-code max-w-[100%] overflow-clip">
            <div className="ml-[1rem]">
                <SyntaxHighlighter 
                    language="java" 
                    style={darcula} 
                    wrapLongLines={true}
                    
                >
                    {params.code}
                </SyntaxHighlighter>
            </div>
        </div>
    </>
}