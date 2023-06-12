import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head >

      {/* <link rel="stylesheet" href="assets/css/vendor/bootstrap.min.css" />
<link rel="stylesheet" href="/assets/css/vendor/slick.css" />
<link rel="stylesheet" href="/assets/css/vendor/floating.css" />
<link rel="stylesheet" href="/assets/css/style.css" /> */}


{/* --------fonts---- */}

<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@100;400;500&display=swap" rel="stylesheet"></link>







{/* ----project icon ---- */}

<link

          rel="icon"
          href="/logo.jpg"
        
         
        />

<title>Future Techno</title>






    




        </Head>
      <body>
        <Main />
        <NextScript />

   


   





      </body>
    </Html>
  )
}