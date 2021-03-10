import React, { PureComponent} from 'react'
import PropTypes from 'prop-types'

export default class FilePicker extends PureComponent {
  constructor () {
    super()
    this.state = {
      key: 0,
    }
    this.fileRef = React.createRef();
  }

  handleChange = () => {
    this.props.onChange(this.fileRef.current.files[0])
    this.setState({
      key: this.state.key + 1,
    })
  }

  render () {
    return (
      <label className='file'>
        { this.props.children }
        <input type='file' key={this.state.key} ref={this.fileRef} onChange={this.handleChange} />
      </label>
    )
  }

  static defaultProps = {
    onChange () {},
  }

  static propTypes = {
    onChange: PropTypes.func,
    children: PropTypes.node,
  }
}
