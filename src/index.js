
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import First from './components/first';
import Preview from './components/Preview';
import { useState } from 'react';

<link src="https://fonts.googleapis.com/css2" />



const root = ReactDOM.createRoot(document.getElementById('root'));

  function Index() {
    const defaultCode = `# Heading 1\n## Subheading\nThis is a [link](https://www.example.com/).\n\`console.log('Hello, world!');\n\`Code blocks can be written using three backticks:\n\`\`\`javascript\nfunction greeting(name) {\n  return 'Hello, ' + name + '!';\n}\n\`\`\`\n- List item 1\n- List item 2\n- List item 3\n> This is a blockquote.\n\n![Image description](https://www.example.com/image.jpg)\n\n**Bolded text.**\n`;
    const [value,setValue] = useState(defaultCode)
   
       return (<React.StrictMode>
   

   
    
        <First value={value} setValue={setValue} />
        <Preview value={value} />  
       </React.StrictMode>
       
       )
     }
  
     root.render(<Index />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
