import { Html, Head, Main, NextScript } from 'next/document'
// const USERSNAP_GLOBAL_API_KEY = '359462f5-f80f-49ec-89c3-adab6792907d'

export default function Document() {
    return (
    <Html>
        <Head />
        {/* <script
            async
            src={`https://widget.usersnap.com/global/load/${USERSNAP_GLOBAL_API_KEY}?onload=onUsersnapCXLoad`}
            />
            <script
                dangerouslySetInnerHTML={{
                __html: `
                window.onUsersnapCXLoad = function(api) {
                    // store the Usersnap global api on the window, if case you want to use it in other contexts
                    window.Usersnap = api; 
                    api.init();
                }         
                `,
            }}
            /> */}
        <body>
        <Main />
        <NextScript />
        </body>
    </Html>
    )
}