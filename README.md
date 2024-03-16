code structure of food ordering app:
/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - RestaurantCard
 *      - Img
 *      - Name of Res, Star Rating, cuisine, delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

 // https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ 
 //search github user api for users . click get a user , then call the url given with any name as params.

 //since "promoted" feature is gone , use mockdata for this feature, change jsonResponse to resList to see it.

 //testing setup:
Install React Testing Library
Installed jest
Installed Babel dependencies
Configure Babel
Configure Parcel Config file to disable default babel transpilation
Jest initialize-> npx jest --init
Install jsdom library - written in react testing library setup.
Install @babel/preset-react - to make JSX work in test cases
Include @babel/preset-react inside my babel config
npm i -D @testing-library/jest-dom  - this is for error that'toBeInTheDocument' is not a fn.