import React from 'react';
import TrackList from '../TrackList/TrackList';
import './Playlist.css'

class Playlist extends React.Component {
    constructor(props){
        super(props);

        this.handleNameChange = this.handleNameChange.bind(this);

    }
    handleNameChange(event){

        this.props.onNameChange(event.target.value);


    }

    render() {
        return (

            <div class="Playlist">
                <input onChange = {this.handleNameChange} defaultValue={'New Playlist'} />
                 <TrackList isRemoval = {true} onRemove = {this.props.onRemove} tracks = {this.props.tracks}/>
                <button onClick = {this.props.onSave} class="Playlist-save">SAVE TO SPOTIFY</button>
            </div>


        );
    }
}

export default Playlist;