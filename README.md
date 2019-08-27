# react-native-swipe-deleteReact-native-swipe-delete-view
react-native-swipe-delete-view 
This library  is a List of rows that swipe to open, close and delete.It handles default native behavior such as closing rows when ListItem is deleted or when other rows are opend with ‘swipe-to-dismiss’ pattern.

This pattern can be seen everywhere from Google Now to Android’s notifications, Gmail, etc. 
Installation
$ npm install react-native-swipe-delete-view —save

Properties

data  
	Datatype:	Array     
	Description:	 Provide data in json format   
	isRequire:	Yes
	
onSwipe

	Datatype:	function(value) 
	Description:	called on swipe item of array and return index of swipe item  
	isRequire:	Yes
	
backgroundView 

	Datatype:	function(value) 
	Description:	custom component for backgroundView, you can pass your own component like button, icon, text
	isRequire:	No

Usage
Here full Example of package usage
Swipe Delete Item
<Item 
        onSwipe={(i) => console.log(i)} 
        data={this.state.data} 
        backComponent={<BackComponent/>}
      />




Keywords
	npm-swipe-delete-list,
  	react-native-swipe-delete,
 	swipe-delete,
 	flatList-delete-view,
	swipe-to-dismiss

