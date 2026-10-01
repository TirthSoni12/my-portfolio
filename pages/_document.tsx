import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return <Html lang="en"><Head /><body><script dangerouslySetInnerHTML={{ __html: "try{var t=localStorage.getItem('portfolio-theme');document.documentElement.dataset.theme=t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches)?'dark':'light'}catch(e){document.documentElement.dataset.theme='light'}" }} /><Main /><NextScript /></body></Html>;
}
