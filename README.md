# oneRTE

Personal attempt at building a collborative RTE using Operational Transfer (OT) / Conflict-free Replicated Data Type (CRDT)

## References

- https://dev.to/kannndev/let-s-build-a-collaborative-rich-text-editor-32n3

## Set up
1. `cd server`
2. `yarn add ws sharedb rich-text @teamwork/websocket-json-stream`
3. `node app.js`
3. `cd client`
4. `yarn add sharedb rich-text quill`
5. `yarn start`

Open the app in 2 windows and type something. You should see that the 2 tabs are in sync.