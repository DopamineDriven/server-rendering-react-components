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
    - 