class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          firstname: '',
          lastname: '',
          email: '',
          message: ''
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange = e => {
       this.props.onChange({[e.target.name]: e.target.value});
       this.setState({
         [e.target.name]: e.target.value
       });
   }; 
  
    handleSubmit(e) {
      e.preventDefault();
      this.props.onSubmit(this.state);
      console.log(this.state);
      this.setState({
        firstname: '',
        lastname: '',
        email: '',
        message: ''
      });
    //   this.props.onChange({
    //     firstname: '',
    //     lastname: '',
    //     email: '',
    //     message: ''
    //   });
    };
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <label>
                <input name="firstname" type="text" 
                    placeholder="First Name" 
                    value={this.state.firstname} 
                    onChange={e => this.handleChange(e)} />
            </label>
            <br />
            <label>
                <input type="text"
                    name="lastname" 
                    placeholder="Last Name" 
                    value={this.state.lastname} 
                    onChange={e => this.handleChange(e)} />        <br />
            </label>
            <br />
            <label>
                <input type="email" 
                    name="email"
                    placeholder="Email" 
                    value={this.state.email} 
                    onChange={e => this.handleChange(e)} />         <br />
            </label>
            <br />
          
          <label>
          Message: <br />
          <textarea name="message" value={this.state.message} onChange={e => this.handleChange(e)} />
        </label>
            <br />
          <button onClick={() => this.handleSubmit()}>Submit</button>
        </form>
      );
    }
  }
  
  export default Form;