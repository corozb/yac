# yac
Yet Another Chat


Must have the following features:
* login (could be just login by nickname or full signup process your choice)
* like IRC on one chat room
* cant be 2 people with same nickname
* chat room with the whole history
* an input to type messages
* message must be appended to the chat of all participants
* messages must show the sender and time
* Integrage the text input with a Youtube Bot. The goal is to type a message inside text input with the followling format:
    * text format: `/youtube any_string`
      * must query youtube search api with `any_string` 
      * take the first value of the search
      * append a message to the chat room with embed youtube player with first value
  

## Front end, use this stack:
* Javascript:
  * React
  * redux
  
* HTML/CSS material

## Backend, use this stack:
* Applicacion:  
  * Python - Bonus
  * Node
  * firebase or similar

## Platform:
* Run on heroku free plan, or whereever you like but reachable from anywhere.


# To apply for a job just... 

* fork this repo
* create a PR with the URL to test try it.

<hr>
<br/>
<br/>

# YAC - Cristian Orozco

#### This App was built with ReactJS and Firebase:
-	 **Sign Up** to register when the user don't have an account. Add an <i>Avatar</i> with its `url` for your profile picture.
The password must have 6 characters and the email correspond to just one user, in this way two users don't have the same register.
-	**Login** with email and password
-	After register and login go to the chatroom where you can type and find the chat historial 

#### Mockups:
###### Log In
<a href="https://ibb.co/QMt25q9"><img src="https://i.ibb.co/VT57KhV/signin.png" alt="signin" border="0"></a>

###### Sign Up
<a href="https://ibb.co/NCwzrQ7"><img src="https://i.ibb.co/6w658VN/signup.png" alt="signup" border="0"></a>

###### Chat
<a href="https://ibb.co/ZxPXvgm"><img src="https://i.ibb.co/5Ly4CjF/chatroom.png" alt="chatroom" border="0"></a>


#### Components:
-	Header (with Log Out section) (App Bar)
-	Login (Sign In)
-	Signup (Sign Up)
-	User
-	Chat ( new messages and chatroom)

The necessary dependencies and commmands used for installation (windows with npm)

##### React:
![](https://s3.amazonaws.com/ckl-website-static/wp-content/uploads/2018/11/capa.rurik_-1280x680.png)

#### `npm i create-react-app`
#### `create-react-app <my-app>`

<hr>
##### Routes:

![](https://daqxzxzy8xq3u.cloudfront.net/wp-content/uploads/2019/04/30123219/react-router-dom-feature-img.jpg)
#### `npm i react-router-dom`

<hr>



##### Firebase:
  ![](https://sethphat.com/wp-content/uploads/2017/11/social.png)

#### `npm i firebase@7.3.0`

<hr>
#### [Material-UI]( https://material-ui.com/): 
React components for faster and easier web development. 
<br/>

![](https://miro.medium.com/max/3374/1*_mdpsmNUZ05vQb-q09t3jA.png)


#### `npm i @material-ui/core`



##### Icons: 
I linked Font Awesome into the `index.html` file in same way with typography font

##### [Documentation](https://material-ui.com/getting-started/usage/)
