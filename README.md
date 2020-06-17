# server-rendering-react-components

## Server Rendering
- slower client devices aren't detrimental
- however, full functionality of app activates after react is fully loaded 
    - ie, a few seconds after the framework of app appears
- Costs
    - Additional backend logic
        - more code than a CSR app
    - Additional tooling
        - express
        - webpack
            - this translates into additional vectors for bugs to appear
    - Some code may run differently on the server
        - can result in inconsistency
        - example -> client package is a different version than server package -> component mismatch
    - Additional server workload
        - results in increased (usually minimal) costs
        - increased cost becomes more apparent with high traffic, large-scale applications
- Benefits
    - More logic localized on server
        - reduces code sent to client
        - example -> presentational elements can be included strictly on the server
        - moreover all logic sent to client at convenient time -> after user has already seen some content 
    - Application loads faster especially on mobile devices
        - Mobile devices take longer to parse react and content of application
        - User sees content rendering before this fully completes with SSR
    - Instances of users throwing in the towel because of a slow initial load time are greatly mitigated
        - instant url is clicked content appears as it is actively rendering
        - this preoccupies end user who on average has an exceedingly ephemeral attention span
- Summary 
    - SSR apps trade complexity for performance 
    - Complexity
        - more code, sophisticated libraries, convoluted troubleshooting 
    - Performance 
        - application appears much faster on all devices, especially on slow ones

## How SSR Works
- User accesses application (same as CSR)
    - CSR
        - server sends large packet to client including react, components, html, etc
        - then, client parses scripts and makes a request via AJAX to acquire up to date state of app
        - voila, user runs a fully functional app
        - seamless on powerful devices but can take seconds on slower ones 
    - SSR
        - server loads react, components, and state to memory which skips an AJAX call
        - then components and state are rendered to an HTML string -> output of app
        - this small HTML package sent to client where they immediately see relevant data rendering
        - bottom line -> user sees relevant data faster -> goldfish attention span appeased
            - while user is preoccupied with relevant data rendering on device
            - the client then renders script and loads state with another copy of req via AJAX
            - user runs a fully functional app after being able to see relevant data

## Relevant Tools
- "The mechanic that would perfect his work must first sharpen his tools." - Confucius
- Effective tooling saves time
    - React -> renders JSX to html on the client and on the server
    - Express -> sends server-rendered HTML to the client and more
        - localize a lot of logic in express handlers
        - highly customizable in terms of routes and logic 
    - Babel -> allows JSX code to be loaded into server script 
        - JSX must first be converted into JS via Babel
        - Babel converts JSX into JS used by both the client and the server

## Relevant Features of SSR App to be built
- Delivery of server rendered content 
- Interactiviy via rehydration
- Persistent application state 
    - changes client makes are transmitted to server and retained in memory

---------------------------------------------------------------------------------------------------------------------

## Scaffolding an Environment for SSR
- Fluently use Webpack and Babel to transform JSX code into JS
- Use express to create HTTP server where custom logic can be written 
- Create presentational React components (ie, no internal logic or component state)
    - presentational components can easily be rendered on client or server

## Enter CRApp Considerations
- Create React App 
    - Command line utility that scaffolds react apps
    - Best practices are arrived at by consensus of a diverse and senior cast of devs 
    - Automatically generates express, babel, and webpack configurations
    - Includes command line utilities for updating and maintaining project 
    - Meant for interoperability within and between teams 
- Advantages
    - Little to no understanding of full-stack web development required to use 
    - Constantly revised and updated by experts
    - Industry standard tool
        - Devs are almost always already familiar with it
    - Automatically creates dirs and structure based on best practices
    - Tools used are based on best practices
    - Easily implement prepackaged features such as 
        - Linting
        - SSR
        - etc
- Disadvantages
    - Little to no understanding of full-stack web development required to use
        - Can build an app with it but stagnate insofar as becoming a skilled full-stack dev is concerned
    - Negligible educational value 
    - Very large stack makes troubleshooting problems complicated
    - Intricate structure can only be modified from defaults by expert developers 
    - No choice of tooling 
    - Difficult to implement features not already supported 

## Creating a Project and Installing Dependencies
- source code
    - https://github.com/danielstern/server-rendered-react-app

## What is Babel?
- Node utility which converts code from one language to another 
    - usually outputs JS
- Uses plugins to add functionality modularly
    - babel-react-plugin, for example 