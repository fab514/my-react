- Similar to an attribute in HTML and Javaspcript, a Prop gives data to a componant.
- State is where the data lives, props gives a definition where the data should be displayed.
- If you need to pass anything besides a string you need to use curly brackets. {500}, {true}
- Use {curly brackets} to reference javascript variables.

- {this.props.tagline} 
- <u>this</u> is a componant instance, whatever got passed in when it was used. 
- <u>.props</u> is an object inside of a componant that contains all our assigned properties. 
- <u>.tagline</u> is the attribute being called. 

- When You choose a componant in react tools (on browser) it will show a $r. When typing the $r inside of our console it will show all the instances on the componant. 
- Componant is similar to an object from JS.
- If your componant is simply a render method and prop types we can make it into a stateless function