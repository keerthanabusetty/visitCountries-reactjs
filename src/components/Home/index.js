import {Component} from 'react'

import {
  CountriesComponent,
  CountriesHeading,
  CountriesList,
  ListItem,
  ListItemCountryName,
  VisitButton,
  VisitedCountries,
  VisitedListDisplay,
  ListItem1,
  EmptyHeader,
  ItemBox,
  ThumbItem,
  NameBox,
  NameOfItem,
  DeleteButton,
} from './styledComponents'

class Home extends Component {
  state = {
    // eslint-disable-next-line react/destructuring-assignment
    list: this.props.list,
  }

  onClickChangeVisit = id => {
    // console.log('clicked', id)
    this.setState(prevState => ({
      list: prevState.list.map(eachItem => {
        if (id === eachItem.id) {
          return {...eachItem, isVisited: !eachItem.isVisited}
        }
        return eachItem
      }),
    }))
  }

  onRemoveVisit = id => {
    // console.log('removed', id)
    this.setState(prevState => ({
      list: prevState.list.map(eachItem => {
        if (id === eachItem.id) {
          return {...eachItem, isVisited: !eachItem.isVisited}
        }
        return eachItem
      }),
    }))
  }

  render() {
    const {list} = this.state

    return (
      <CountriesComponent>
        <CountriesHeading>Countries</CountriesHeading>
        <CountriesList>
          {list.map(eachItem => (
            <ListItem key={eachItem.id}>
              <ListItemCountryName>{eachItem.name}</ListItemCountryName>
              {eachItem.isVisited ? (
                <p
                  style={{
                    font: 'Roboto',
                    color: '#94a3b8',
                    marginRight: '5px',
                    marginBottom: '10px',
                  }}
                >
                  Visited
                </p>
              ) : (
                <VisitButton
                  isVisit={eachItem.isVisited}
                  type="button"
                  onClick={() => this.onClickChangeVisit(eachItem.id)}
                >
                  Visit
                </VisitButton>
              )}
            </ListItem>
          ))}
        </CountriesList>
        <VisitedCountries>
          <h1
            style={{color: '#ffffff', fontFamily: 'Roboto', fontWeight: 'bold'}}
          >
            Visited Countries
          </h1>
          {list.length > 0 ? (
            <VisitedListDisplay>
              {list.map(eachItem =>
                eachItem.isVisited ? (
                  <ListItem1 key={eachItem.id}>
                    <ItemBox>
                      <ThumbItem src={eachItem.imageUrl} alt="thumbnail" />
                      <NameBox>
                        <NameOfItem>{eachItem.name}</NameOfItem>
                        <DeleteButton
                          type="button"
                          onClick={() => this.onRemoveVisit(eachItem.id)}
                        >
                          Remove
                        </DeleteButton>
                      </NameBox>
                    </ItemBox>
                  </ListItem1>
                ) : (
                  ''
                ),
              )}
            </VisitedListDisplay>
          ) : (
            list.length === 0 && (
              <EmptyHeader>No Countries Visited Yet</EmptyHeader>
            )
          )}
        </VisitedCountries>
      </CountriesComponent>
    )
  }
}
export default Home
