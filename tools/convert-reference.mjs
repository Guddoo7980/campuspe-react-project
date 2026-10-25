import fs from 'node:fs';
const html=fs.readFileSync('dist/index.html','utf8');
const fragments=[['Header',html.match(/<header[\s\S]*?<\/header>/)?.[0]],['Hero',null],['Opportunity',null],['Resume',null],['Colleges',null],['Employers',null],['Download',null],['Support',null],['Footer',html.match(/<footer[\s\S]*?<\/footer>/)?.[0]]];
const sections=[...html.matchAll(/<section\b[\s\S]*?<\/section>/g)].map(x=>x[0]);
for(const [name,index] of [['Hero',0],['Opportunity',2],['Resume',3],['Colleges',4],['Employers',5],['Download',7],['Support',8]]){fragments.find(x=>x[0]===name)[1]=sections[index]}
const convert=(s)=>s.replace(/\bclass=/g,'className=').replace(/\bfor=/g,'htmlFor=').replace(/<br([^>]*)>/g,'<br$1/>').replace(/<input([^>]*)>/g,'<input$1/>');
const code=`import React from 'react';\n${fragments.map(([name,value])=>{if(!value)throw Error('Missing '+name);return `export function ${name}(){return (\n${convert(value)}\n);}`}).join('\n\n')}\n`;
fs.mkdirSync('src',{recursive:true});fs.writeFileSync('src/StaticSections.jsx',code);
console.log('Generated '+fragments.length+' reusable JSX sections');
