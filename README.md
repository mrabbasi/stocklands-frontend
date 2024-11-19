# Stockland Technical test


To install:
- Install pnpm https://pnpm.io/installation
- run `pnpm install`
- run `pnpm run dev`

Import your graphql backend 
- run `pnpm schema`

### Front end tasks

The backend you've created now needs a front end for the users to interact with.

### Objectives

1. Connect the Search Field to the Backend:
The App.tsx file has a simple text input field. Please hook it up to the search filter in your new back end so it actually works. If no results are found, make sure to display a friendly error message that helps guide the user. 

2. Create a Table for Pet Information:
Use the Pets Query to pull a list of available pets and show their details in a table with separate columns for each piece of info. The current pet info fragment is missing some details, so you’ll need to expand it to show everything that's needed.

