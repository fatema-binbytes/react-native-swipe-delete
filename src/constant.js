import { LayoutAnimation } from 'react-native'
export const BothSwipe = 'this.props.onSwipeLeft && this.props.onSwipeRight'
export const LeftSwipe = 'this.props.onSwipeLeft && !this.props.onSwipeRight'
export const RightSwipe = '!this.props.onSwipeLeft && this.props.onSwipeRight'
export const Left = 'left'
export const Right = 'right'
export const BackgroundColor = '#178044'
export const CustomLayoutSpring = {
    duration: 200,
    create: {
      type: LayoutAnimation.Types.spring,
      property: LayoutAnimation.Properties.scaleXY,
      springDamping: 10
    },
    update: {
      type: LayoutAnimation.Types.spring,
      springDamping: 10
    }
  }
  export const Duration = 200
  export const Zero = 0