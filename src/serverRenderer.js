import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {ServerStyleSheet} from 'styled-components';

import Root from './Root';
import configureStore from './store/configureStore';

function renderHTML(html, styles, preloadedState) {
    return `
      <!doctype html>
      <html>
        <head>
          <meta charset=utf-8>
          <title>React Server Side Rendering</title>
          ${styles}
        </head>
        <body>
          <div id="root">${html}</div>
          <script>
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
            window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
          <script src="/main.js"></script>
        </body>
      </html>
  `;
}

export default function serverRenderer() {
    return (req, res) => {
        const store = configureStore();
        const sheet = new ServerStyleSheet();
        const context = {};
        const root = (
            <Root
                context={context}
                location={req.url}
                Router={StaticRouter}
                store={store}
            />
        );
        store.runSaga().done.then(() => {
            const htmlString = renderToString(sheet.collectStyles(root));
            const styles = sheet.getStyleTags();
            if (context.url) {
                res.writeHead(302, {
                    Location: context.url,
                });
                res.end();
                return;
            }
            const preloadedState = store.getState();
            res.send(renderHTML(htmlString, styles, preloadedState));
        });
        renderToString(root);
        store.close();
    };
}
