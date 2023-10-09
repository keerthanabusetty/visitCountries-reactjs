import styled from 'styled-components'

export const CountriesComponent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 120vh;
  background-color: #161624;
`
export const CountriesHeading = styled.h1`
  color: #ffffff;
  font-size: 20px;
  font-family: 'Roboto';
`
export const CountriesList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 14px;
  margin-left: 135px;
  list-style-type: none;
  overflow-y: auto;
  width: 85%;
  height: 45vh;
  background-color: #334155;
`
export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 1px solid #94a3b8;
  margin: 10px;
  padding: 2px;
`
export const ListItemCountryName = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 14px;
`
export const VisitButton = styled.button`
  width: 80px;
  border-radius: 5px;
  margin-right: 10px;
  justify-content: space-around;
  color: ${props => (props.isVisited ? '#94a3b8' : '#ffffff')};
  background-color: ${props => (props.isVisited ? 'transparent' : '#3b82f6')};
  cursor: pointer;
`
export const VisitedCountries = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`
export const EmptyHeader = styled.p`
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
`
export const VisitedListDisplay = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
`
export const ListItem1 = styled.li`
  display: flex;
  flex-direction: column;
  width: 30%;
`

export const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
`
export const ThumbItem = styled.img`
  height: 80px;
  width: 200px;
`

export const NameBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
`
export const NameOfItem = styled.p`
  font-family: 'Roboto';
  color: #cbd5e1;
`
export const DeleteButton = styled.button`
  border-radius: 3px;
  width: 80px;
  height: 30px;
  background-color: transparent;
  font-family: 'Roboto';
  color: #cbd5e1;
  margin-right: 10px;
  margin-top: 10px;
  cursor: pointer;
`
