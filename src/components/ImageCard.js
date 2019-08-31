import React from 'react';

class ImageCard extends React.Component{
    constructor(props){
        super(props);

        this.state = {spans:0};

        // Create a reference to refer back later on inside class
        // Tells us a little about image
        this.imageRef = React.createRef();
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load',this.setSpans);
    }

    setSpans = () => {
    // Get the height of the image
        const height = this.imageRef.current.clientHeight;

    //Figure out how many spans the image will need
        const spans = Math.ceil(height / 10 + 1);
    
    //set "span" state to spans
        this.setState({ spans });
    }

    render() {
    // Destructure image prop to just get the values we need
        const { description, urls } = this.props.image;
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img
                    ref={this.imageRef}
                    alt={description}
                    src={urls.regular}
                />
            </div>
        );
    }
}

export default ImageCard;