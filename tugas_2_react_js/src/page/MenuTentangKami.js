import React, {Component} from 'react';

class MenuTentangKami extends Component {
    constructor(props){
        super(props);
        this.state = {
            tentang : "Warung Nusantara Adalah Restoran Bernuansa Makanan Nusantara Kami Ada Untuk Membuat Anda Menikmati Makanan Khas Nusantara"
        }
    }
    render(){
        return(
            <div>
                <center>
                    <p>{this.state.tentang}</p>
                </center>
            </div>
        );
    }
}

export default MenuTentangKami;