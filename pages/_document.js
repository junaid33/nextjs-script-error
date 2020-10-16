import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        {/* <script
            data-cfasync="false"
            type="text/javascript"
            src="https://cdn.judge.me/assets/installed.js"
            async
          />
          <script
            data-cfasync="false"
            type="text/javascript"
            src="/widget_preloader.js"
            async
          />
        </Head> */}
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
