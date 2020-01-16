import React, { Component } from 'react';
import {AppBar,TextField,Container,Toolbar,Typography,Button} from '@material-ui/core/'
import { withStyles } from '@material-ui/core/styles';
import Axios from 'axios'
import { connect } from 'react-redux';
import {Search} from '../redux/actions/search'

const styles = theme => ({
    root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },
});



class Home extends Component {

    constructor(){
        super()
        this.state= {
            search: '',
            dataEvent:[]
        }
    }

    searchHandle= (event)=>{
        const search = event.target.value
        this.setState(
            {
                search:search
            },()=>{
                console.log(search);
                if (search) {
                    const search= this.state.search
                    console.log(search);
                    Axios.get(`https://api.github.com/users/${search}/repos`)
                        .then(event => {
                            this.setState({
                                dataEvent: event.data
                            })
                            console.log(this.state.eventSearch);

                        })
                }
            }
        )
    }
    
    render() {

        const { classes } = this.props;
        const searching = this.props.search
        console.log(searching);
        

        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        
                        <Typography variant="h6" className={classes.title}>
                            Search
                        </Typography>
                       
                    </Toolbar>
                </AppBar>
                <Container maxWidth='md' style={{paddingTop:50}}>
                    <TextField id="outlined-basic" onChange={this.searchHandle} label="Search" variant="outlined" style={{width:'100%'}} />
                    {this.state.search?
                    
                       ( <h1>{this.state.dataEvent.map((item)=>(
                            <h4>
                                <a href ={"https://github.com/"+ item.full_name} target="_blank">
                                    {item.name}
                                </a>
                            </h4>
                        ))}</h1>)
                        :null 
                }
                </Container>
            </div>
          
        );
    }
}
const mapStatetoProps = state => ({
	search: state.search
	
})
export default connect(mapStatetoProps)(withStyles(styles)(Home));
