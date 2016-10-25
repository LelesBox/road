import React, { Component } from 'react'
import './grid.scss'

class Grid extends Component {
  render() {
    const col = this.props.col || 1
    const row = this.props.row || 1
    const width = this.props.width || 1
    const height = this.props.height || 1
    let cloumnContainer, rowContainer
    if (col > 0 && row > 0 ) {
      var colPercentage = (100 / col)  + '%'
      var rowPercentage = (100 / row)  + '%'
      cloumnContainer = (
        <div className="col">
          {each(col, (i) => <div key={i.toString() + "col"} className="col-item" style={{width: colPercentage}}></div>)}
        </div>
      )
      rowContainer = (
        <div className="row">
          {each(row, (i) => <div key={i.toString() + "row"} className="row-item" style={{height: rowPercentage}}></div>)}
        </div>
      )
    }
    return (
      <div className="grid-container" style={{height, width}}>
        {cloumnContainer}
        {rowContainer}
        {this.props.children}
      </div>
    )
  }
}

Grid.propTypes = {
  cloumn: React.PropTypes.number,
  row: React.PropTypes.number,
  width: React.PropTypes.number,
  height: React.PropTypes.number
}

function each (number, callback) {
  var rtn = []
  while (number--) {
    rtn.push(callback(number))
  }
  return rtn
}

export default Grid
