# Card component

## Example usage
```
<Card  
	cardTitle="Installation instructions"  
	backgroundColor="teal"  
	lineColor="dark"  
	maxWidth={700}
>
```

## Props

**[required] cardTitle**
``cardTitle="title of card"``

**[optional] minHeight**
 ``minHeight={number}``
 default = 200
 
**[optional] maxHeight**
 ``minHeight={number}``
 default = empty
 
**[optional] maxWidth**
 ``maxWidth={number}``
default = 300

**[optional] textColor**
To see what options you have, look inside src/style folder or create your own class
``textColor="classname"``
Example: ``backgroundColor="white-text"``
default = black-text

**[optional] backgroundColor**
To see what options you have, look inside src/style folder or create your own class
``backgroundColor="classname"``
Example: ``backgroundColor="teal"``
default = white

**[optional] lineColor**
You have 2 choices, dark or light
``lineColor="dark"``
default = light
