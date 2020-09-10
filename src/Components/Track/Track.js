import React from 'react';
import './Track.css';


class Track extends React.Component {

    constructor(props){
        super(props);


        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
        
    }

    addTrack(){
        this.props.onAdd(this.props.track);
    }

    removeTrack(){
        this.props.onRemove(this.props.track)
    }

    renderAction() {
        if (this.props.isRemoval) {

            return (

                <div className="Track-Action">

                    <button onClick = {this.removeTrack}>-</button>

                </div>

            );

        } else {
            return (

                <div className="Track-Action">

                    <button onClick = {this.addTrack}>+</button>

                </div>

            );
            
        }
    }

    render() {

        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
                <button className="Track-action">{this.renderAction()}</button>
            </div>


        );

    }


}

export default Track;