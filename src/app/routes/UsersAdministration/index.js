import React, { Component } from 'react'
import ContainerHeader from 'components/ContainerHeader'
import IntlMessages from 'util/IntlMessages'
import DataBox from "../../../components/AllMyComponents/dataBox"

export class UsersAdministration extends Component {
  render() {
    return (
        <div className = "app-wrapper">
            <ContainerHeader
                 match={this.props.match}
                title={<IntlMessages id="pages.samplePage" />}
            />
            <div className = "page-heading">
            </div> 
            <div>
              <DataBox/>
            </div>  
        </div>            
    )
}
}

export default UsersAdministration

