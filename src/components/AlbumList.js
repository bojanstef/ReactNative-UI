import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

export default class AlbumList extends Component {
    state = { albums: [] };

    componentWillMount() {
        // eslint-disable-next-line
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response =>
                response.json()
            )
            .then(responseData =>
                this.setState({ albums: responseData })
            );
    }

    renderAlbums() {
        return this.state.albums.map(album =>
            // album title's are unique
            <AlbumDetail key={album.title} album={album} />
        );
    }

    render() {
        console.log(this.state);
        return (
            <ScrollView>
                { this.renderAlbums() }
            </ScrollView>
        );
    }
}
