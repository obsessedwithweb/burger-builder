import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
  return class Error extends Component {
    state = {
      error: null
    }

    componentWillMount() {
      this.reqIntercepetors = axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });
      this.resIntercepetors = axios.interceptors.response.use(res => res, error => {
        this.setState({ error: error });
      });
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqIntercepetors);
      axios.interceptors.response.eject(this.resIntercepetors);
    }


    errorConfirmedHandler = () => {
      this.setState({ error: null });
    }

    render() {
      return (
        <React.Fragment>
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </React.Fragment>
      );
    }
  }
}

export default withErrorHandler;