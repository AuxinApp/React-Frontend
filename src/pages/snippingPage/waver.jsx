import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import getPeaks from './peaks'
import classnames from 'classnames'

const dpr = 1

export default class Waver extends PureComponent {
  /** @type {CanvasRenderingContext2D} */
  ctx = null

  constructor (props) {
    super(props)
    this.canvasRef = React.createRef()
    this.state = {
      peaks: null,
    }
  }

  componentWillMount () {
    this.setPeaks(this.props.audioBuffer.getChannelData(0))
  }

  componentDidMount () {
    const canvas = this.canvasRef.current
    const ctx = canvas.getContext('2d')
    this.ctx = ctx
    this.repaint()
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.audioBuffer !== nextProps.audioBuffer) {
      this.setPeaks(nextProps.audioBuffer)
    }
  }

  componentDidUpdate () {
    this.repaint()
  }

  setPeaks (channelData) {
    const peaks = getPeaks(this.props.width * dpr, channelData)
    this.setState({
      peaks,
    })
  }

  repaint () {
    const { ctx } = this
    const peaks = this.state.peaks
    const count = peaks.length
    const height = this.props.height / 2
    const centerY = this.props.height / 2 * dpr


    ctx.lineWidth = 1
    ctx.clearRect(0, 0, this.props.width * dpr, this.props.height * dpr)

    for (var i = 0; i < count; i++) {
      const [min, max] = peaks[i]
      const x = i - 0.5

      ctx.beginPath()
      ctx.strokeStyle = this.props.color1;
      ctx.moveTo(x, ((min + 1) * height) + 0.5)
      ctx.lineTo(x, centerY)
      ctx.stroke()
      
      ctx.beginPath()
      ctx.strokeStyle = this.props.color2;
      ctx.moveTo(x, centerY)
      ctx.lineTo(x, ((max + 1) * height) + 0.5)
      ctx.stroke() 
  
    }
  }

  render () {

    return (
      <canvas
        ref={this.canvasRef}
        className={classnames('wave-canvas', this.props.className)}
        style={{
          width: this.props.width + 'px',
          height: this.props.height + 'px',
        }}
        width={this.props.width * dpr}
        height={this.props.height * dpr}
      />
    )
  }

  static defaultProps = {
    color1: '#ccc',
    color2: '#ddd',
  }

  static propTypes = {
    className: PropTypes.string,
    autioBuffer: PropTypes.instanceOf(AudioBuffer),
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    color1: PropTypes.string,
    color2: PropTypes.string,
  }
}
