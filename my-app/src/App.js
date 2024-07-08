import css from './App.module.css';
// import Sidebar from './components/Sidebar';
// import StatefulGreeting from './components/StatefulGreeting';
// import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
// import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';
// import NavBarSimple from './components/NavBarSimple';
// import EventsClass from './components/EventsClass';
// import EventsFunctional from './components/EventsFunctional';
// import EventBinding from './components/EventBinding';
// import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
// import ConditionalRenderingClass from './components/ConditionalRenderingClass';
// import NestingComponents from './components/NestingComponents';
// import MethodsAsPropsParent from './components/MethodsAsPropsParent';
// import NavBarForm from './components/NavBarForm';
// import RenderingLists from './components/RenderingLists';
import Content from './components/Content';

function App() {
  return (
    <div className={css.App}>
      {/* <Sidebar /> */}
      {/* <StatefulGreeting greeting = "I'm stateful class component" name = "Alakel"/> */}
      {/* <StatefulGreetingWithCallback /> */}
      {/* <StatefulGreetingWithPrevState /> */}
      {/* <NavBarSimple /> */}
      {/* <EventsFunctional />
      <EventsClass /> */}
      {/* <EventBinding /> */}
      {/* <ConditionalRenderingFunctional connected={false} />
      <ConditionalRenderingClass /> */}
      {/* <NestingComponents /> */}
      {/* <MethodsAsPropsParent /> */}
      {/* <NavBarForm /> */}
      {/* <RenderingLists /> */}
      <Content />
      
    </div>
  );
}

export default App;