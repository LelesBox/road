import React, { Component } from 'react'
import './road.scss'

class Road extends Component {
  render() {
    var paths = this.props.paths || [{x: 0, y: 0}]
    var col = this.props.col
    var row = this.props.row
    var d = "M 0 0"
    if (paths.length > 1) {
      var p = paths[0]
      d = `M ${p.x} ${p.y}`
      for (var i = 1, l = paths.length; i < l; i++) {
        p = paths[i]
        d += ` L ${p.x} ${p.y}`
      }
    }
    return (
      <div className="road-container">
        <svg viewBox={"0 0 "+ col +" " + row}>
          <path className="road-path" strokeWidth=".3" d={d}
          ref={
            (path) => {
              var l = path.getTotalLength()
              path.setAttribute('stroke-dasharray',l)
              path.setAttribute('stroke-dashoffset', l)
            }
          }/>
        </svg>
        <svg className="circle-container" viewBox={"0 0 "+ col +" " + row} xmlns="http://www.w3.org/2000/svg"
        ref={(s) => {
          var n = paths.length
          var point = paths.shift()
           s.appendChild(gcircle(point.x,point.y))
           var interval = setInterval(() => {
             point = paths.shift()
             if(point) s.appendChild(gcircle(point.x,point.y))
             else clearInterval(interval)
           }, 2000 / n)
        }}></svg>
      </div>
    )
  }
}

Road.propTypes = {
  path: React.PropTypes.array
}

function gcircle (cx, cy) {
    var svgNS = "http://www.w3.org/2000/svg";
    var c = document.createElementNS(svgNS,"circle")
    c.setAttributeNS(null, 'cx', cx)
    c.setAttributeNS(null, 'cy', cy)
    c.setAttributeNS(null, 'class', 'circle')
    return c
}
export default Road
