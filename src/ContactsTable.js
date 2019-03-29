import React, { Component } from 'react';
import {BootstrapTable,TableHeaderColumn} from 'react-bootstrap-table';
import ReactDOM from 'react-dom';
import axios from 'axios'



class ContactsTable extends Component {





      constructor(props) {
          super(props);
          this.state = {
          allContacts: this.props.array
          }
        }

        getAllContacts = () => {
          axios.get('http://localhost:8080/contacts/getList').then(response =>{
            this.setState({allContacts: response.data,
            });

          });
        }

        componentDidMount() {
          this.getAllContacts();
        }



        render() {
          return (

            <div>
              <BootstrapTable
              data={ this.state.allContacts }
              options={ { noDataText: 'There are no contacts' } }
              search>
                <TableHeaderColumn  tdStyle={{ whiteSpace: 'unset' }}  Column width={'5%'} dataField='name' isKey={ true }>Name</TableHeaderColumn>
                <TableHeaderColumn  tdStyle={{ whiteSpace: 'unset' }}  Column width={'7%'} dataField='email'>Email</TableHeaderColumn>
                <TableHeaderColumn  tdStyle={{ whiteSpace: 'unset' }}  Column width={'5%'} dataField='company'>Company</TableHeaderColumn>
                <TableHeaderColumn  tdStyle={{ whiteSpace: 'unset' }}  Column width={'9%'} dataField='country'>Country</TableHeaderColumn>
                <TableHeaderColumn  tdStyle={{ whiteSpace: 'unset' }}  Column width={'9%'} dataField='city'>City</TableHeaderColumn>
                <TableHeaderColumn  tdStyle={{ whiteSpace: 'unset' }}  Column width={'7%'} dataField='job_history'>Job History</TableHeaderColumn>
              </BootstrapTable>


              </div>
    )
  }

}
export default ContactsTable;
