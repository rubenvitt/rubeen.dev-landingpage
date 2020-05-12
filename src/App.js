import React from 'react';
import './App.css';
import {Button, Container, Icon, List} from 'semantic-ui-react'
import SourceCodeInfo from "./components/sourcecodeinfo/SourceCodeInfo.component";


const Item = ({domain, description, children, main = false}) => {
    const handleButtonClick = () => {
        window.location.href = 'https://' + domain;
    };
    return (
        <List.Item>
            <List.Icon name={main ? 'server' : 'file'}/>
            <List.Content>
                <List.Header>{domain}</List.Header>
                <List.Description>{description}</List.Description>
                <Button animated primary onClick={handleButtonClick}>
                    <Button.Content visible>Visit website</Button.Content>
                    <Button.Content hidden>
                        <Icon name='arrow right'/>
                    </Button.Content>
                </Button>
                <List.List>
                    {children}
                </List.List>
            </List.Content>
        </List.Item>
    )
}

const ProjectList = () => (
    <Container className='appContainer'>
        <List>
            <Item domain='rubeen.one' description={'Main website'} main={true}>
                <Item domain='redirect.rubeen.one' description='Redirecting service'/>
            </Item>
            <Item domain={"rubeen.dev"} description={"Actual website containing a list of services"} main={true}>
                <Item domain={'gitlab.rubeen.dev'}
                      description={'Self hosted Gitlab Server with some open source projects'}/>
                <Item domain={'cv.rubeen.dev'} description={'My CV in style of a terminal-react app'}/>
                <Item domain={'portfolio.rubeen.dev'}
                      description={'Portfolio website with some of my projects. Built with Ruby on Rails'}/>
            </Item>
        </List>
    <SourceCodeInfo />
    </Container>
)

function App() {
    return (
        <ProjectList/>
    );
}

export default App;
