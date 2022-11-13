import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,200;0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;0,9..144,800;0,9..144,900;1,9..144,100;1,9..144,200;1,9..144,300;1,9..144,400;1,9..144,500;1,9..144,600;1,9..144,700;1,9..144,800;1,9..144,900&family=Inter:wght@200;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="https://emojicdn.elk.sh/✌🏼" />
      </Head>
      <body className="antialiased bg-gradient-to-l from-[#628598] via-[#aba487] to-[#424b55]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
