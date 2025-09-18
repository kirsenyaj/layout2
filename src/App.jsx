export default function App() {
  function TopContent(props) {
    return <div className="half red" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '45px', color: 'white' }}>{props.text}</div>;
  }
  
  function BottomContent(props) {
    return <div className="mini peach" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '45px', color: 'white' }}>{props.text}</div>;
  }

  return (
    <div className="app">
      <div className="top">
        <div className="box peach"></div>
        <div className="middle">
          <div className="inner-middle">
            <TopContent text="Kirsen Yaj" />
            <TopContent text="Villanueva" />
          </div>
        </div>
        <div className="box peach"></div>
      </div>
      
      <div className="middle-section">
        <div className="big pink"></div>
        <div className="column">
          <div className="col pink"></div>
          <div className="col pink"></div>
        </div>
      </div>
      
      <div className="bottom">
        <div className="side purple"></div>
        <div className="mini-wrapper">
          <BottomContent text="C-PCIT9" />
          <BottomContent text="IT3A" />
        </div>
        <div className="side purple"></div>
      </div>
    </div>
  );
}