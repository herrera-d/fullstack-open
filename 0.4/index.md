# Creating a new note

This diagram is for documenting how the create a new note works in https://studies.cs.helsinki.fi/exampleapp/notes
<br/>

```mermaid

  sequenceDiagram
  participant Browser
  participant Server

Browser->>Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
activate Server
    Server-->>Browser: 302 Redirect to /exampleapp/notes
deactivate Server


Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/notes
activate Server
    Server-->Browser: HTML
deactivate Server

Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
activate Server
    Server-->>Browser: main.css / 304 Not Modified
deactivate Server


Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
activate Server
    Server-->>Browser: main.js / 304 Not Modified
deactivate Server


Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
activate Server
    Server-->>Browser: data.json / 200 OK
deactivate Server




```
