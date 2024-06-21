import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export function CodePiece(params: any) {
    return <>
        <div className="mockup-code">
            <div className="ml-[1rem]">
                {params.code.map((line: string, index: number) => (
                <pre key={index + 1} data-prefix={index + 1} className='flex bg-none m-0 mb-0 mt-0'>
                    <SyntaxHighlighter language="java" style={darcula} customStyle={{lineHeight: '1.5px'}}>
                        {line}
                    </SyntaxHighlighter>
                </pre>
                ))}
            </div>
        </div>
    </>
}