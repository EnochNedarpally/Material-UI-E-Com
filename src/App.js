import {  ThemeProvider } from '@mui/material';
import Header from './components/Header';
import Navbar from './components/navbar/Navbar';
import ProductList from './components/products/ProductList';

// import Appbar from './components/AppBar';
// import ImageCard from './components/ImageCard';
import theme from './theme';

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <>
        <Navbar/>
        <Header/>
        <ProductList/>
        {/* <Appbar />
      <ImageCard/>
      <ImageCard/>
      <ImageCard/>
      <ImageCard/>
      <ImageCard/> */}
      </>
    </ThemeProvider>
  );
}

export default App;
