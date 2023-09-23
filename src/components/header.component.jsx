import SelectTab from "../components/selectTab.component";

const Header = () => {

  return (
    <section className="header">
      <div className="header__content">
        <h1 className="heading__1">Take a Break</h1>
        <h2 className="heading__2">on Canary Islands</h2>
        <h3 className="heading__3">Book unique adventure</h3>            
        <div className="search searchTabContainer">
          <SelectTab />
        </div>
      </div>
    </section>
  )
}

export default Header;