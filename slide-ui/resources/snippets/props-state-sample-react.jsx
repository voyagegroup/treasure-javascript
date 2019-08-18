class CommentInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: "" };
    this.handleFormInput = this.handleFormInput.bind(this);
  }

  handleFormInput(ev) {
    this.setState({ message: ev.target.value });
  }

  render() {
    return (
      <form>
        <span>Comemnt</span>
        <input
          value={this.state.message}
          onChange={this.handleFormInput}
          placeholder={this.props.placeholder}
        />
      </form>
    );
  }
}
