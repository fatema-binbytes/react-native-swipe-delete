# react-native-swipe-delete-view 

> This library is a List of rows that swipe to open, close and delete.It handles default native behavior such as closing rows when ListItem is deleted or when other rows are opend with ‘swipe-to-dismiss’ pattern.

> This pattern can be seen everywhere from Google Now to Android’s notifications, Gmail, etc.

## Installation

- $ npm install react-native-swipe-delete-view —save
#### Properties

| Props     | Datatype    | Description | isRequire |
| --------|---------|-------|---------|
| data  | 	Array  | Provide data in json format  | Yes |
| onSwipe | function(value) | Called when swipe the item of array and return index of swiped item | Yes |
| backgroundView | function(value) | Custom component for backgroundView, you can pass your own component like button, icon, text | No |

## Usage
  
-  Here full <a href="https://github.com/fatema-binbytes/react-native-swipe-delete/" target="_blank">**Example**</a> of package usage.

##### Swipe Delete Item
```javascript
 <Item
    onSwipe={i => this.onDelete(i)}
    data={this.state.data}
    backgoundView={<BackgoundView />}
  />
```
---
<img src="https://github.com/fatema-binbytes/react-native-swipe-delete/blob/master/example/images/example.gif" width="400" height="790">

### Keywords 

- npm-swipe-delete-list
- react-native-swipe-delete
- swipe-delete
- flatList-delete-view
- swipe-to-dismiss

### Clone

- Clone this repo to your local machine using `https://github.com/fatema-binbytes/react-native-swipe-delete.git`

## License
[MIT](https://choosealicense.com/licenses/mit/)
