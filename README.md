# react-native-swipe-delete-view 

 This library is a List of rows that swipe to open, close and delete.It handles default native behavior such as closing rows when ListItem is deleted or when other rows are opend with ‘swipe-to-dismiss’ pattern.

 This pattern can be seen everywhere from Google Now to Android’s notifications, Gmail, etc.

## Installation

- $ npm install react-native-swipe-delete-view —save
#### Properties

| Props     | Datatype    | Description | isRequire |
| --------|---------|-------|---------|
| data  | 	Array  | Provide data in json format  | Yes |
| onSwipeLeft | function(value) | Called when swipe the item of array left and return index of swiped item | No |
| onSwipeRight | function(value) | Called when swipe the item of array right and return index of swiped item | No |
| backgroundView | function(value) | Custom component for backgroundView, you can pass your own component like button, icon, text | No |

## Usage
  
-  Here full <a href="https://github.com/fatema-binbytes/react-native-swipe-delete/" target="_blank">**Example**</a> of package usage.

#### Swipe Both Side 
```javascript
    <Item 
        onSwipeLeft={i => console.log(i)}
        onSwipeRight={i => console.log(i)} 
        data={this.state.data} 
      />
```
---
<img src="https://github.com/fatema-binbytes/react-native-swipe-delete/blob/master/example/images/bothSideSwipe.gif" width="300" height="500">

##### Swipe Left Only
```javascript
    <Item 
        onSwipeLeft={i => console.log(i)}
        data={this.state.data} 
      />
```
---
<img src="https://github.com/fatema-binbytes/react-native-swipe-delete/blob/master/example/images/swipeLeft.gif" width="300" height="500">

##### Swipe Right Only
```javascript
    <Item 
        onSwipeRight={i => console.log(i)} 
        data={this.state.data} 
       />
```
---
<img src="https://github.com/fatema-binbytes/react-native-swipe-delete/blob/master/example/images/swipeRight.gif" width="300" height="500">

##### Swipe Delete Item with Custom component
```javascript
 <Item 
        onSwipeLeft={i => this.onSwipeLeft(i)}
        onSwipeRight={i => this.onSwipeRight(i)} 
        data={this.state.data} 
        backgoundView={<BackgoundView />}
      />
```
---
<img src="https://github.com/fatema-binbytes/react-native-swipe-delete/blob/master/example/images/addCustomComp.gif" width="300" height="500">

### Clone

- Clone this repo to your local machine using `https://github.com/fatema-binbytes/react-native-swipe-delete.git`

## License
[MIT](https://choosealicense.com/licenses/mit/)
