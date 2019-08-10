import React, {Component} from 'react';

class ListMenuUtama extends Component {
    render() {
        return (
            <div>
                <h1>
                    <center>Selamat Datang Diwarung Nusantara</center>
                </h1>
                <center><img src={this.props.LinkImage} alt="Masakan-Nusantara" width="600"></img></center>
            </div>
        )
    }
}

export default ListMenuUtama;