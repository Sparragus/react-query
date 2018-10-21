import { Component } from "react";

export default class Query extends Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
    refetch: () => this.fetchData()
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState(state => ({
      loading: true,
      error: null
    }));

    try {
      const data = await this.props.getData();
      this.setState(state => ({
        loading: false,
        data
      }));
    } catch (error) {
      this.setState(state => ({
        loading: false,
        error
      }));
    }
  };

  render() {
    return this.props.children(this.state);
  }
}
