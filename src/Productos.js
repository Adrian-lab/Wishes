import React from "react";
import MasonryLayout from 'react-masonry-layout';

class Productos extends React.Component {
 
    state = {
      perPage: 10,
      items: Array(20).fill()
    }
   
    loadItems = () => {
        this.setState({
          items: this.state.items.concat(Array(this.state.perPage).fill())
        });
    }
   
    render() {
      return (
        <div className="App">
   
          <MasonryLayout
            id="masonry-layout"
            infiniteScroll={this.loadItems}>
   
            {this.state.items.map((v, i) => {
              let height = i % 2 === 0 ? 200 : 100;
              return (
                <div
                  key={i}
                  style={{
                    width: '100px',
                    height: `${height}px`,
                    lineHeight: `${height}px`,
                    color: 'white',
                    fontSize: '32px',
                    display: 'block',
                    background: 'rgba(0,0,0,0.7)'
                  }}>
                  {i}
                </div>
              )}
            )}
   
          </MasonryLayout>
        </div>
      );
    }
  }

export default Productos;
