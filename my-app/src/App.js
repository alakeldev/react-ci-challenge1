import css from './App.module.css';
// import Sidebar from './components/Sidebar';
// import StatefulGreeting from './components/StatefulGreeting';
// import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
// import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';
// import NavBarSimple from './components/NavBarSimple';
import EventsClass from './components/EventsClass';
import EventsFunctional from './components/EventsFunctional';


function App() {
  return (
    <div className={css.App}>
      {/* <Sidebar /> */}
      {/* <StatefulGreeting greeting = "I'm stateful class component" name = "Alakel"/> */}
      {/* <StatefulGreetingWithCallback /> */}
      {/* <StatefulGreetingWithPrevState /> */}
      {/* <NavBarSimple /> */}
      <EventsFunctional />
      <EventsClass />

    </div>
  );
}

export default App;