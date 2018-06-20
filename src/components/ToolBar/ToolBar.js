import React ,{ Component} from 'react';
import PropTypes from 'prop-types';

import {NavLink} from 'react-router-dom';
import './ToolBar.css';


const BarButton = ({config, onClick, toggle, onMouseEnter, onMouseLeave, i} ) => {
        
    const {title, disabled, icon, active} = config;
    let css = 'btn btn-default btn-circle btn-lg';
    css= active ? `${css} active`: css;

    return(
            
        <button name={title} 
            className={css} 
            onClick={onClick}
            disabled={disabled}
            onMouseEnter={() => onMouseEnter(i)}
            onMouseLeave={() => onMouseLeave(-1)}
        > 
        { i === toggle && <span className='btn-text'>{title}</span>}
            <i name={title} className={icon} />
        </button>

    );
    
}
//Prop Types validation
BarButton.propTypes={
    config: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
 };

class ToolBar  extends  Component {
    
    constructor(props){
        super(props);
        
        this.state = {
            toggle : -1
        }

        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }
   

    onMouseEnter(i){
        this.setState({toggle:i});
    }

    onMouseLeave(i){
        this.setState({toggle:i});
    }

    render(){
        const { buttons, onClick, title, path } = this.props;
        return (

            <div className="toolbar animated bounceInDown">

                <h3 className="toolbar__title text-center my-5 text-capitalize">{title} manager</h3>
                <div className="toolbar__buttons d-flex justify-content-center">
                
                    { Object.keys(buttons).map((b, index) => <BarButton config={buttons[b]} onClick={onClick} toggle={this.state.toggle} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} i={index} key={index}/>) }
                    <NavLink to={path} activeClassName="nav__link--active" className='nav__link'>
                        
                        <button className="btn btn-default btn-circle btn-lg" onMouseEnter={ () => this.onMouseEnter(3)} onMouseLeave={() => this.onMouseLeave(-1)}>
                            { this.state.toggle === 3 && <span className='btn-text btn-text-add'>Add</span>}
                            <i className="fa fa-plus" />
                        </button>
                    </NavLink>

                </div>

            </div>

        );
    }
   

}

//Prop Types validation
ToolBar.propTypes={
   buttons: PropTypes.object.isRequired,
   onClick: PropTypes.func.isRequired,
   title: PropTypes.string.isRequired,
   path: PropTypes.string.isRequired
};

export default ToolBar;