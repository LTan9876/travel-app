import React from 'react'
import Cropper from 'react-cropper'
import 'cropperjs/dist/cropper.css'

const cropper = React.createRef(null)

export default class Group extends React.Component {
  _crop() {
    // image in dataUrl
    console.log(this.refs.cropper.getCroppedCanvas().toDataURL())
  }

  render() {
    return (
      <Cropper
        ref={cropper}
        src="https://cors-anywhere.herokuapp.com/https://foodandphototours.com/people-old-trades-of-mexico-food-and-photo-tour/"
        style={{height: 400, width: '100%'}}
        // Cropper.js options
        aspectRatio={16 / 9}
        guides={false}
        crop={this._crop.bind(this)}
      />
    )
  }
}
