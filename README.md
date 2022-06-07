## TextUtils App

1. Props and PropTypes

Here, I learnt about what is props & proptypes and how to use it.
Props is passed in the component function and used to assign the variables like {props.title} and {props.aboutText}. You can use this name and assign a value as per your requirements.
PropTypes are are the datatype of props assigned.

2. State and Handling Event

Here, I learnt about how to set state and how to handle events.
userState used in this project is a Hook used to set the text and get text to handle the given command like make the letters in UpperCase, LowerCase, remove punctuations etc.
We get by default an event in the function initialized in html tags.
OnChange function is necessary so, that you can change the innertext because we are using state. To chnage the state you need onChange function.

3. Enable and disable dark mode

I learnt about how to use `style` in html tags in JSX and how to enable and disable the dark mode and light mode for this app.

I learnt about enabling dark mode of the whole body and navbar. The whole website can now be in dark mode also.
To change the content of website when dark mode enabled `style={{color: props.mode === 'light' ? 'black': 'white'}}` or if you use bootstrap `text-${props.mode === 'light' ? 'black': 'light'}`}` 

4. Alerts system is added

On Every activity done on the website an alert will be showcased for 1.5 sec as to remind what action did the user perform. The is created in `App.js` file to send it to all the components.

5. React Router

React Router is used to load pages fast. If a component is common in every page, it will not load the whole page again but the parts that are unique to the page. The jump from one page to another happens without any loading.

Here, I have used react router to route the Home page and about page. The components like navbar and alerts are same for all pages.


