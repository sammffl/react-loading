/**
 * Created by SamMFFL on 17/1/24.
 */
import React, {Component, PropTypes} from 'react'
import '../static/loading.css';

class Loading extends Component {

    static PropTypes = {
        type: PropTypes.oneOf(['spinner', 'circle', 'brand']),
        showOrHide: PropTypes.oneOf(['show', 'hide']),
    };
    static defaultProps = {
        type: 'brand',
        showOrHide: 'hide',
    };

    constructor(props) {
        super(props);
        this.state = {
            show: props.showOrHide === 'show',
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            show: nextProps.showOrHide === 'show',
        })
    }

    _renderSpinner() {
        return (
            <div className="spinner">
                <div className="bounce1"></div>
                <div className="bounce2"></div>
                <div className="bounce3"></div>
            </div>
        )
    }

    _renderCircle() {
        return (
            <div className="sk-circle">
                <div className="sk-circle1 sk-child"></div>
                <div className="sk-circle2 sk-child"></div>
                <div className="sk-circle3 sk-child"></div>
                <div className="sk-circle4 sk-child"></div>
                <div className="sk-circle5 sk-child"></div>
                <div className="sk-circle6 sk-child"></div>
                <div className="sk-circle7 sk-child"></div>
                <div className="sk-circle8 sk-child"></div>
                <div className="sk-circle9 sk-child"></div>
                <div className="sk-circle10 sk-child"></div>
                <div className="sk-circle11 sk-child"></div>
                <div className="sk-circle12 sk-child"></div>
            </div>
        );
    }

    _renderBrand() {
        return (
            <div className="loading-brand">
                <div className="loading-brand-default">
                    <div className="loading-brand-icon"></div>
                    <div className="loading-brand-loader">
                        <span></span>
                    </div>
                </div>
            </div>
        );
    }


    show() {
        this.setState({
            show: true,
        })
    }

    hide() {
        this.setState({
            show: false,
        })
    }

    render() {
        const {type} = this.props;
        let renderLoading = <div></div>;

        switch (type) {
            case 'spinner':
                renderLoading = this._renderSpinner();
                break;
            case 'circle':
                renderLoading = this._renderCircle();
                break;
            case 'brand':
                renderLoading = this._renderBrand();
                break;
            default:
                renderLoading = this._renderBrand();
        }

        return (
            <div className={`loading-container ${this.state.show ? '' : 'loading-hidden'}`}>
                <div className="loading-mask"></div>
                {renderLoading}
            </div>
        );
    }
}

export default Loading;