import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'


class MyDocument extends Document {

  render() {
    return (
      <Html dir="rtl" lang="fa-IR">
        <Head>
        <link rel="icon" href="/images/DreamIcon.png" />
        <link rel="preload" as="font" />
        <script src="[ckeditor-build-path]/ckeditor.js"></script>
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap" rel="stylesheet" />
        <link rel="apple-touch-icon" href="/example.png" />
        <meta name="theme-color" content="#0d2040"/>
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <script dangerouslySetInnerHTML={{ __html: `var _smartsupp = _smartsupp || {};
_smartsupp.key = 'b7437b60e4c20fabbb9ef24ba503fb94c768eb33';
window.smartsupp||(function(d) {
  var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
  s=d.getElementsByTagName('script')[0];c=d.createElement('script');
  c.type='text/javascript';c.charset='utf-8';c.async=true;
  c.src='https://www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
})(document);` }} />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
