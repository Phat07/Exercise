import React from 'react';
import { Icon, CollapsibleItem, Collapsible } from 'react-materialize';


const About = () => {
  return (
    <Collapsible
      accordion
      popout
    >
      <CollapsibleItem
        expanded={false}
        header="Team"
        icon={<Icon>people</Icon>}
        node="div"
      >
        Better safe than sorry. That's my motto.
      </CollapsibleItem>
      <CollapsibleItem
        expanded={false}
        header="Nation"
        icon={<Icon>place</Icon>}
        node="div"
      >
        Yeah, you do seem to have a little 'shit creek' action going.
      </CollapsibleItem>
      <CollapsibleItem
        expanded={false}
        header="Daily news"
        icon={<Icon>whatshot</Icon>}
        node="div"
      >
        You know, FYI, you can buy a paddle. Did you not plan for this contingency?
      </CollapsibleItem>
    </Collapsible>
  )
}
export default About;