```mermaid
sequenceDiagram
    participant browser
    participant server
    
    browser->>server: POST https://fullstack-exampleapp.herokuapp.com/new_note_spa
    activate server

    Note right of browser: Browser also pushes new note to the clientside list using JS

    server-->>browser: 201 CREATED
    deactivate server
```
