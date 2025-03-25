import { render, screen } from '@testing-library/react';
import App from './App';
import { deleteCompanybyid, getAllCompanyInfo } from './redux/CompanySlice';
import CompanyData from './components/CompanyData';
import getAllCompany from './components/GetAllCompany'
import Company from './components/models/Company';

beforeAll(() => {
  console.log('beforeAll');
});

beforeEach(() => {
  console.log('beforreEach');
});
//Company.......
test('render Data from List of all Company', () => {
   
  render(
    <Provider store={store} >
      
       <CompanyData/>
    </Provider>)
  const linkElement = screen.getByText('Find all company');
  expect(linkElement).toBeInTheDocument();
});
// negative test case 
test('render Data from List of all Company', () => {
  render(
    <Provider store={store} >
      <CompanyData/>
    </Provider>);
  const linkElement = screen.findByText();
  expect(linkElement).not.toBe('Some other text which is not present in the component.');
});
// positive test case 
test('render Data from CompanyData', () => {
  render(
    <Provider store={store} >
      <CompanyData />
    </Provider>);
  const linkElement = screen.getByText('Company');
  expect(linkElement).toBeInTheDocument();
});



// negative test case 
test('render Data from CompanyData', () => {
  render(
    <Provider store={store} >
      <CompanyData />
    </Provider>);
  const linkElement = screen.findByText();
  expect(linkElement).not.toBe('Some other text which is not present in the component.');
});



test('render Data from Company Data', () => {
   
  render(
    <Provider store={store} >
       <CompanyData/>
    </Provider>)
  const linkElement = screen.getByText('Update CompanyData');
  expect(linkElement).toBeInTheDocument();
});

test('render Data from Update Company', () => {
   
  render(
    <Provider store={store} >
       <UpdateCompany/>
    </Provider>)
  const linkElement = screen.getByText('Update Company');
  expect(linkElement).toBeInTheDocument();
});

test('render Data from Update Company', () => {
  render(
    <Provider store={store} >
      <CompanuyData/>
    </Provider>);
  const linkElement = screen.findByText();
  expect(linkElement).not.toBe('Some other text which is not present in the component.');
});


test('render Data  Delete Company by id', () => {
  render(
    <Provider store={store} >
      <CompanyData/>
    </Provider>)
  const linkElement = screen.getByText('Delete CompanyBy Id');
  expect(linkElement).toBeInTheDocument();
});


test('render Data Delete Company by id', () => {
  render(
    <Provider store={store} >
      <CompanyData/>
    </Provider>);
  const linkElement = screen.findByText();
  expect(linkElement).not.toBe('Some other text which is not present in the component.');
});

test('render Data from Add New Companyr', () => {
  render(
    <Provider store={store} >
      <CompanyData/>
    </Provider>)
  const linkElement = screen.getByText('Add Company');
  expect(linkElement).toBeInTheDocument();
});

test('render Data Add New Company', () => {
  render(
    <Provider store={store} >
      <CompanyData/>
    </Provider>);
  const linkElement = screen.findByText();
  expect(linkElement).not.toBe('Some other text which is not present in the component.');
});

// test('render Data from List of all Stocks', () => {
//   render(
//     <Provider store={store} >
//        <StockData/>
//     </Provider>)
//   const linkElement = screen.getByText('Find all stocks');
//   expect(linkElement).toBeInTheDocument();
// });

