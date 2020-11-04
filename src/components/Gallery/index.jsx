import React, { Component } from 'react';
import Masonry from 'react-masonry-css'

import './gallery.css'
import { photos } from '../../images'
import { Spinner } from '../atoms';

const breakpointColumnsObj = {
    default: 4,
    1024: 4,
    768: 3,
    640: 2
  };

class Gallery extends Component {

    state = { photos: [], category: 'all', loaded: false }

    updatePhotos = ( category) => {
        if(category === 'all') {
            this.setState({ photos, loaded: true })
        } else {
            this.setState({
                photos: photos.filter( item => item.category === category ),
                loaded: true
            })
        }
    }

    changeCategory(category) {
        this.setState({ category })
        this.updatePhotos(category)
    }

    componentDidMount() {
        this.updatePhotos('all')
    }

    render() {

        return (
            <>
                {/* spinner */}
                <div className={`flex flex-col items-center text-primary-400 animate-pulse ${ this.state.loaded ? 'hidden' : 'block' }`}>
                    <Spinner width='w-10' />
                    <p>cargando...</p>
                </div>
                <div className={`${ this.state.loaded ? 'block' : 'hidden' }`}>
                    <ul className='font-light uppercase text-xs flex -ml-3 pb-6 pt-2' >
                        <li className={`px-4 py-2 cursor-pointer hover:text-primary-500 ${this.state.category === "all" ? "text-primary-500 font-semibold" : ""}`} onClick={ this.changeCategory.bind(this, 'all') }  >all</li>
                        <li className={`px-4 py-2 cursor-pointer hover:text-primary-500 ${this.state.category === "web" ? "text-primary-500 font-semibold" : ""}`} onClick={ this.changeCategory.bind(this, 'web') } >web</li>
                        <li className={`px-4 py-2 cursor-pointer hover:text-primary-500 ${this.state.category === "3d" ? "text-primary-500 font-semibold" : ""}`} onClick={ this.changeCategory.bind(this, '3d') } >3d</li>
                        <li className={`px-4 py-2 cursor-pointer hover:text-primary-500 ${this.state.category === "dg" ? "text-primary-500 font-semibold" : ""}`} onClick={ this.changeCategory.bind(this, 'dg') } >diseño grafico</li>
                    </ul>
                    {/* gallery */}
                    <Masonry
                        breakpointCols={ breakpointColumnsObj }
                        className='my-masonry-grid'
                        columnClassName="my-masonry-grid_column">
                    {
                        this.state.photos.map((item, index) => {
                            return <div key={ index } className='overflow-hidden rounded-lg'><img src={ item.src } alt=""/></div>
                        })
                    }
                    </Masonry>
                </div>
            </>
        );
    }
}

export default Gallery;
