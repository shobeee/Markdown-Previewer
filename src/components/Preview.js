import React from 'react';
import {marked} from 'marked';

export default function Preview(props) {
    const show = (props.value) || '';
    const html = marked(show, { gfm: true });
  return (
    <div>
      <div id='preview' dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>
  )
}
