import React from 'react'
import { Header } from 'semantic-ui-react'
import './header.css'

const AppHeader = () => (
  <div>
    <Header className='appheader' as='h1' attached='top'>
     Todos
    </Header>
  </div>
)

export default AppHeader