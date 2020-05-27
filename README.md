This is a simple demo project displaying how context Api is used and how to replace redux with a custom hook store<br/>
You can checkout this demo project [here](https://www.stellaloizou.eu/replace-redux-with-custom-hook-store/)


The functionality of the demo project basically is to display a product list where the user can favorite or un-favorite an item<br/>
and also check the favorites tab with his favorite items listed there. 
This project is using Redux at first, then context Api (you can check the commits to see the context Api) and later everything is replaced by a custom hook store.
Basically this custom hook store is replacing Redux store, reducers and actions.

The reason why we might not want to use Context Api:
 * Context Api is not meant to be used as a global state management tool for high frequency (like favorite and unfavorite a product) updates only for a low frequency updates (like user authentication). <br/>
  It will work but the performance will not optimized for high frequency updates.
* Every component that uses the context Api  will be rebuilt every time something is changed in that context no matter if it is directly affected or not. 
 
Why we might want to use hooks and js instead of Redux?
* The app is not so big and it will reduce the bundle if we do not use an extra library like Redux.
* For no reason at all just for the sake of showing how a custom hook can share not only logic but data among components.

## To run the project

In the project directory, you can run:

### `npm install`
It will intall all the required packages from package.json needed for this project

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


