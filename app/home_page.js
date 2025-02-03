import { useState } from "react";

function Header({ title }) {
  return (
    <>
      <h1>{title}</h1>
      <h1>Ready, Set, PARTY!</h1>
      <h2>Planning a party was never this easy!</h2>
    </>
  );
}

function Body() {
  return (
    <b>
      <i>Here's how it works:</i>
    </b>
  );
}

function Footer() {
  return `About Us Contact Terms`;
}

export default function HomePage() {
  const howItWorksSteps = [
    "Sign up",
    "Create an event",
    "Invite the planners to join",
    "Plan it!",
    "Party it!",
  ];
  const [events, setEvents] = React.useState(0);

  function handleClick() {
    console.log("PARTY INITIATED");
    setEvents(events + 1);
  }

  return (
    <>
      <Header title="Welcome to Plan-A-Party" />

      <Body />
      <ul>
        {howItWorksSteps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Start Planning</button>

      <Footer />
    </>
  );
}
