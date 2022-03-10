import React, { Component } from 'react'
import dataGlasses from '../Data/dataGlasses.json'

export default class BaiTapThuKinh extends Component {

    state = {
        glasses:
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    }


    changeGlasses = (newGlasses) => {
        this.setState({
            glasses: newGlasses
        })
    }
    renderGlassesList = () => {
        return dataGlasses.map((item, index) => {
            return <img onClick={() => {
                { this.changeGlasses(item) }
            }} className='ml-2 p-2 border border-width-1' style={{ width: '100px', cursor: 'pointer' }} src={item.url} key={index} />
        })
    }

    render() {
        const styleGlasses = {
            width: '150px',
            top: '75px',
            right: '70px',
            opacity: '0.7'
        }
        const infoGlasses = {
            width: '250px',
            top: '200px',
            left: '270px',
            paddingLeft: '15px',
            backgroundColor: 'rgba(255,127,0,5)',
            textAlign: 'left',
            height: '105px'
        }

        return (
            <div style={{ backgroundImage: 'url(./glassesImage/background.jpg)', backgroundSize: '2000px', minHeight: '2000px' }} >
                <div style={{ backgroundColor: 'rgba(0,0,0,0.8)', minHeight: '2000px' }}>
                    <h3 className='text-center text-light'>TRY GLASSES APP ONLINE</h3>
                    <div className='container'>
                        <div className='row  mt-5 text-center '>
                            <div className='col-6'>
                                <div className='position-relative'>
                                    <img className='position-absolute' src='./glassesImage/model.jpg' style={{ width: '250px' }} />
                                    <img style={styleGlasses} className='position-absolute' src={this.state.glasses.url} />
                                    <div style={infoGlasses} className='position-relative'>
                                        <p style={{ color: '#000' }} className='font-weight-bold'>{this.state.glasses.name}</p>
                                        <p style={{ color: '#000', fontSize: '13px', fontWeight: '400' }}> {this.state.glasses.desc}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-6'>
                                <img src='./glassesImage/model.jpg' style={{ width: '250px' }} />

                            </div>
                        </div>
                    </div>

                    <div className='bg-light container text-center mt-5 d-flex justify-content-center'>
                        {this.renderGlassesList()}
                    </div>
                </div>
            </ div >
        )
    }
}
