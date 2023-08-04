import { AboutUs, FindUs, Gallery, Header, Intro, SpecialMenu } from './container'

import { Footer, Navbar } from './components'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Intro />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
}

export default App;