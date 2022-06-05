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